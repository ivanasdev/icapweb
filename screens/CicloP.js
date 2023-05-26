import React from "react";


import i1 from "../assets/icons/una.png"
import i2 from "../assets/icons/dos.png"
import i3 from "../assets/icons/tres.png"
import i4 from "../assets/icons/cuatro.png"
import i5 from "../assets/icons/cinco.png"
const CicloP =()=>{
    return(

        <div className="container-fluid">

<div className="">

  
<div class="row">
<p className="garant">Ciclo productivo</p>
<div class="col-sm-1 "></div>
<div class="col-sm-2 ">
<div class="investimg">
<img src={i1} className="iconsbenefits"/>
<div class="card-body cardbenfits1
">

<p>Inversi&oacute;n</p>
</div>
</div>
</div>

<div class="col-sm-2">
<div class="investimg">
<img src={i2} className="iconsbenefits"/>
<div class="card-body cardbenfits1
">

<p>Adquisici&oacute;n de propiedades</p>
</div>
</div>
</div>

<div class="col-sm-2">
<div class="investimg">
<img src={i3} className="iconsbenefits"/>
<div class="card-body cardbenfits1
">
  
<p>Regularizaci&oacute;n </p>
</div>
</div>
</div>

<div class="col-sm-2">
<div class="investimg">
<img src={i4} className="iconsbenefits"/>

<div class="card-body cardbenfits1
">
<p>Colocaci&oacute;n de la propiedad </p>

</div>
</div>
</div>
<div class="col-sm-2">
<div class="investimg">
<img src={i5} className="iconsbenefits"/>
<div class="card-body cardbenfits1
">

<p>Retorno de la propiedad  </p>
</div>
</div>
</div>
<div class="col-sm-1 "></div>


</div>

</div>
        </div>

    )
}

export default CicloP