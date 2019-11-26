import React from 'react';

import './Header.css';

function Header(props) {
  const {user, quote, ranking} = props.user
;  
  return (
    <header> 
      <h2>{ranking}</h2>
      <h2>{quote}</h2>
      <h2>{user}</h2>
    </header>
  )
}

export default Header;