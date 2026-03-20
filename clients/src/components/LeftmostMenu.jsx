// import React from "react";



// function LeftmostMenu() {
//     return (
//         <div class="left">
//             <ul class="leftoptions">
//                 <li class="option">
//                     <a href="/">
//                         <span class="text-gray-800 text-small">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
//                                 <path d="M3 7l9 6l9 -6" />
//                             </svg>
//                         </span>
//                     </a>
//                 </li>
//                 <li class="option">
//                     <a href="/messenger">
//                         <span class="text-gray-800">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
//                             </svg>
//                         </span>
//                     </a>
//                 </li>
//                 <li class="option">
//                     <a href="/profile">
//                         <span class="text-gray-800">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
//                                 <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
//                                 <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
//                             </svg>
//                         </span>
//                     </a>
//                 </li>
//                 <li class="option">
//                     <a href="/contacts">
//                         <span class="text-gray-800">
//                         <i class="fa fa-address-card-o" aria-hidden="true"></i>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                                 <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
//                                 <path d="M10 16h6" />
//                                 <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
//                                 <path d="M4 8h3" />
//                                 <path d="M4 12h3" />
//                                 <path d="M4 16h3" />
//                             </svg>
//                         </span>
//                     </a>
//                 </li>
//             </ul>
//         <style>
//         {`
//          .left{
//             background-color:#b1c9ef;
//             width:4vw;
//             border-radius:20px;
//             top:8.7vh;
//             margin-left:5px;
//             margin-bottom:4px;
//             position:fixed;
//             height:100vh;
//         }
//         .leftoptions{
//             display:flex;
//             flex-direction:column;
//             align-items:center;
//             /*justify-content:center;*/
//             height:100%;
//             margin-top:18vh;
            
//         }
//         .option{
//             margin-bottom:15px;
//         }

//         .option:active svg {
//             color:white;
//         }
//         `}
//         </style>
    
//         </div>
//     )
// }

// export default LeftmostMenu;
import React, { useState, useEffect } from "react";

function LeftmostMenu() {
  const [newMessagesCount, setNewMessagesCount] = useState(0);

  useEffect(() => {
    // Fetch the new messages count or update it using your logic
    // For now, setting it to a static value for demonstration purposes
    setNewMessagesCount(3); // Set to the actual count of new messages
  }, []); // You might want to trigger this effect based on events or data changes

  return (
    <div className="left">
      <ul className="leftoptions">
        <li className="option">
          <a href="/Inbox">
            <span className="text-gray-800 text-small" title='Emails'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </span>
          </a>
          </li>
          <li class="option">
          <li className="option">
                <a href="/messenger">
                    <span className="text-gray-800" title='Chat'>
                    <svg xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-message-circle" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                    </svg>
                    {newMessagesCount > 0 && <span className="dot" />}
                    </span>
                </a>
                </li>

                </li>
                <li class="option">
                    <a href="/profile">
                        <span class="text-gray-800" title='Profile'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </span>
                    </a>
                </li>
                <li class="option">
                    <a href="/group">
                        <span class="text-gray-800" title='GroupChats'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users-group" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                        <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                        <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                        </svg>
                        </span>
                    </a>
                </li>
                <li class="option">
                    <a href="/contacts">
                        <span class="text-gray-800" title='Contacts'>
                        <i class="fa fa-address-card-o" aria-hidden="true"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                                <path d="M10 16h6" />
                                <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M4 8h3" />
                                <path d="M4 12h3" />
                                <path d="M4 16h3" />
                            </svg>
                        </span>
                    </a>
                </li>
            </ul>
 
      <style>
        {`
          .left {
            background-color: #b1c9ef;
            width: 4vw;
            border-radius: 20px;
            top: 8.7vh;
            margin-left: 5px;
            margin-bottom: 4px;
            position: fixed;
            height: 100vh;
          }
          .leftoptions {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            margin-top: 18vh;
          }
          .option {
            margin-bottom: 15px;
          }
          .text-gray-800 {
            position: relative;
            display: inline-block;
          }
          
          .dot {
            background-color: red;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 0;
          }
          
        `}
      </style>
    </div>
  );
}

export default LeftmostMenu;
