import React from "react";
import useFetchCustom from "./Components/useFetchCustom";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

const CustomHookUseFetch = () => {
  const [id, setId] = React.useState("p001");
  const produtos = useFetchCustom<Produto[]>("https://data.origamid.dev/produtos/");
  const produto = useFetchCustom<Produto>(`https://data.origamid.dev/produtos/${id}`, {
    cache: "force-cache",
  });

  return (
    <section className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button
              onClick={() => setId(produto.id)}
              style={{ fontSize: "1rem" }}
              key={produto.id}
            >
              {produto.id}
            </button>
          ))}
      </div>
      <div>
        <div>{produto.loading && <div>Carregando...</div>}</div>
        {produto.data && (
          <ul>
            <li>ID: {produto.data.id}</li>
            <li>Nome: {produto.data.nome}</li>
            <li>Descrição: {produto.data.descricao}</li>
            <li>Quantidade: {produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default CustomHookUseFetch;
