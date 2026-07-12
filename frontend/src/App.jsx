import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./MyContext.jsx";
import { useState } from 'react';
import {v1 as uuidv1} from "uuid";

function App() {
  const [prompt , setPrompt] = useState("");
  const [reply , setReply] = useState(null);
  const [currThreadId , setCurrThreadId] = useState(uuidv1());//uuid which gives the id to chats and install ist package npm i uuid
  const [prevChats , setPrevChats] = useState([]);//Stores All Prev Chats of Current Thread
  const [newChat , setNewChat] = useState(true);
  const [allThreads , setAllThreads] = useState([]);

  const providerValues = { 
    prompt, setPrompt, 
    reply, setReply,
    currThreadId , setCurrThreadId,
    newChat , setNewChat,
    prevChats , setPrevChats,
    allThreads , setAllThreads
  };

 

  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>

        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>

      </MyContext.Provider>
    </div>
  )
}

export default App