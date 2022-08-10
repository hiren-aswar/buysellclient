import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'
import "./admin.css"

export default function Admin({socket}) {
  return (
    <div className="App">
          <div className="app_body">
            <Sidebar socket={socket} />
            <Chat socket={socket} />
          </div>
        </div>
  )
}
