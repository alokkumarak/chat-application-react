import React,{useState,useEffect} from 'react';
import Header from './Header';
import Sidebarchat from './Sidebarchat';
import './Sidebar.css'
import db from './firebase';



function Sidebar() {
    const [groups,setGroups]=useState([]);
    
    useEffect(()=>{
        const unsubscribe=db.collection('groups')
        .onSnapshot((snapshot)=>
              setGroups(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data()
              })))
            )
         return()=>{
            unsubscribe();
         }
    },[]);


    return (
        <div className="sidebar">
            <Header />
            <div className="sidebar__chat">
               {groups.map((group)=>(
                 <Sidebarchat  key={group.id} id={group.id} name={group.data.name} />
                ))}
           
            
            </div>
           
        </div>
    )
}


export default Sidebar
