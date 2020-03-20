import React, { Component } from "react";
import "./App.css";


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: null,
      sobrenome: null,
      idade: null,
      peso: null,
      altura: null,
      formErrors: {
        nome: "",
        sobrenome: "",
        idade: "",
        peso: "",
        altura: ""
      }


    };



  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {

      console.log(`
        --DADOS--
        Nome: ${this.state.nome}
        Sobrenome: ${this.state.sobrenome}
        idade: ${this.state.idade}
        peso: ${this.state.peso}
        altura: ${this.state.altura}

      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      alert("Preencha os campos!");

    }
  };



  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "nome":
        formErrors.nome =
          value.length < 3 ? "Mínimo 3 caracteres" : "";
        break;
      case "sobrenome":
        formErrors.sobrenome =
          value.length < 3 ? "Mínimo 3 caracteres" : "";
        break;
      case "idade":
        formErrors.idade =
          value.length < 1 ? "Mínimo 1 caracter" : "";

        break;
      case "peso":
        formErrors.peso =
          value.length < 1 ? "Mínimo 1 caracter" : "";
        break;
      case "altura":
        formErrors.altura =
          value.length < 1 ? "Mínimo 1 caracter" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Calculadora IMC</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="nome">
              <label htmlFor="nome">Nome</label>
              <input
                className={formErrors.nome.length > 0 ? "error" : null}
                placeholder="Nome"
                type="text"
                name="nome"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.nome.length > 0 && (
                <span className="errorMessage">{formErrors.nome}</span>
              )}
            </div>
            <div className="sobrenome">
              <label htmlFor="sobrenome">Sobrenome</label>
              <input
                className={formErrors.sobrenome.length > 0 ? "error" : null}
                placeholder="Sobrenome"
                type="text"
                name="sobrenome"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.sobrenome.length > 0 && (
                <span className="errorMessage">{formErrors.sobrenome}</span>
              )}
            </div>
            <div className="idade">
              <label htmlFor="idade">Idade</label>
              <input
                className={formErrors.idade.length > 0 ? "error" : null}
                placeholder="Idade"
                type="number"
                name="idade"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.idade.length > 0 && (
                <span className="errorMessage">{formErrors.idade}</span>
              )}
            </div>

            <div className="peso">
              <label htmlFor="peso">Peso</label>
              <input
                className={formErrors.peso.length > 0 ? "error" : null}
                placeholder="Peso em Kg"
                type="number"
                name="peso"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.peso.length > 0 && (
                <span className="errorMessage">{formErrors.peso}</span>
              )}
            </div>

            <div className="altura">
              <label htmlFor="altura">Altura</label>
              <input
                className={formErrors.altura.length > 0 ? "error" : null}
                placeholder="Altura em m"
                type="number"
                name="altura"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.altura.length > 0 && (
                <span className="errorMessage">{formErrors.altura}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Ver Resultados</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
