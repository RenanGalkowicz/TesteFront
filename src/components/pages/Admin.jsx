import React, { useState } from "react";
import Default from "../templates/Default";

export default function Admin() {
  const [prod, setProd] = useState("");
  const [marca, setMarca] = useState("");
  const [valor, setValor] = useState("");
  const [img, setImg] = useState("");

  const cadFormSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api-cadastro.onrender.com/create`, {
      method: "POST",
      body: JSON.stringify({ prod, marca, valor, img }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setProd("");
      setMarca("");
      setValor("");
      setImg("");
    });
  };

  return (
    <Default>
      <main style={{ margin: "2%" }}>
        <form onSubmit={cadFormSubmit} id="formCadastroProdutos">
          <h2 style={{ color: "white" }}>Cadastro de produtos</h2>
          <div>
            <label style={{ color: "white" }}>Nome do produto</label>
            <input
              value={prod}
              onChange={(event) => setProd(event.target.value)}
              type="text"
              className="form-control"
              id="nomeProd"
              placeholder="Insira o nome do produto"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="marcaProd"
              className="form-label"
              style={{ color: "white" }}
            >
              Marca
            </label>
            <input
              value={marca}
              onChange={(event) => setMarca(event.target.value)}
              type="text"
              className="form-control"
              id="marcaProd"
              placeholder="Insira a Marca"
            />
          </div>

          <button
            className="btn btn-lg btn-outline-success"
            style={{ marginTop: "1.5%" }}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </Default>
  );
}
