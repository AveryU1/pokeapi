import React, { useState } from "react";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const UserInput = () => {
  const [value, setValue] = useState("");
  //siempre guardar estas funciones de react en constantes
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = e => {
    e.preventDefault();
    dispatch(changeUser(value));
    navigate("/pokedex/"); //para poder navegar entre las distintas rutas de forma funcional
  };
  return (
    <div className="input-container">
      <div>
        <div>
          <h1>Welcome trainer!</h1>
        </div>
        <form onSubmit={submit}>
          <input
            placeholder="Write your name here"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
