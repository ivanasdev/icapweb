import React from "react";


import logo from "../assets/img/icapicon.png"
import logowhts from "../assets/icons/whatsapp.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="card-footer text-center">
      <div class="card-header pfotter1">Inmobi Capital</div>

      <div class="row">
          <div class="col-sm-6">
            <div class="">
              <div class="card-body">
              <img className="imglogofooter" src={logo} />
                <p class="card-text">
                  Somos una empresa mexicana enfocada en compartir los beneficios
                  de invertir en el sector inmobiliario con todos nuestros
                  inversionistas.
                </p>
        
              </div>
            </div>
          </div>

        <div class="col-sm-6">
          <div class="">
            <div class="card-body">
              <h5 class="card-title">Contactanos</h5>
              <Link to="/sendmessage">

        <button className="btn  text-white btnapply" >     <img src={logowhts} className="img-fluid logowhts" /> </button>

      </Link>
<p>5589309248</p>
      
      <p>contacto@inmobicapital.com</p>
      <p>
      
Lago Alberto 442, Anáhuac I Secc, Miguel Hidalgo, 11320 Ciudad de México, CDMX
      </p>
            </div>
          </div>
        </div>


        <div class="container-fluid">
        <div class="col-sm-12">
  
            <div class="card-body">
             
              <Link to="/joinus">

        <button className="btn text-white btnapply2" > <h5 class="card-title">&Uacute;nete a nuestro equipo</h5> </button>

      </Link>
            </div>
      
          </div>
        </div>
      </div>
 
      <div class=" text-muted ">


        <p>© 2023 Inmobi Capital. Todos los derechos reservados.</p>


      </div>
    </div>
  );
};

export default Footer;
