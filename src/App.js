import './App.css';
import Message from "./Message";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

import React,{ useState, useEffect ,useRef } from 'react';

import { FormControl, Input } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';





function App() {
  const [input,setInput] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [name,setName] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => {
      setMsgs(snapshot.docs.map(doc => ({id: doc.id ,msg: doc.data()})))
    })
    
  }, [])

  useEffect(() => {
    setName(prompt("Enter Your Name: "));
  }, [])
  console.log(input);
  console.log(msgs);

  const sendMessage = event =>{
    event.preventDefault();
    db.collection('messages').add({
      txt: input,
      name: name,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  //Scrolling to Bottom
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="Messenger Logo"/>
      <h1>Messenger</h1>
      <h2>Hello {name}</h2>
      <form className="app__form">
        <FormControl className="app_formControl">
          <Input onClick={executeScroll} className="app__input" placeholder="Enter a Message" value={input} onChange={e => setInput(e.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon /></IconButton>
        </FormControl>
      </form>
      <FlipMove>
        <div style={{marginBottom: "110px"}}>
          {
            msgs.map(({msg,id}) => (
            <Message ref={myRef} key={id} name={name} txt={msg}/>
            ))
          }
        </div>
      </FlipMove>
      
    </div>
  );
}

export default App;
