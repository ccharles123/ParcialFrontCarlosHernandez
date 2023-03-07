import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
  const [user, setUser] = useState({
    NombreCancion: "",
    AutorCancion: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.NombreCancion.length >= 3 && user.NombreCancion.charAt(0) !== "" && user.AutorCancion.length>=6) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Cancion</label>
        <input
          type="text"
          value={user.NombreCancion}
          onChange={(e) => setUser({ ...user, NombreCancion: e.target.value })}
        />
        <label>Autor Cancion</label>
        <input
          type="text"
          value={user.AutorCancion}
          onChange={(e) => setUser({ ...user, AutorCancion: e.target.value })}
        />
        <button>Enviar</button>
        {err && "Por favor chequea que la información sea correcta"}
      </form>
      {show && <Card nombre={user.NombreCancion} autor={user.AutorCancion} />}
    </div>
  )
}

export default Form