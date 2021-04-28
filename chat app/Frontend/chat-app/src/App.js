import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import './App.css';


let socket;
const PORT = 'http://localhost:9700'


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [name, setName] = useState('')
  const [err, setErr] = useState('')
  const [merr, setMErr] = useState('')
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    socket = io(PORT, { transports: ['websocket'] })
  }, [])

  useEffect(() => {
    socket.on('receive', (Content) => {
      setMessageList([...messageList, Content])
    })
  })

  const handleJoinAction = () => {
    if (!name) {
      setErr('Enter Name')
    } else {
      socket.emit('user_joined', name)
      setIsLogged(true)
    }
  }

  const handleSendMessage = () => {
    if (!message) {
      setMErr('Enter Message')
    } else {
      const Content = {
        name, message, type: 'Sent'
      }
      socket.emit('send_message', Content)
      setMessageList([...messageList, Content])
      setMessage('')
    }
  }

  return (
    <div className="App">
      {
        isLogged ? (
          <div className="chat__container">
            <center><h3>Chat Room</h3></center>
            <div className="chat__box">
              {
                messageList.map((item) => {
                  if (item.type === 'Sent') {
                    return (
                      <>
                        <div className="message__sent">
                          <p>
                            <strong>{item.message}</strong>
                          </p>
                        </div>
                      </>
                    )
                  } else {
                    return (
                      <>
                        <div className="message__received">
                          <p>
                            {item.name}<br /><strong>{item.message}</strong>
                          </p>
                        </div>
                      </>
                    )
                  }
                })
              }
            </div>
            <hr />
            <span className="merr">{merr}</span>
            <div className="message__box">
              <input type="text" placeholder="enter message" value={message} onChange={e => {
                setMessage(e.target.value)
                setMErr('')
              }} />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) :
          (
            <div className="not__logged__container">
              <h1 className="title">Chat App</h1>
              <span className="err">{err}</span>
              <input type="text" placeholder="enter your name" value={name} onChange={e => setName(e.target.value)} />
              <button onClick={handleJoinAction}>Join The Chat</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
