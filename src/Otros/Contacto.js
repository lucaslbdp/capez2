import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import "../../src/App.css";

const Contacto = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    tema: "",
    mensaje: "",
  });
  const handleChangeInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

  };
  const enviarFormulario = () => {
  };
  const disabledBoton =
    state.name.length < 3 ||
    state.email.length < 7 ||
    state.tema.length < 8 ||
    state.mensaje.length < 7;

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form className="mt-5 mb-5" onSubmit={() => enviarFormulario()}>
            <p className="h5 text-center mb-4">Hace tu consulta SIN CARGO</p>
            <div className="grey-text">
              <MDBInput
                label="Tu nombre"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                onChange={(e) => handleChangeInput(e)}
                name="name"
                value={state.name}
                require
              />
              <MDBInput
                label="Tu email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                name="email"
                onChange={(e) => handleChangeInput(e)}
                value={state.email}
                require
              />
              <MDBInput
                label="Tema"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                name="tema"
                onChange={(e) => handleChangeInput(e)}
                value={state.tema}
                require
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Tu mensaje"
                icon="pencil-alt"
                name="mensaje"
                onChange={(e) => handleChangeInput(e)}
                value={state.value}
                require
              />
            </div>
            <div className="text-center">
              <MDBBtn
                className="botonEnviarMail"
                outline={disabledBoton}
                color="secondary"
                onClick={() => enviarFormulario()}
                disabled={disabledBoton}
              >
                Enviar
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contacto;
