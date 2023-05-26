import React, { useEffect, useState } from "react";




const CarouselHome=()=>{
  const URI="http://45.80.153.150:5002";
  const [data, setData] = useState([]);
  const loadData = async () => {
    await fetch(`${URI}/getprops`,{
     method: "GET",
         mode: 'cors',
         credentials: 'same-origin',
         referrerPolicy: 'no-referrer',
   
    })
    .then((res) => res.json())
    .then((res) => setData(res))
    .catch((err) => {
      console.log(err);
    });
    
     
     };



  useEffect(()=>{
    loadData();

  },[]);

    return(
<div className="container-fluid">



       
    {data.map((item,index)=>{
      for(let i=0;item;i++){
        return(
          <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
          <div className="carousel-item active" data-interval="2000">
          <div className="carousel-inner">
          <img src={ `${URI}/` + item.st_NombrePropiedad  + ".jpeg"} className="img-fluid imcarousel"/>
          </div>
          </div>
          </div>

        );
      }
    })}


      
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

  

  </div>

    )

}


export default CarouselHome