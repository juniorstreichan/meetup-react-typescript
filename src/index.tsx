import * as React from "react";
import { render } from "react-dom";
import CalculadoraTipada from "./components/CalculadoraTipada";
import CalculadoraSemTipagem from "./components/CalculadoraSemTipagem";
import "./styles.css";

const App: React.FC = () => (
  <div className="App">
    <h1>React & Typescript</h1>
    <CalculadoraTipada contagemInicial={3} />

    <CalculadoraSemTipagem contagemInicial={3} />
    <CalculadoraSemTipagem />
    <CalculadoraSemTipagem contagemInicial={"1"} />
    <CalculadoraSemTipagem contagemInicial={"TESTE"} />
    <CalculadoraSemTipagem contagemInicial={false} />
    <CalculadoraSemTipagem contagemInicial={[1, 2, 3]} />
  </div>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
