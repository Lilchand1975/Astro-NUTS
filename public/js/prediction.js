$(document).ready(function() {
    //Recognize day selected
    $("option").click(function() {
        var selection = $(this).attr("data-day");
        console.log(selection);

        var queryURL = "/api/days/" + selection;

        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {
            console.log(queryURL);
            console.log(response[0]);
            console.log(response[1]);
            console.log(response[2]);
            console.log(response[3]);
            console.log(response[4]);
            console.log(response[5]);
            console.log(response[6]);
            console.log(response[7]);

            $(".personality").text(response[0]);
            $(".hobbies").text(response[1]);
            $(".lifePartner").text(response[2]);
            $(".luckyNumber").text(response[3]);
            $(".phobia").text(response[4]);
            $(".profession").text(response[5]);
            $(".zodiacSign").text(response[6]);
            $(".favorites").text(response[7]);

        });
    });
    //Post
    // Getting jQuery references to the user first name, last name and birthday
    var firstInput = $("#firstName");
    var lastInput = $("#lastName");
    var birthdayInput = $("#birthday");

    // Adding an event listener for when the form is submitted
  $("#submit-button").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    
    // Constructing a newPost object to hand to the database
    var newUser = {
      firstName: firstInput.val().trim(),
      lastName: lastInput.val().trim(),
      birthday: birthdayInput.val(),
    };

    console.log(newUser);


      submitUser(newUser);



    // Submits a new user
    function submitUser(User) {
    $.post("/api/users/", User, function() {
      console.log(User);
    });
  }

  });

    //

    //Chat App
    // creating variables.
    $(function () {
        var socket = io.connect();
        var $messageForm = $('#messageForm');
        var $message = $('#message');
        var $chat = $('#chat');
        var $messageArea = $('#messageArea');
        var $userFormArea = $('#userFormArea');
        var $userForm = $('#userForm');
        var $users = $('#users');
        var $username = $('#username');
        // capturing send messages and clearing the message on chat area.
        $messageForm.submit(function (e) {
          e.preventDefault();
          socket.emit('send message', $message.val());
          $message.val('');
        });
        // capturing message data in the div.
        socket.on('new message', function (data) {
          $chat.append('<div class="well"><strong>' + data.user + '</strong>: ' + data.msg + '</div>')
        });
        // user form submission function.
        $userForm.submit(function (e) {
          e.preventDefault();
          socket.emit('new user', $username.val(), function (data) {
            if (data) {
              $userFormArea.hide();
              $messageArea.show();
            }
          });
          $username.val('');
        });
        socket.on('get users', function (data) {
          var html = '';
          for (i = 0; i < data.length; i++) {
            html += '<li class="list-group-item">' + data[i] + '</li>';
          }
          $users.html(html);
        });
        $('#chat-toggle').on('click', '#chat-open', function (e) {
          $('#chat-window').show()
          $(this).hide()
          $('#chat-close').show()
        })
        $('#chat-toggle').on('click', '#chat-close', function (e) {
          $('#chat-window').hide()
          $(this).hide()
          $('#chat-open').show()
        })
      });

});