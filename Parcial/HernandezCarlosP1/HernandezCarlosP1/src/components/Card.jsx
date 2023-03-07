import React from 'react';

const Card = ({nombre, autor}) => {

return (
  <div>
      <h3>Nombre de la cancion es {nombre}, del autor {autor}</h3>
  </div>
)
}

export default Card