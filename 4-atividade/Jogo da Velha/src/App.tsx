import TicTacToe from "./components/TicTacToe" 
import Menu from "./components/Menu"
import { useState } from "react"

function App() {
  const [gameStarted, setGameStarted] = useState(true);

  return  <div className="App">
    {gameStarted ? <TicTacToe/> : <Menu/>}
      {/* <TicTacToe/> */}
  </div>
}

export default App
