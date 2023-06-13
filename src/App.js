import React, { useState } from 'react'
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')

  const sendEmail = () => {
    fetch('http://localhost:3001/send-email', {  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({ email, subject, text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="App">
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type='text'
        placeholder='Subject'
        value={subject}
        onChange={handleSubjectChange}
      />
      <textarea
        placeholder='Message'
        value={text}
        onChange={handleTextChange}
        >
      </textarea>
      <button onClick={sendEmail}>Send Email</button> 
    </div>
  );
}

export default App;
