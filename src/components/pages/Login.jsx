import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../atoms/Loading";
import { Alert } from "@mui/material";
import { saveToken } from "../../helper/Auth.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Default from "../templates/Default";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleLogin = (event) => {
    event.preventDefault();

    setIsLoading(true);

    fetch(`http://localhost:8080/user/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    })
      .then(async (response) => {
        console.log(response);
        const { data } = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        saveToken(data.token);
        setCurrentUser(data.user);
        console.log("dataaaaaaa", data);
        navigate(`/info/${data.user._id}`);
      })

      .catch((error) => {
        setEmail("");
        setPassword("");
        setShowError(true);
        setIsLoading(false);
        console.log(error);
      });
  };

  const handleInputFocus = () => {
    setShowError(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <main style={{ margin: "2%" }}>
        <form onSubmit={handleLogin} id="formLogin">
          <h2 style={{ color: "white" }}>Login</h2>
          <div>
            <label style={{ color: "white" }}>E-mail</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onFocus={handleInputFocus}
              type="email"
              className="form-control"
              id="nomeProd"
              placeholder="Insira seu e-mail"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="marcaProd"
              className="form-label"
              style={{ color: "white" }}
            >
              Senha
            </label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onFocus={handleInputFocus}
              type="password"
              className="form-control"
              id="marcaProd"
              placeholder="Insira sua Senha"
            />
          </div>
          {showError && <Alert severity="error">Credenciais com erro!</Alert>}
          <button
            className="btn btn-lg btn-outline-success"
            style={{ marginTop: "1.5%" }}
          >
            Entrar
          </button>
        </form>
      </main>
    </Default>
  );
}
