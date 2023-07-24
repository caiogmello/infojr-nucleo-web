import TicTacToe from "./components/TicTacToe" 
import Menu from "./components/Menu"
import { useState } from "react"

function App() {
  const [gameMode, setGameMode] = useState(""); // Estado para controlar o modo de jogo selecionado

  return (
    <div className="App">
      {gameMode === "" ? (
        <Menu setGameMode={setGameMode} />
      ) : (
        <TicTacToe gameMode={gameMode} />
      )}
    </div>
  );
}

export default App;
