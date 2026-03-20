// import React from 'react';
// import './InfosUser.css';
// import 'remixicon/fonts/remixicon.css';
// import IconButton from '@mui/material/IconButton';
// import { Button } from '@mui/material';
// import imge from '../images/profiles/imge.png';



// const InfosUser = () => {
//     return (
//         <div className="contactInfo">
//             <div className='contactInfoHaut'>
//                 <h3>Contact Infos</h3>
//                 <IconButton>
//                     <i className="ri-settings-5-line"></i>
//                 </IconButton>
//             </div>
//             <div className='info'>

//                 <img src={imge} alt="" />
//                 <div className='User'>
//                     <h4>UserName</h4>
//                 </div>
//                 <div className='Num'>
//                     <h4>+2130541864597</h4>
//                 </div>
//             </div>
//             <div className='PhoneVideo'>
//                 <IconButton>
//                     <i className="ri-video-add-line"></i>
//                 </IconButton>
//                 <IconButton>
//                     <i className="ri-phone-fill"></i>
//                 </IconButton>
//             </div>


//             <div>
//                 <div className='Medias and docs'>
//                     <h4>Medias and docs</h4>
//                 </div>
//             </div>
//             <div className='contactInfobas'>
//                 <Button><i className="ri-file-reduce-line"></i>Block</Button>
//                 <Button><i className="ri-delete-bin-line"></i>Delete</Button>
//             </div>
//         </div>
//     );
// };

// export default InfosUser;
import React from 'react';
import 'remixicon/fonts/remixicon.css';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import imge from '../images/imge.png';



const InfosUser = () => {
    return (
        <div className="contactInfo">
            <div className='contactInfoHaut'>
                <h3>Contact Information</h3>
            </div>
            <div className='info'>

                <img src={imge} alt="" />
                <div className='User'>
                    <h4>UserName</h4>
                </div>
                <div className='Num'>
                    <h4>+2130541864597</h4>
                </div>
            </div>
           

            {/*<div> 
                <div className='Medias and docs'>
                    <h4>Medias and docs</h4>
                </div>
    </div>*/} 
    
            <div className='contactInfobas'>
                {/* <Button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ban" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M5.7 5.7l12.6 12.6" /></svg>Block</Button> */}
                {/* <Button><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>Delete</Button> */}
            </div>
        <style>
        

            {`
            h3{hl
                color:#395886;
                font-weight:bold;
                font-family: 'Roman', sans-serif;
                align-text:center;
                font-size:1.5vw;
                border-bottom: 1px solid #628ecb;
                margin-top:2vh;
            }
            img{
                border-radius:100%;
                width: 8vw;
                height: auto;
                right:auto;
                left:auto;
            }
            .contactInfo {
                background-color:#D5DEEF !important;
                color: black;
                padding: 2vw;
                text-align: center;
                overflow-y: auto;
                margin-left:1vw;
                border-radius:20px;
                min-height:100vh;
           }
           
            .contactinfoMiddlle {
                border-bottom: 1px solid #628ecb;
            }
            
            .contactInfo h4 {
                margin: 5px 0;
            }
            
            .contactInfobas {
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
                /* Réduisez la marge supérieure */
                margin-left: 30px;
            }
            
            .contactInfobas button {
                padding: 5px 10px;
                border-radius: 20px;
                cursor: pointer;
                transition: background-color 0.3s ease;
                color:red;
                margin-top:10vh;
            }
            
            .contactInfobas button:hover {
                background-color: #ff8080;
                color: white;
            }
            
            .info {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top:5vh;
            }
            
            
            .Num h4 {
                margin-left: 20px;
                margin-top: 1vh;
            }
            
            .User h4 {
                margin-left: 20px;
                margin-top: 2vh;
                font-weight:bold;
            }
            
            
`
}
        </style>
        </div>
    );
};

export default InfosUser;