import { IconButton } from '@material-ui/core'
import { CameraAlt } from '@material-ui/icons'
import './HeaderBotton.css';
import React from 'react';
import db from './firebase';

function HeaderBotton() {
     
     const createChat=()=>{
        const groupName=prompt("Enter New Group Name :");
        if(groupName){
            db.collection("groups").add({
                name:groupName,
            });
        }
     };

    return (

        <div className="headerbottom">
            <div className="headerbottom__icon">
                <IconButton>
                    <CameraAlt />
                </IconButton>
            </div>
            <h4 className="headerbottom__chat">
                Chat
            </h4>
            <p className="headerbottom__add" onClick={createChat}>
                Add New Chat
            </p>
        </div>
    )
}

export default HeaderBotton
