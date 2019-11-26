import React from 'react';

import './Header.css';

function Header(props) {
  const {user, quote, ranking} = props.user
  console.log(props)
;  
  return (
    <header> 
      <button onClick={() => props.logOutUser()}>Log Out</button>
      <h2>{ranking}</h2>
      <h2>{quote}</h2>
      <h2>{user}</h2>
    </header>
  )
}

export default Header;