import React, { useContext, useState } from "react";
import Default from "../templates/Default";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

export default function Info() {
  const [cpf, setCpf] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [email, setEmail] = useState("");
  const { currentUser } = useContext(CurrentUserContext);

  React.useEffect(() => {
    setCpf(currentUser.cpf);
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setZipcode(currentUser.zipcode);
    setStreet(currentUser.street);
    setNumber(currentUser.number);
    setComplement(currentUser.complement);
    setNeighborhood(currentUser.neighborhood);
    setEmail(currentUser.email);
  }, [
    currentUser.cpf,
    currentUser.firstName,
    currentUser.lastName,
    currentUser.zipcode,
    currentUser.street,
    currentUser.number,
    currentUser.complement,
    currentUser.neighborhood,
    currentUser.email,
  ]);

  return (
    <Default>
      <main style={{ margin: "2%" }}>
        <form id="formCadastro">
          <h2 style={{ color: "white" }}>Cadastro de Usuário</h2>

          <div className="row g-3">
            <div className="col">
              <label
                htmlFor="cpf"
                className="form-label"
                style={{ color: "white" }}
              >
                CPF
              </label>
              <input
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
                type="text"
                className="form-control"
                id="cpf"
                placeholder="Insira seu CPF"
                required="true"
              />
            </div>
            <div className="col">
              <label
                htmlFor="fn"
                className="form-label"
                style={{ color: "white" }}
              >
                Nome
              </label>
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                type="text"
                className="form-control"
                id="fn"
                placeholder="Insira seu nome"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="ln"
                className="form-label"
                style={{ color: "white" }}
              >
                Sobrenome
              </label>
              <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                type="text"
                className="form-control"
                id="ln"
                placeholder="Insira seu sobrenome"
                required="true"
              />
            </div>

            <div className="col">
              <label
                htmlFor="cep"
                className="form-label"
                style={{ color: "white" }}
              >
                CEP
              </label>
              <input
                value={zipcode}
                onChange={(event) => setZipcode(event.target.value)}
                type="text"
                className="form-control"
                id="cep"
                placeholder="Insira seu CEP"
                required="true"
              />
            </div>
            <div className="col">
              <label
                htmlFor="rua"
                className="form-label"
                style={{ color: "white" }}
              >
                Rua
              </label>
              <input
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                type="text"
                className="form-control"
                id="rua"
                placeholder="Insira a rua"
                required="true"
              />
            </div>

            <div className="col">
              <label
                htmlFor="Nr"
                className="form-label"
                style={{ color: "white" }}
              >
                Numero
              </label>
              <input
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                type="text"
                className="form-control"
                id="Nr"
                placeholder="o numero da casa"
                required="true"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="cpl"
                className="form-label"
                style={{ color: "white" }}
              >
                Complemento
              </label>
              <input
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
                type="text"
                className="form-control"
                id="cpl"
                placeholder="complemento"
              />
            </div>

            <div className="col">
              <label
                htmlFor="brro"
                className="form-label"
                style={{ color: "white" }}
              >
                Bairro
              </label>
              <input
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
                type="text"
                className="form-control"
                id="brro"
                placeholder="Insira o bairro"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "white" }}
              >
                E-mail
              </label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="form-control"
                id="email"
                placeholder="Insira seu e-mail"
                required="true"
              />
            </div>
          </div>

          <button
            className="btn btn-lg btn-outline-success"
            style={{ marginTop: "1.5%" }}
          >
            <Link to="/logoutr">Atualizar</Link>
          </button>
        </form>
      </main>
    </Default>
  );
}
