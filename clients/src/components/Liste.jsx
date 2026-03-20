// import React, { useState, useEffect } from 'react';
// import './Liste2.css';
// import './Liste.css';
// import 'remixicon/fonts/remixicon.css';

// import { FaUser, FaPlus } from 'react-icons/fa';
// import axios from 'axios';
// import io, { connect } from "socket.io-client";
// const socket = io.connect("http://localhost:8000");

// const Liste = ({ conversations, onConversationClick,setIsFriendClicked, isFriendClicked  }) => {
//     const [showWindow, setShowWindow] = useState(false);
//     const [showWindowCreateGroup, setShowWindowCreateGroup] = useState(false);
//     const [data, setData] = useState([])
//     const [messengerContacts, setMessengerContacts] = useState([])
    
//     useEffect(() => {
//     socket.on("me", (id) => {
//         console.log(`Connected to Socket.io server with ID: ${socket.id}`);
//         //         // Écouter l'événement de suppression en temps réel
//         socket.on('deleteContact', (deletedContactId) => {
//             console.log(`Received deleteContact event on client: ${deletedContactId}`); 

//             setMessengerContacts((prevContacts) => prevContacts.filter(contact => contact._id !== deletedContactId));



//     });})
//     //          return () => {
//     //        socket.disconnect();
//     //  };
// },
//     [setMessengerContacts]);

//     // useEffect(() => {
        
// //   socket.on("me", (id) => {
// //     console.log(`Connected to Socket.io server with ID: ${socket.id}`); 
// //         // Écouter l'événement de suppression en temps réel
// //         socket.on('deleteContact', (deletedContactId) => {
// //             console.log(`Received deleteContact event on client: ${deletedContactId}`);

// //           // Mettez à jour la liste des contacts après la suppression en temps réel
// //           setMessengerContacts((prevContacts) => prevContacts.filter(contact => contact._id !== deletedContactId));
// //         });
// //     });
    
// //         // Nettoyage à la sortie du composant
// //         return () => {
// //           socket.disconnect();
// //         };
// //       }, []);

//     const getContacts = () => {
//         const instance = axios.create({
//             withCredentials: true
//         });

//         const params = {
//             email: document.getElementById("search-text").value
//         }
        
//         instance.get(`${process.env.REACT_APP_API_LINK}users/email-part/`, { params: params })
//             .then(function (res) {
//                 setData(res.data)
//                 console.log(res.data)
//             })
//             .catch(function (error) {
//                 console.log(error)
//             });
//     }

//     const getMessengerContacts = () => {
//         const instance = axios.create({
//             withCredentials: true
//         });
        
//         const params = {
//             email: localStorage["email"],
//             user_id: localStorage["user_id"]
//         }

//         instance.get(`${process.env.REACT_APP_API_LINK}messenger-contacts/get-contact-list`)
//             .then(function (res) {
//                 console.log(res.data)
//                 setMessengerContacts(res.data)
//             })
//             .catch(function (error) {
//                 console.log(error)
//             });
//     }

//     const toggleWindow = () => {
//         setShowWindow(!showWindow);
//     };

//     const toggleWindowCreateGroup = () => {
//         setShowWindowCreateGroup(!showWindowCreateGroup);
//     };

//     const handleClick = (friend) => {
//         setIsFriendClicked(true);
//         console.log(setIsFriendClicked)
//         let userName = ""
//         // Appel de la fonction de gestion du clic avec les informations sur la conversation
//         if(localStorage["user_id"] !== friend.contact_id ) {
//             localStorage["msg_receiver"] = friend.contact_id
//             userName = friend.username
//         }
//         else {
//             localStorage["msg_receiver"] = friend.user_id;
//             userName = friend.username2
//         }

//         localStorage["conversation_id"] = friend._id
       
        
//         onConversationClick({
//             name: userName,
//             image: friend.user_avatar,
//             // Ajoutez d'autres informations sur la conversation que vous souhaitez afficher
//         });
        
//     };
    
//     const addConversation = (email) => {
    
//         const instance = axios.create({
//             withCredentials: true
//         });

//         const body = {
//             email: email,
//             user_id: localStorage["user_id"]
//         }

//         if (localStorage["email"] === email) {
//             console.log("Vous ne pouvez pas vous ajouter vous-même à la liste de contacts.");
//             return; // Arrêtez la fonction ici
//           }

//         instance.post(`${process.env.REACT_APP_API_LINK}messenger-contacts/`, body)
//             .then(function (res) {
//                 //setData(res.data)
//                 getMessengerContacts();
//             })
//             .catch(function (error) {
//                 console.log(error)
//             });
//     }
//     const removeConversation = (contact_id) => {
//         socket.emit('deleteContact', contact_id);
//         const instance = axios.create({
//           withCredentials: true,
//         });
    
