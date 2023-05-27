import "../styles/TicTacToe.css"
import Table from "./Table";

export default function TicTacToe() {

    return (
        <main className="main-game">
            <h1 className="game-title">
                Jogo da velha
            </h1>
            <Table
                symbol="X"
            />
        </main>
      
    )
}