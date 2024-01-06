import './contacto.css'

export default function Contacto () {
    return (
        <main className='contact-main'>
            <header>
                <h1>Hace la consulta que quieras!</h1>
                <p>Te estaremos respondiendo a la brevedad</p>
            </header>

            {/* Este es el form oculto de Netlify */}
            <form action='./contacto/gracias' name='contacto' hidden data-netlify='true' netlify-honeypot='bot-field'>
                <input type="text" name='nombre' />
                <input type="email" name='email' />
                <textarea name='comentarios'></textarea>
            </form>

            <form method="post" className="form">
                <label>
                    Nombre:
                </label>
                <input type="text" name='nombre' />
                <label>
                    E-mail:
                </label>
                <input type="email" name='email' />
                <label>
                    Comentarios:
                </label>
                <textarea name='comentarios'></textarea>
                {/* Conectamos al form invisible */}
                <input type="hidden" name='form-name' value='contacto' />
                <input type="submit" value='Enviar' className='submit-btn'/>
            </form>
        </main>
    )
}