import React from "react";

import logo from "../assets/img/icapicon.png";
import asssetinv from "../assets/img/ba.jpg";
import i1 from "../assets/icons/business-and-finance.png"
import i2 from "../assets/icons/bars.png"
import i3 from "../assets/icons/hand.png"
import i4 from "../assets/icons/money.png"
import SimuladorInversion from "../simulators/SimCredit";
import CicloP from "../screens/CicloP";
const Beneficios = () => {
  return (
    <div className="container-fluid">
<div className="introInvest">

  
<div class="row">
<p className="garant"> Beneficios de invertir con nosotros</p>
  
<div class="col-sm-3 ">
<div class="investimg">
<div class="card-body cardbenfits">
  <img src={i1} className="iconsbenefits"/>
<p>Rendimiento superiores
a los del mercado</p>
</div>
</div>
</div>

<div class="col-sm-3">
<div class="investimg">
<div class="card-body cardbenfits">
  <img src={i2} className="iconsbenefits"/>
<p>Inversi&oacute;n garantizada</p>
</div>
</div>
</div>

<div class="col-sm-3">
<div class="investimg">
<div class="card-body cardbenfits">
  <img src={i3} className="iconsbenefits"/>
<p>Nuestro portafolio permite brindarle certeza a su inversi&oacute;n </p>
</div>
</div>
</div>

<div class="col-sm-3">
<div class="investimg">
<div class="card-body cardbenfits">
  <img src={i4} className="iconsbenefits"/>
<p>Tasa de inter&eacute;s fija</p>
</div>
</div>
</div>


</div>
<CicloP/>
</div>
<SimuladorInversion/>
</div>
 
  );
};

export default Beneficios;



