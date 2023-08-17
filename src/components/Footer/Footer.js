import React from 'react';
import './Footer.css'

function Footer(){
    return(
      <footer className="final-part">
      <div className="statistics">  
          <span className="final-script"> characters:826</span>
          <span className="final-script"> locations:126 </span>
          <span className="final-script">  episodes:51 </span>
      </div>
      <div className="server">
          <span className="final-script-2"><i className="fa-solid fa-circle" sstyle={{ color: 'green' }}></i>server online</span>
      </div>
      <div className="server">
      <a href="https://www.mrw.it/html/collegamenti-ipertestuali-inserire-link_9454.html" title="visita il sito">
        <img src="https://th.bing.com/th/id/OIP.EMRp7MKU3LcACix7LpdQGwHaHa?pid=ImgDet&rs=1" height="40" width="40" alt=""/>
      </a>
      </div>
    </footer>
    )
}

export default Footer;