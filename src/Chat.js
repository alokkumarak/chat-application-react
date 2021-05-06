import React,{useState,useEffect} from 'react'
import './Chat.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import {  AttachFile, MoreVert} from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { CameraAlt } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import db from './firebase';
import { useParams,Link} from "react-router-dom";
import firebase from 'firebase';
import { useStateValue } from './StateProvider';



function Chat() {
    const [{user},dispatch]=useStateValue();
    const {groupId}=useParams();
    const [messages,setMessages]=useState([]);
    const [groupName,setGroupName]=useState("");
    const [input,setInput]=useState("");

    useEffect(()=>{

       if(groupId){
        db.collection("groups")
        .doc(groupId)
        .onSnapshot((snapshot)=>
            setGroupName(snapshot.data().name)
            );
         

         db.collection("groups")
           .doc(groupId)
           .collection("messages")
           .orderBy("timestamp","asc")
           .onSnapshot((snapshot)=>
             setMessages(snapshot.docs.map((doc)=>doc.data()))
            )

       }

    },[groupId]);


    const sendMessage=(e)=>{
        e.preventDefault();


        db.collection("groups")
        .doc(groupId)
        .collection("messages")
        .add({
            message:input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })

       setInput("");

    }

    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+"..":str;
    }
    

    return (
        <div className="chat">
           <div className="chat__header">
              <div className="chat__headerAvatar">
                  <Link to="/"><ArrowBackIcon/></Link>
                 <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random()*500000)}.svg`} />
               </div>
              <div className="chat__headerInfo">
                  <div>{truncate(groupName,15)}</div>
                  <p>last seen today at {" "}{new Date(messages[messages.length-1]?.timestamp?.toDate()).getHours()}:{new Date(messages[messages.length-1]?.timestamp?.toDate()).getMinutes()}</p>
              </div>
              <div className="chat__headerRight">
                 <VideocamIcon />
                 <PhoneIcon />
                 <MoreVert/>
              </div>
           </div>

           <div className="chat__body">
               {messages.map((message)=>(
                <p className={`chat__message ${message.name===user.displayName && "chat__receiver"}`}>
                   <span className="chat__name">
                       {message.name}
                   </span>
                       {message.message}
                   <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).getHours()}:{new Date(message.timestamp?.toDate()).getMinutes()}</span>
                 </p>
               ))}

           </div>
           <div className="chat__footer">
              <div className="chat__footerFrom">
                  <InsertEmoticonIcon/>
                   <form>
                   <input value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Type a message" required/>
                  </form>
                  <AttachFile />
                  <CameraAlt />
              </div>
               <button  type="submit" onClick={sendMessage}><SendIcon /></button>
           </div>
    </div>
    )
}

export default Chat
