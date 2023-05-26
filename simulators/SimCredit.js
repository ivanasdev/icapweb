import React, { useState } from "react";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";



const initalState={
  monto:"",
  plazo:"",
}


const SimuladorInversion = () => {
   const [state, setState] = useState(initalState);

  const{monto,plazo}=state;
  
const HandleInput = (e) => {
 const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name,value)
};

const [investment,setInvestment] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
   
    let c1=parseInt(monto);
    let c2=parseInt(plazo);
    let suma=c1*c2
     setInvestment(suma)
      console.log(parseInt(investment));
};


  return (

    <div className="container-fluid">
      <NavBar/>
    <div className="intro">

      
<div className="row">
<div className="col-sm-12">
  <div className="invest">
    <div className="card-body ">
      <h5 className="card-title garant ">Calcula tu inversi&oacute;n inmobiliaria</h5>



      <form onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-sm-6">
        <label className="garant">Monto a invertir</label>
      <input
      onChange={HandleInput}
       type="number" 
       className="form-control inputsim1"
        placeholder="Ingrese un valor"
        name="monto" />
    </div>
    <div className="col">
    <label className="garant">Plazo de Inversi&oacute;n</label>
 

   <select
   onChange={HandleInput}
   className="form-select inputsim1 " 
   name="plazo">
   <option>12 meses </option>
     <option>24 meses</option>
     <option>36 meses </option>
     <option>48 meses </option>
</select>
    </div>
  </div>
  <button type="submit" className="btn btn-success " style={{backgroundColor:"(rgb(243, 119, 4))"   , marginTop:20}}>Calcular</button>    
      
</form>


   

</div>

</div>
</div>
    

  </div>
    


<div className="col-sm-12">
  <div className="investimg">
    <div className="card-body">
    <h5 className="card-title garant ">Tu inversi&oacute;n</h5>
    <h3 className="Investp">${investment}</h3>

    </div>
  </div>
</div>
</div>
<Footer/>

  </div>
   
  );
};

export default SimuladorInversion;
