import "../styles/TicTacToe.css"
import Table from "./Table";
import { useState } from "react";

export default function TicTacToe() {

    const [value, setValue] = useState("");

    function changeValue(s: string) {
        setValue(s);
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
                        <button className="X" onClick={() => changeValue("X")}>
                            X
                        </button>
                        <button className="O" onClick={() => changeValue("O")}>
                            O
                        </button>
                    </div>
                </div>
            </header>
            <Table
                symbol={value}
            />
            <button className="restart">Recomeçar</button>
        </main>
      
    )
}