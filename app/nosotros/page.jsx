'use client';

import { useState } from "react";

export default function Nosotros () {
    const [number, setNumero] = useState(20);

    function sumar () {
        const nuevoNumero = number + 1;
        setNumero(nuevoNumero);
    }
    return (
        <>
            <h1>Estas en la pagina Nosotros</h1>
            <p>Contador Random</p>
            <p>Vamos por el numero:{number}</p>
            <button onClick={sumar}>+1</button>
        </>
    )
}