//         instance
//           .delete(`${process.env.REACT_APP_API_LINK}messenger-contacts/delete-one/${contact_id}`)
//           .then(function (res) {
//             // Mettez à jour la liste des contacts après la suppression
//             getMessengerContacts();  
          
//           })
        
//           .catch(function (error) {
//             console.log(error);
//           });
//       };

//     const getUsername = (user) => {
//         const username = user.user_id === localStorage["user_id"] ? user.username : user.username2  
//         return username
//     }

//     useEffect(() => {
//         getMessengerContacts()
//     }, [])

//     return (
//         <div className="w-1/4 ">
//             <div className="px-2 place-content-center align-items-center mx-auto">
//                 <a onClick={toggleWindow} className=" bg-blue-500 text-sm mt-4 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg block">
//                     <span className="text-blue-500"><FaPlus className="font-bold mx-1 text-blue-500 float-left"></FaPlus></span> New conversation
//                 </a>
//             </div>
//             <div className=" bg-slate-400">
//                 {showWindow && (
//                     <div className="fenetre ">
//                         <div className="text-sm p-3">
//                             <div className='flex align-middle gap-3 place-content-between'>
//                                 <input id="search-text" type="text" placeholder="Rechercher un ami" className="search" onChange={() => getContacts()} />
//                                 <button onClick={()=> getMessengerContacts()}>Ajouter</button>
//                                 <button className="" onClick={toggleWindow}>x</button>
//                             </div>
//                         </div>
//                         <ul>
//                             {data?.map((i) => {
//                                 return (
//                                     <tr>
//                                         <button href="" className="border-b-2 p-3 bg-blue-400" onClick={() => addConversation(i.email)}> {i.email} </button>
//                                     </tr>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//                 )}
//             </div>


            
//             <div className="">
//                 <div className="p-2">
//                     <input type="text" placeholder="Search..." className="w-full rounded-lg border-blue-500 text-black" />
//                 </div>
//                 <div>
//                     <ul>
//                         {messengerContacts.map((friend) => (
//                             <li className="mx-2" key={friend.contact_id} onClick={() => handleClick(friend)}>
//                                 <div className='w-full flex place-content-between align-middle items-center'>
//                                     <img src={friend.user_avatar} alt={friend.first_name} height={50} width="50" className="rounded-full chat-img" />
//                                     <div>
//                                         <h5>{getUsername(friend)}</h5>
//                                         <p className="text-xs">{friend.time}</p>
//                                     </div>
//                                     {friend.user ? <FaUser className="text-green-500 mx-2"></FaUser> : <FaUser className="text-gray-300 mx-2"></FaUser>}
//                                     <button
//                                     className="text-red-500 mx-2"
//                                     onClick={(e) => {
//                                                     e.stopPropagation(); // Empêcher le clic d'activer la conversation
//                                                     removeConversation(friend._id); // Appeler la fonction de suppression
//                                                     }}
//                   >  Supprimer</button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Liste;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from "socket.io-client";
const socket = io.connect("http://localhost:8000");

