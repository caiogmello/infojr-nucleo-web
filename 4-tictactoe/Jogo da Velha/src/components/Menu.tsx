import "../styles/Menu.css"

export default function Menu({ setGameMode }: { setGameMode: (mode: string) => void }) {

    return (
      <section className='menu-container'>
        <h1>Jogo da velha</h1>
        <div className="button-container">
          <button className='player1' onClick={() => setGameMode("1P")}>1 P</button>
          <button className='player2' onClick={() => setGameMode("2P")}>2 P</button>
        </div>
      </section>
    )
  }
  