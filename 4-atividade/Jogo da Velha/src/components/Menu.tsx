import '../styles/Menu.css';
import { useState } from 'react';

export default function Menu() {
    const [gameStarted, setGameStarted] = useState(false);

    function startGame() {
        setGameStarted(true);
        return gameStarted;
    }

    return (
        <section className='menu-container'>
            <h1>Jogo da velha</h1>
            <div className="button-container">
                <button className='player1' onClick={startGame}>
                    1 P
                </button>
                <button className='player2' onClick={startGame}>
                    2 P
                </button>
            </div>
        </section>
    )
}