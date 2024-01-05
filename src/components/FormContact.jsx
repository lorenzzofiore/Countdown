import React from 'react';
import './FormContact.css';

export default function FormContact() {
  return (
    <main className="contact-main">
      {/* Formulario oculto de Netlify */}
      <form name="contacto" hidden data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="nombre" />
        <input type="email" name="email" />
        <textarea name="comentarios"></textarea>
      </form>

      {/* Formulario visible */}
      <form method="post" className="form" action="/contact" data-netlify="true">
        <label>
          Name:
        </label>
        <input type="text" name="nombre" placeholder="Name" />
        <label>
          E-mail:
        </label>
        <input type="email" name="email" placeholder="E-mail" />
        <label>
          Comments:
        </label>
        <textarea name="comentarios" placeholder="Leave your comments here"></textarea>
        {/* Conectamos al formulario invisible */}
        <input type="hidden" name="form-name" value="contacto" />
        <input type="submit" value="Enviar" className="submit-btn" />
      </form>
    </main>
  );
}
