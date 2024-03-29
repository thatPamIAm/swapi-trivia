import React from 'react';

import './Header.css';

function Header(props) {
  const {user, quote, ranking} = props.user;
  return (
    <header> 
      <button className="logout-btn"
              onClick={() => props.logOutUser()}>Log Out</button>
      <h2>{ranking}</h2>
      <h2>{quote}</h2>
      <h2>{user}</h2>
    </header>
  )
}

export default Header;