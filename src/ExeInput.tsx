import React from "react";
import Input from "./Components/Input";

type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number;
  data: string;
};

const ExeInput = () => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
  const [data, setData] = React.useState<null | Venda[]>(null);

  React.useEffect(() => {
    if (inicio !== "" && final !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`).then(
        (res) =>
          res
            .json()
            .then((json) => setData(json as Venda[]))
            .catch((e) => console.log(e)),
      );
    }
  }, [inicio, final]);

  return (
    <div>
      <div>
        <Input label="Inicio" type="date" value={inicio} setState={setInicio} />
        <Input label="Final" type="date" value={final} setState={setFinal} />
      </div>
      <ul>
        {data &&
          data.map((venda) => (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExeInput;
