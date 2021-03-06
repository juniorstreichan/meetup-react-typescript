import React from "react";

class CalculadoraSemTipagem extends React.Component {
  state = {
    contagemAtual: this.props.contagemInicial
  };

  somar = () => {
    this.setState(prevState => ({
      contagemAtual: prevState.contagemAtual + 1
    }));
  };
  diminuir = () => {
    this.setState(prevState => ({
      contagemAtual: prevState.contagemAtual - 1
    }));
  };
  render() {
    return (
      <div
        style={{
          padding: "15px",
          margin: "10px",
          backgroundColor: "yellow"
        }}
      >
        Calculadora sem tipos <br />
        {this.state.contagemAtual}
        <hr />
        <button onClick={this.somar}>+ somar</button>
        <button onClick={this.diminuir}>diminuir -</button>
      </div>
    );
  }
}

export default CalculadoraSemTipagem;
