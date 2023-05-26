import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/img/icapicon.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  nombre: "",
  precio: "",
  superficie: "",
  ubicacion: "",
  plantas: "",
  habitaciones: "",
  sanitarios: "",
  estacionamientos: "",
  caracteristicas: "",
};
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const AdminContent = () => {


  const URI = "http://45.80.153.150:5002";
  const [state, setState] = useState(initialState);

  const {
    nombre,
    precio,
    superficie,
    ubicacion,
    plantas,
    habitaciones,
    sanitarios,
    estacionamientos,
    caracteristicas,
  } = state;

const [photo, setPhoto] = useState(null);
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const history = useNavigate();
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const fileshandler = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const loadImg =  () => {
  fetch(`${URI}/getimagenes`, {
   method: "GET",

 })
   .then((res) => res.json())
   .then((res) => setImagen(res))
   .then((res) => console.log(res))
   .catch((err) => {
     console.log(err);
   });
};

const sendPhoto = () => {
  if (!photo) {
    console.log("No se ha cargado una foto del la propiedad");
    return;
  }
  else{

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const formdata = new FormData();
  formdata.append("files", photo);
  formdata.append("nombre", nombre);

  fetch(`${URI}/imagenes`, {
    method: "POST",
    body:formdata,
  
  })
    .then((res) => res.text())
    .then((res) => console.log(res))
    .catch((err) => {
      console.error(err);
    });
  document.getElementById("filephoto").value = null;
  setPhoto(null);
};
}

const [imagen, setImagen] = useState([]);
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      !nombre ||
      !precio ||
      !superficie ||
      !ubicacion ||
      !plantas ||
      !habitaciones ||
      !sanitarios ||
      !estacionamientos ||
      !caracteristicas
    ) {
      toast.error("Por favor llene todos los campos");
    } else {
      axios
        .post(`${URI}/admindata`, {
          nombre,
          precio,
          ubicacion,
          superficie,
          plantas,
          habitaciones,
          sanitarios,
          estacionamientos,
          caracteristicas,
        })
        .then(() => {
          sendPhoto()
          loadImg();
          setState({
            nombre: "",
            precio: "",
            ubicacion: "",
            superficie: "",
            plantas: "",
            habitaciones: "",
            sanitarios: "",
            estacionamientos: "",
            caracteristicas: "",
          }).catch((err) => toast.error(err.response.data));
          setTimeout(() => history.push("/administrador"), 500);
        });

      toast.success("Se guardo con exito el contenido");
    }
  };

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const HandleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="container-fluid">
      <div className="intro">
        <div className="row">
          <div className="col-sm-12">
            <div className="invest">
              <div className="card-body ">
                <img src={logo} />
                <h5 className="card-title garant ">
                  Administrador de contenidos
                </h5>

                <form onSubmit={handleSubmit}>
                  <div className="row ">
                    <div className="col-sm-6">
                      <label className="formadmin">
                        Nombre de la propiedad
                      </label>
                      <input
                        type="text"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="nombre"
                        value={nombre}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-3">
                      <label className="formadmin">
                        Precio de la propiedad
                      </label>
                      <input
                        type="number"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="precio"
                        value={precio}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-3">
                      <label className="formadmin">
                        Superficie de la construcci&oacute;n
                      </label>
                      <input
                        type="text"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="superficie"
                        value={superficie}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label className="formadmin">Ubicaci&oacute;n</label>
                      <input
                        type="text"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="ubicacion"
                        value={ubicacion}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-3">
                      <label className="formadmin">
                        N&uacute;mero de plantas
                      </label>
                      <input
                        type="number"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="plantas"
                        value={plantas}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-3">
                      <label className="formadmin">Habitaciones</label>
                      <input
                        type="number"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="habitaciones"
                        value={habitaciones}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-3">
                      <label className="formadmin"> Sanitarios</label>
                      <input
                        type="number"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="sanitarios"
                        value={sanitarios}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="col-sm-3">
                      <label className="formadmin">Estacionamientos</label>
                      <input
                        type="number"
                        className="form-control inputsim1"
                        placeholder="Ingrese un valor"
                        name="estacionamientos"
                        value={estacionamientos}
                        onChange={HandleInput}
                      />
                    </div>

                    <div className="form-group col-sm-6">
                      <label for="exampleFormControlTextarea1">
                        Caracteristicas
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="caracteristicas"
                        value={caracteristicas}
                        onChange={HandleInput}
                      ></textarea>
                    </div>

                    <label
                      for="exampleFormControlFile1  "
                      className="formadmin"
                    >
                      Subir Fotos del inmueble
                    </label>
                    <div className="form-group col-sm-12 ">
                      <input
                        type="file"
                        className="form-control-file"
                        id="filephoto"
                        name="files"
                        multiple
                        onChange={fileshandler}
                      />
                    </div>
                  </div>
                  <button className="btn btn-success " type="submit">
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
