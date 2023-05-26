import React, { useState } from "react";

import logo from "../assets/img/icapicon.png"
import SendMessage from "./SendMessage";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";



const Contact=()=>{

const [message,setMensaje]=useState("")

    return(


<div className="container-fluid">
    <NavBar/>
            <div className="C1">
       
            <div className="Card CardH">
              <div className="intro">
              <img className="imglogo" src={logo} />
         <div className="container-fluid "> 

<p className="p2">
contacto@inmobicapital.com
</p>
<p className="p2">
55 8930 9248
</p>
<a  onClick={ () => setMensaje((<SendMessage />))} className="btn bt11">Contactanos</a>



        
              </div>
              {message}
              </div>
            </div>
        </div>
        <Footer/>
        </div>

    )
}

export default Contact