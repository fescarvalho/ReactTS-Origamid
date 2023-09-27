import React from "react";
import InputLimpo from "./InputLimpo";

type State = {
  nome: string;
  email: string;
};

/* type Action = {
  type: "setNome" | "setEmail";
  payload: string;
}; */
type Action =
  | {
      type: "setNome";
      payload: string;
    }
  | {
      type: "setNome" | "setEmail";
      payload: string;
    };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "setNome":
      return {
        ...state,
        nome: action.payload,
      };
    case "setEmail":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });
  React.useEffect(() => {
    dispatch({ type: "setEmail", payload: "fernando@teste.com" });
  }, []);
  return (
    <div>
      <InputLimpo
        label={`Nome: ${state.nome}`}
        value={state.nome}
        onChange={({ target }) => dispatch({ type: "setNome", payload: target.value })}
      />
      <InputLimpo
        label={`Email: ${state.email}`}
        value={state.email}
        onChange={({ target }) => dispatch({ type: "setEmail", payload: target.value })}
      />
    </div>
  );
};

export default Form;
