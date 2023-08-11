import React from 'react';

function Header(){
    return(
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/768px-OOjs_UI_icon_alert-yellow.svg.png" width="40" height="40" alt=""/>
        <div>
          <span className="option signal">Docs</span>
          <span className="option signal">About</span>
          <span className="option button-area">Support Us</span>
        </div>
      </header>
    )
  }

export default Header;