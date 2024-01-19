import React from 'react'

export default function Puerta() {
  const puertas = ['puertacerrada.png', 'puertaabierta.png']

  const [puertaSeleccionada, setPuertaSeleccionada] = React.useState(0)

  function puertaSiguiente() {
    if (puertaSeleccionada < puertas.length - 1) {
      setPuertaSeleccionada(puertaSeleccionada + 1)
    }
  }

  function puertaPrevia() {
    if (puertaSeleccionada > 0) {
      setPuertaSeleccionada(puertaSeleccionada - 1)
    }
  }

  return (
    <div>
      <h1>Puertas</h1>
      <p><img src={process.env.PUBLIC_URL + "/imagenes/" + puertas[puertaSeleccionada]} alt="puerta" /></p>
      <p>
        <input type="button" value="<" onClick={puertaPrevia} />
        <input type="button" value=">" onClick={puertaSiguiente} />
        {puertas[puertaSeleccionada]}
      </p>
    </div>
  )
}