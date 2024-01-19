import React from "react";
import ReactDom from "react-dom/client";
import { Noticias } from "./components/noticias";
import Puerta from "./components/Puerta";

function botonClick(){
    console.log("Click en el botón");
}

function leerNombre(e){
    console.log(e.target.value);
}

function enviarFormulario(e){
    e.preventDefault();
    var grupo=document.getElementById("grupo");
    console.log(grupo.value);
    console.log("Formulario enviado");
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <>
        <Noticias/>
        <button onClick={botonClick}>Guardar</button>
        <input id="nombre" onChange={leerNombre} />
        <form onSubmit={enviarFormulario}>
            <input id="grupo"/>
            <button type="submit">Enviar</button>
        </form>
    </>
);

root.render(
    <>
        <Puerta/>
    </>
)