import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  function refreshPage() {
    window.location.reload(false);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ceaw6ax",
        "template_6y1ip3n",
        form.current,
        "mNV35-Y9obwypPPjh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();
  return (
    <div className="Contact">
      <span id="Contacto">Contactanos</span>
      <div className="form-c">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Tu Nombre" required />
          <input
            type="email"
            name="user_email"
            placeholder="Tu Correo"
            required
          />
          <textarea placeholder="Escribe Aqui..." name="message"></textarea>
          <input
            className="btn-c"
            type="submit"
            value="Send"
            onClick={refreshPage}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
