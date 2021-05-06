import React, { useState } from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Login from './Login'
import Chat from './Chat'
import { useStateValue } from './StateProvider';



function App() {
  const [{user},dispatch]=useStateValue();

  return (
    <div className="app">
          <div className="app__body">
             {!user?(
               <Login />
             ):(
             
              <Router>
              <Switch>
                <Route exact path="/">
                    <Sidebar />
                 </Route>
                <Route exact path="/groups/:groupId">
                   <Chat />
                 </Route>
                 </Switch>
               </Router>
               
             )}
             
            
             </div>
    </div>
  );
}

export default App;
