import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import './HeaderTop.css';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useStateValue} from './StateProvider';


function HeaderTop() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="headertop">
            <div className="headertop__avatar">
               <Avatar src={user?.photoURL} alt="" />
            </div>
            <h2>WhatsApp</h2>
            <div className="headertop__icons">
                  <IconButton>
                     <SearchIcon />
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon />
                 </IconButton> 
                 
            </div>
        </div>
    )
}

export default HeaderTop
