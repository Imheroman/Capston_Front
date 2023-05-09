// $(document).ready(function() {
//     // Submit the form when the user clicks the send button
//     $('#send-message-btn').click(function (e) {
//       e.preventDefault();
//       send();
//     });
  
//     // Submit the form when the user presses enter in the input field
    // $('#user-message-input').keypress(function (e) {
    //   if (e.which == 13) {
    //     e.preventDefault();
    //     send();
    //   }
    // });
  
//     function send() {
//       var message = $('#user-message-input').val();
//       if (message) {
//         // $('#user-message-input').val('');
//         // $('.main-chat').append(`
//         //   <div class="message-row message-row--own">
//         //     <div class="message-row__content">
//         //       <div class="message__info">
//         //         <span class="message__bubble">${message}</span>
//         //         <span class="message__time">${new Date().toLocaleTimeString()}</span>
//         //       </div>
//         //     </div>
//         //   </div>
//         // `);
//         // $(".main-chat").scrollTop($(".main-chat")[0].scrollHeight);
//         $.ajax({
//             url: '/query',
//             type: 'post',
//             dataType: 'json',
//             data: $('#send_form').serialize(),
//             success: function(data) {
//                 if (data.messages) {
//                 var messages = data.messages;
//                 $('.main-chat').append(`
//                     <div class="message-row">
//                     <img src="https://monthly.chosun.com/up_fd/Mdaily/2017-09/bimg_thumb/2017042000056_0.jpg" />
//                     <div class="message-row__content">
//                         <span class="message__author">Ryan</span>
//                         <div class="message__info">
//                         ${messages.map(msg => `<span class="message__bubble">${msg}</span>`).join('')}
//                         <span class="message__time">${data.current_time}</span>
//                         </div>
//                     </div>
//                     </div>
//                 `);
//                 $(".main-chat").scrollTop($(".main-chat")[0].scrollHeight);
//                 }
//             }
          
        
//         });
//       }
//     }
//   });
