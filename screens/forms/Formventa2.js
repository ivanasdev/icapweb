import React from "react";



const Formventa2 = () => {


  return (
    <div className="row">
      <div class="col-sm-12">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
              placeholder="Nombre:"
              type="text"
              className="inputformvendemos"
              name="nombre"
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Correo electr&oacute;nico</label>
            <input
              placeholder="Email"
              type="text"
              className="inputformvendemos"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div>
            <label>Telefono de contacto</label>
            <input
              placeholder="Telefono de contacto:"
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

export default Formventa2