const Liste = ({ conversations, onConversationClick, setIsFriendClicked, isFriendClicked }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [data, setData] = useState([]);
  const [messengerContacts, setMessengerContacts] = useState([]);

  useEffect(() => {
    socket.on("me", (id) => {
      console.log(`Connected to Socket.io server with ID: ${socket.id}`);
      // Listen for the deleteContact event
      socket.on('deleteContact', (deletedContactId) => {
        console.log(`Received deleteContact event on client: ${deletedContactId}`);
        setMessengerContacts((prevContacts) => prevContacts.filter(contact => contact._id !== deletedContactId));
      });
    });
  }, [setMessengerContacts]);

  const getContacts = () => {
    const instance = axios.create({
      withCredentials: true
    });

    const params = {
      username: document.getElementById("search-text").value
    };
   

    instance.get(`${process.env.REACT_APP_API_LINK}users/email-part/`, { params: params })
      .then(function (res) {
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getMessengerContacts = () => {
    const instance = axios.create({
      withCredentials: true
    });

    instance.get(`${process.env.REACT_APP_API_LINK}messenger-contacts/get-contact-list`)
      .then(function (res) {
        console.log(res.data);
        setMessengerContacts(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    localStorage["conversation_id"] = "";
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClick = (friend) => {
    setIsFriendClicked(true);
    let userName = "";
    if (localStorage["user_id"] !== friend.contact_id) {
      localStorage["msg_receiver"] = friend.contact_id;
      userName = friend.username;
    } else {
      localStorage["msg_receiver"] = friend.user_id;
      userName = friend.username2;
    }

    localStorage["conversation_id"] = friend._id;

    console.log("conversation id = " + localStorage["conversation_id"]);
    onConversationClick({
      name: userName,
      image: friend.user_avatar,
    });
  };

  const addConversation = (username) => {
    const instance = axios.create({
      withCredentials: true
    });

    const body = {
      username: username,
      user_id: localStorage["user_id"]
    };

    if (localStorage["username"] === username) {
      console.log("Vous ne pouvez pas vous ajouter vous-même à la liste de contacts.");
      return;
    }

    instance.post(`${process.env.REACT_APP_API_LINK}messenger-contacts/`, body)
      .then(function (res) {
        getMessengerContacts();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeConversation = (contact_id) => {
    socket.emit('deleteContact', contact_id);
    const instance = axios.create({
      withCredentials: true,
    });

    instance
      .delete(`${process.env.REACT_APP_API_LINK}messenger-contacts/delete-one/${contact_id}`)
      .then(function (res) {
        getMessengerContacts();
      })
      .catch(function (error) {
        console.log(error);
      });
    localStorage["conversation_id"] = '';
  };

  const getUsername = (user) => {
    const username = user.user_id === localStorage["user_id"] ? user.username : user.username2;
    return username;
  };

  useEffect(() => {
    getMessengerContacts();
  }, []);

  return (
    <div className="relative inline-block w-full lg:w-1/4">
      <a onClick={toggleDropdown} className="newconvo">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
        </span> New message
      </a>

      {showDropdown && (
        <div className="absolute top-0 mt-12 border bg-white rounded shadow-md w-full lg:w-auto">
          <div className="text-sm p-3">
            <div className='flex align-middle gap-3 place-content-between'>
              <input id="search-text" type="text" placeholder="Rechercher un ami" className="search" onChange={() => getContacts()} />
              <button className='add' onClick={() => getMessengerContacts()}>Add</button>
              <button className="" onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" className="fermer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10l4 4m0 -4l-4 4" />
                  <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                </svg>
              </button>
            </div>
          </div>
          <ul>
            {data?.map((i) => (
              <li key={i.username}>
                <button className="results" onClick={() => addConversation(i.username)}>{i.username}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="">
        <div className="p-2">
          <input type="text" placeholder="🔍 Search..." className="w-full rounded-lg border-blue-500 " />
        </div>
        <div>
          <ul>
            {messengerContacts.map((friend) => (
              <li className="mx-2" key={friend.contact_id} onClick={() => handleClick(friend)}>
                <div className='flex items-center mb-4'>
                  <img src={friend.user_avatar} alt={friend.first_name} height={50} width="50" className="rounded-full chat-img" />
                  <div className="ml-2">
                    <h5 className='userName'>{getUsername(friend)}</h5>
                    <p className="text-xs">{friend.time}</p>
                  </div>
                  <div className="flex-container">
                    {friend.user ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                      </svg>
                    )}
                    <a
                      className="text-red-500 mx-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeConversation(friend._id);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
          body {
            border-color: transparent;
            background-color: #d5deef;
          }
          .newconvo {
            background-color: #395886;
            color: white;
            padding: 2vh 1vw;
            display: flex;
            margin: 2%;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            color: white;
          }
          .newconvo span svg {
            font-size: 10px;
            margin-left: 3px;
          }
          .userName {
            align-self: flex-start;
            font-weight: bold;
            color: #395886;
          }
          .supp {
            background-color: transparent;
            color: #395886;
          }
          .contactInfo {
            width: 30vw;
          }
          input::placeholder {
            color: #628ecb !important;
            font-size: 14px;
          }
          .flex-container {
            display: flex;
            margin-left: auto;
            align-items: center;
          }
          .user-circle,
          .trash {
            margin-right: 8px;
          }
          .user-circle {
            color: #395886;
          }
          .absolute {
            position: absolute;
          }
          .top-0 {
            top: 0;
          }
          .mt-12 {
            margin-top: 3rem;
          }
          .bg-white {
            background-color: white;
          }
          .border {
            border: 1px solid #ccc;
          }
          .rounded {
            border-radius: 5px;
          }
          .shadow-md {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .fermer{
            background-color:transparent !important;
            color:#395886;
          }
          .add{
            color:white;
            background-color:#395886;
            border-radius:20px;
            padding: 3px px;
          }
          ul li .results{
            background-color:transparent;
            color:black;
            text-align: left !important; 
          }
        `}
      </style>
    </div>
  );
};

export default Liste;
