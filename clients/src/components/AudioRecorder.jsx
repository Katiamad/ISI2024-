import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";
import { FaFly, FaMicrophone, FaPaperPlane, FaTrash, FaFolder, FaStop, FaEnvelope} from 'react-icons/fa';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audio, setAudio] = useState(null);
  const mediaRecorder = useRef(null);
  const [readyForUpload, setReadyForUpload] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.start();
      mediaRecorder.current.ondataavailable = (e) => {
        setAudio(e.data);
      };
      setRecording(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setRecording(false);
      setReadyForUpload(true);
    }
  };

  const sendVoiceMessage = (voiceMessage) => {
    // Envoyer le message à la base de donnée
        const instance = axios.create({
            withCredentials: true
        });

        instance.post(`${process.env.REACT_APP_API_LINK}messages/send-message/`,
            {
                sender_id: localStorage["user_id"],
                receiver_id: localStorage["user_id"],
                conversation_id: localStorage["conversation_id"],
                content: voiceMessage,
                message_type: 1
            }
        )
            .then(function (res) {
                console.log(res.data);
  
            })
            .catch(function (error) {
                console.log(error)
            });
};

  const uploadAudio = async () => {
    if (audio) {
      const formData = new FormData();
      const fileName = "audio_" + uuid();
      formData.append("audio", audio, fileName)
      sendVoiceMessage(fileName)
      // Save to database 
      try {
        const response = await axios.post("http://localhost:5000/upload/audio-upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      
    }
  };

  return (
    <div className="audio-recorder">
      <a onClick={recording ? stopRecording : startRecording}>
        {recording ? <FaStop /> : <FaMicrophone /> }
      </a>
      {readyForUpload ? <a onClick={uploadAudio}><FaPaperPlane></FaPaperPlane></a> : <></>}
     
      {audio && <audio src={URL.createObjectURL(audio)} controls />}
    </div>
  );
};

export default AudioRecorder;