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
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


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

  const disabledBoton =
    state.name.length < 3 ||
    state.email.length < 5 ||
    state.tema.length < 3 ||
    state.mensaje.length < 5;
      

    function enviarFormulario(e) {
      e.preventDefault();
  
      emailjs.sendForm('capezGmail', 'template_J1gciyhd', e.target, 'user_ohXjZB0I0Z5ClNvVUWGWd')
        .then((result) => {
          setState({name:"", email:"", tema:"", mensaje:""})
          Swal.fire(
            '¡Genial!',
            'Tu consulta fue enviada correctamente',
            'success'
          )
        }, (error) => {
            alert("Por favor complete los campos");
        });
        
    }; 


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form className="mt-5 pt-5 mb-5" onSubmit={enviarFormulario}>
            <p className="h5 text-center mb-4">Hacé tu consulta ¡Estamos para ayudarte!</p>
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
                value={state.mensaje}
                require
              />
            </div>
            <div className="text-center">
              <MDBBtn
                type="submit"
                value="send"
                outline={disabledBoton}
                color="success"
                disabled={disabledBoton}
              >
                Enviar
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol>
          <img src={process.env.PUBLIC_URL + "/imgBody.png"} style={{maxWidth:"510px"}} className="ml-4 pt-5 pb-5"></img>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contacto;
