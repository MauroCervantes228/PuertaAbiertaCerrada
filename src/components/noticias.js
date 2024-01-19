import { Noticia } from "./noticia";
export function Noticias(props){
    return(
        <>
            <Noticia titulo="Reconocimiento al mejor alumno" cuerpo="La UTSJR reconoce a ..." autor="Juan Pérez" />
            <Noticia titulo="La UTSJR comienza clases" cuerpo="Comenzamos clases en invierno" autor="Juan Pérez" />
            <Noticia titulo="Becas, inscribete!" cuerpo="Se invita a los alumnos a ..." autor="Juan Pérez" />
        </>
    );
}