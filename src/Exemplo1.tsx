import React from "react";
import Button from "./Button";

function user() {
  return {
    nome: "Andre",
    profissao: "Designer",
  };
}

type User = {
  nome: string;
  profissao: string;
};

const Exemplo1 = () => {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <Button incrementar={setTotal} />
      </div>

      {data !== null && (
        <div>
          {data.nome}: {data.profissao}{" "}
        </div>
      )}
    </div>
  );
};

export default Exemplo1;
