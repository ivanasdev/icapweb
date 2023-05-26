import React, { useState } from "react";
//import axios from 'axios'
const Fileup = () => {
  const [photo, setPhoto] = useState(null);

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const fileshandler = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
  const sendPhoto = () => {
    if (!photo) {
      console.log("No se ha cargado una foto del la propiedad");
      return;
    }

    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    const formdata = new FormData();
    formdata.append("files", photo);

    fetch("http://localhost:5002/imagenes", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
    document.getElementById("filephoto").value = null;
    setPhoto(null);
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            name="files"
            onChange={fileshandler}
            multiple
          />
          <div id="fileHelpId" className="form-text">
            Help text
          </div>
        </div>
        <div>
          <button
            id="filephoto"
            className="btn btn-success"
            onClick={sendPhoto}
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Fileup;
