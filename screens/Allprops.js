import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Sells = () => {
  const [data, setData] = useState([]);
  const [imagen,setImagen]= useSate([]);


  const loadImg=()=>{
    fetch( "http://localhost:5002/getimagenes")
    .then(res=>res.json())
    .then(res=> setImagen(res))
    .catch(err=>{
      console.log(err)
    })

  }
  const loadData = async () => {
    const response = await axios.get("http://localhost:5002/getprops");
    setData(response.data);
  };
  useEffect(() => {
    loadData();


  }, []);
  const propiedades = data.map(item.st_NombrePropiedad)
  return (
    <div className="">
      <p className="titl">Nuestras Propiedades en venta </p>


      {data.map((item, index) => {

        return (
       
          <div className="row row-cols-3 g-3">
            <div className="col">
            <p>$$SOME{propiedades}</p>
              <div className="card intro">
             {imagen.map(img=>{
                 <img
                 src={'http://localhost:5002/' + img.imagen}  
                 className="card-img-top"
                 alt={imagen} 
               />
             })}
                <div className="card-title">Nombre de prop{item.st_NombrePropiedad}</div>
                <p className="card-text">{item.st_Ubicacion}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sells;
