import "../styles/TicTacToe.css"
import Table from "./Table";
import { useEffect, useState } from "react";

export default function TicTacToe() {

    const [symbol, setSymbol] = useState("");
    const [reset, setReset] = useState(false); // Estado de reinicialização

    function changeValue(s: string) {
        setSymbol(s);
        // mudar a cor do botão clicado: 
        document.querySelector(`.${s}`)?.classList.add("selected");
    }

    useEffect(() => {
        if (reset) {
            setReset(false);
        }
    }, [reset]);

    function restart() {
        setReset(true);
        document.querySelector(`.${symbol}`)?.classList.remove("selected"); 
        setSymbol("");
    }

    return (
        <main className="main-game">
            <header>
                <h1 className="game-title">
                    Jogo da velha
                </h1>
                <div className="choose-symbol">
                    <h2>Quem começa?</h2>
                    <div className="button-container">
                        <button className="X" 
                        onClick={() => changeValue("X")}
                        disabled={symbol !== ""} >
                            X
                        </button>
                        <button className="O" 
                        onClick={() => changeValue("O")}
                        disabled={symbol !== ""} >
                            O
                        </button>
                    </div>
                </div>
            </header>
            {symbol !== "" && <Table symbol={symbol} reset={reset} />}
            <button className="restart" onClick={restart}>Recomeçar</button>
        </main>
      
    )
}