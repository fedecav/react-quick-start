import React from 'react';
import {Link} from "react-router-dom"
import './HeaderStandard.css'
export default function Header(){
    return(
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/768px-OOjs_UI_icon_alert-yellow.svg.png" width="40" height="40" alt="" />
        <div className='padding-signal'>
        <Link to='Docs' className="option signal">Docs</Link>
        <Link to='About' className="option signal">About</Link>
        <Link to='SupportUs' className="option button-area">Support Us</Link>
        </div>
        </header>

    )
  }

