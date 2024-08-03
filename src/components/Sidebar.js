import React from 'react';
import { FaSync } from 'react-icons/fa';
import { RiChatNewLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="header-container">
        <h2 className="title">Nucleus.ai</h2>
        <button className="new-chat">
          <RiChatNewLine />
        </button>
      </div>
      <div className="sidebar-header">
        <button className="sidebar-button">Chat History</button>
        <button className="sidebar-button">
          <FaSync />
        </button>
      </div>
      <div className="sidebar-content">
        <p className='heading'>Today</p>
        <p className='text'>Sample chat 1</p>
        <p className='text'>Sample chat 2</p>
        <p className='heading'>Yesterday</p>
        <p className='text'>Sample chat 3</p>
        <p className='text'>Sample chat 4</p>
        <p className='text'>Sample chat 5</p>
      </div>
    </aside>
  );
};

export default Sidebar;
