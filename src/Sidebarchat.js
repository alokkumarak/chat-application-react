import { Avatar } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import './Sidebarchat.css';
import db from './firebase';
import {Link} from "react-router-dom";


function Sidebarchat({id,name}) {
    
    const [avatar,setAvatar]=useState('');
    const [messages,setMessages]=useState('');

    useEffect(()=>{
        setAvatar(Math.floor(Math.random()*5000000))
    },[]);

    useEffect(()=>{
      if(id){
        db.collection("groups")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>(
             setMessages(snapshot.docs.map((doc)=>doc.data()))
          ))

      }
    },[id]);

    function truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+"...":str;
  }

    return (
      <Link to={`/groups/${id}`}>
        <div className="sidebarchat">
            <Avatar 
              src={`https://avatars.dicebear.com/api/human/${avatar}.svg`}
               alt=""
            />
            <div className="sidebarchat__in">
                  <div className="sidebarchat__info">
                   <h6>{truncate(name,20)}</h6>
                  <p>{truncate(messages[0]?.message,25)}</p>
                </div>
                
            </div>
            <p>{new Date(messages[0]?.timestamp?.toDate()).getHours()}:{new Date(messages[0]?.timestamp?.toDate()).getMinutes()}</p>
            
        </div>
        </Link>
    )
}

export default Sidebarchat
