import React, { useState, useEffect } from "react";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const initailstate = {
  nombre: "",
  email: "",
  telefono: "",
  tipo: "",
  estado: "",
  calle:"",
  exterior:"",
  interior:"",
  cpostal:"",
  colonia:"",
  municipio:"",
};

const Formventa1 = () => {
  const [state, setState] = useState(initailstate);
  const { nombre, email, telefono, tipo, estado ,calle,exterior,interior,cpostal,colonia,municipio} = state;
  const [data, setData] = useState([]);
  const refresh = () => window.location.reload(true);

  const LoadCatalogo = async () => {
    const response = await axios.get("http://45.80.153.150:5002/catalagoestados");
    setData(response.data);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !email || !telefono || !tipo || !estado || !calle || !exterior || !interior || !cpostal || !colonia || !municipio) {
      toast.error("Por favor llene todos los campos");
    } else {
      axios
        .post("http://45.80.153.150:5002/vendemos1", {
          nombre,
          email,
          telefono,
          tipo,
          estado,
          calle,
          exterior,
          interior,
          cpostal,
          colonia,
          municipio,
        })
        .then(() => {
          setState({
            nombre: "",
            email: "",
            telefono: "",
            tipo: "",
            estado: "",
            calle:"",
            exterior:"",
            interior:"",
            cpostal:"",
            colonia:"",
            municipio:"",
          });
        })
        .catch((err) => toast.error(err.response.data));

      toast.success("Se guardo con exito el contenido");
      refresh();
    }
  };

  useEffect(() => {
    LoadCatalogo();
  }, []);

  return (
    <div className="row">
      <div class="col-sm-12">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              className="inputformvendemos"
              name="nombre"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Correo electr&oacute;nico</label>
            <input
              type="text"
              className="inputformvendemos"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div>
            <label>Telefono de contacto</label>
            <input
              type="text"
              className="inputformvendemos"
              name="telefono"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Eres?</label>
            <select
              name="tipo"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInput}
            >
              <option selected>Seleccione</option>
              <option value="propietario">Propietario</option>
              <option value="agente">Agente inmobiliario</option>
            </select>
          </div>

          <h4>Datos de la propiedad</h4>
          <div>
            <label>Estado</label>
            <select
              name="estado"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInput}
            >
              <option selected>Seleccione un estado</option>
              {data.map((item, index) => {
                for (let i = 0; item; i++) {
                  return (
                    <option value={item.id_Estado}>{item.st_Nombre}</option>
                  );
                }
              })}
            </select>
          </div>

          <div>
            <label>Calle</label>
            <input
              type="text"
              className="inputformvendemos"
              name="calle"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Exterior</label>
            <input
              type="text"
              className="inputformvendemos"
              name="exterior"
              onChange={handleInput}
            />
          </div>


          <div>
            <label>Interior</label>
            <input
              type="text"
              className="inputformvendemos"
              name="interior"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>C&oacute;digo Postal</label>
            <input
              type="text"
              className="inputformvendemos"
              name="cpostal"
              onChange={handleInput}
            />
          </div>
          <div>
            <label>Colonia</label>
            <input
              type="text"
              className="inputformvendemos"
              name="colonia"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Alcaldia &oacute; municipio</label>
            <input
              type="text"
              className="inputformvendemos"
              name="municipio"
              onChange={handleInput}
            />
          </div>


          <div>
            <button type="submit" className="btn botin1">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formventa1;
