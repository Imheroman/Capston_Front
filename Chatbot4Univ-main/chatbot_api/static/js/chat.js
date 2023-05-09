$(document).ready(function() {
    $('#send-message-btn').click(function (e) {
      e.preventDefault();
      send();
    });
  
    $('#send_form').on('submit', function(e) {
      e.preventDefault();
      send();
    });
  
    function send() {
      var message = $('#user-message-input').val();
      if (message) {
        $('#user-message-input').val('');
        $('.main-chat').append(`
          <div class="message-row message-row--own">
            <div class="message-row__content">
              <div class="message__info">
                <span class="message__bubble">${message}</span>
                <span class="message__time">${new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>
        `);
        $(".main-chat").scrollTop($(".main-chat")[0].scrollHeight);
        $.post('/query', {'client_chat': message}, function(data) {
            console.log(data);
            try {
                var current_time = data.current_time;
                var response_messages = data.messages
                var messageRow = $('<div class="message-row"><img src="https://monthly.chosun.com/up_fd/Mdaily/2017-09/bimg_thumb/2017042000056_0.jpg" /><div class="message-row__content"><span class="message__author">Ryan</span><div class="message__info"><span class="message__bubble">' + response_messages.join("<br>") + '</span><span class="message__time">' + current_time + '</span></div></div></div>');
                $('.main-chat').append(messageRow);
                $('.main-chat').scrollTop($('.main-chat')[0].scrollHeight);
            } catch (e) {
                console.log("Error parsing JSON data:", e);
            }
            

        });
      }
    }
  });
  
  // $.ajax({
        //   url: '/query',
        //   type: 'post',
        //   dataType: 'json',
        //   data: $('#send_form').serialize(),
        //   success: function(data) {
        //     if (data.response) {
        //       $('.main-chat').append(`
        //         <div class="message-row">
        //           <img src="https://monthly.chosun.com/up_fd/Mdaily/2017-09/bimg_thumb/2017042000056_0.jpg" />
        //           <div class="message-row__content">
        //             <span class="message__author">Ryan</span>
        //             <div class="message__info">
        //               <span class="message__bubble">${data.response}</span>
        //               <span class="message__time">${new Date().toLocaleTimeString()}</span>
        //             </div>
        //           </div>
        //         </div>
        //       `);
        //       $(".main-chat").scrollTop($(".main-chat")[0].scrollHeight);
        //     }
        //   }
        // });