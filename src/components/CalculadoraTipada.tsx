import * as React from "react";

interface Props {
  contagemInicial: number;
}
interface State {
  contagemAtual: number;
}
class CalculadoraTipada extends React.Component<Props, State> {
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
          backgroundColor: "blue",
          color: "white"
        }}
      >
        Calculadora com tipos <br />
        {this.state.contagemAtual}
        <hr />
        <button onClick={this.somar}>+ somar</button>
        <button onClick={this.diminuir}>diminuir -</button>
      </div>
    );
  }
}

export default CalculadoraTipada;
