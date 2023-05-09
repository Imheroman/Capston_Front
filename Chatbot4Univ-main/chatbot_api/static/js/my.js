// $(document).ready(function() {
//     // 클릭 버튼이 눌렸을 때 동작
//     $('#send-message-btn').click(function (e) {
//         e.preventDefault();
//         send();
//     });

//     // 입력 창에서 엔터 버튼이 눌렸을 때 동작
//     $('#user-message-input').keypress(function (e) {
//         if (e.which == 13) {
//             e.preventDefault();
//             send();
//         }
//     });

//     function send() {
//         var message = $('#user-message-input').val();
//         if (message) {
//             jQuery('#user-message-input').val('');
//             jQuery('.main-chat').append(`
//                 <div class="message-row message-row--own">
//                     <div class="message-row__content">
//                         <div class="message__info">
//                             <span class="message__bubble">${message}</span>
//                             <span class="message__time">${new Date().toLocaleTimeString()}</span>
//                         </div>
//                     </div>
//                 </div>
//             `);

//         // 서버로 데이터를 전송
            // $.post('/query', {'client_chat': message}, function(data) {
            //     console.log(data);
            // });
//             $.ajax({
//                 url: '/query', // 요청 할 주소
//                 async: true, // false 일 경우 동기 요청으로 변경
//                 type: 'POST', // GET, PUT
//                 data: {
//                     Name: 'ajax',
//                     Age: '10'
//                 }, // 전송할 데이터
//                 dataType: 'json', // xml, json, script, html
//                 beforeSend: function(jqXHR) {}, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
//                 success: function(jqXHR) {}, // 요청 완료 시
//                 error: function(jqXHR) {}, // 요청 실패.
//                 complete: function(jqXHR) {} // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
//             });

//         }
//     }

// });
