var universidad="UTSJR";
function verificarUniversidad(){
    var validar;
    universidad==="UTSJR"? validar = "si" : validar = "no";
    return validar;
}
export function Noticia({titulo, cuerpo, autor}){
    return(
        <>
            {console.log(verificarUniversidad())}
            <h3>{titulo}</h3>
            <p>{cuerpo}</p>
            <p>{autor} - {universidad}</p> 
        </>
    );
}