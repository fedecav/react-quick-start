import React from 'react';
import {Link, Routes} from "react-router-dom"
import './Header.css'

export default function Header(props){
  console.log("props:")
  console.log(props)
    return(
      <header className={props.fixed ? 'fixed' : 'header'} >
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/768px-OOjs_UI_icon_alert-yellow.svg.png" width="40" height="40" alt="" />
        </Link>
        <div className='padding-signal'>
        <Link to='/Docs' className="option signal">Docs</Link>
        <Link to='/About' className="option signal">About</Link>
        <Link to='/SupportUs'className="option button-area">Support Us</Link>
        </div>
        </header>

    )
  }

