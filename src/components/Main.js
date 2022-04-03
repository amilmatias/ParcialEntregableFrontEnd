import React, { Component } from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "../data/data.json";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      historial: [],
      seleccionPrevia: "",
      info: data
    };
  }

  handleClick = (e) => {
    const id = e.target.id;

    if (this.state.contador >= 7) {
      return alert("Fin de la historia ! Recarga la pagina para comenzar de nuevo.");

    } else if (id === "A" && this.state.seleccionPrevia !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
      });
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + 3,
        seleccionPrevia: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
      });
    }
    this.setState({historial: [...this.state.historial, id]});
  };

  componentDidMount(){
    this.setState({...this.state, info: data, seleccionPrevia: "-Ultima eleccion"});
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">
          {data[this.state.contador].historia}
        </h1>

        <Opciones

          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />

        <Recordatorio
        
          seleccionPrevia={this.state.seleccionPrevia}
          historial={this.state.historial.map(
            (e, index) => (<li key={index}>{e}</li>),data[this.state.contador].id )}

        />
      </div>
    );
  }
}

export default Main;
