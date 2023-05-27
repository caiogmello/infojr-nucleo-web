import Square from "./Square";
import "../styles/Table.css"
import { useState } from "react";

export default function Table({symbol} : {symbol: string}) {
    const [value, setValue] = useState(symbol);
    const [table, setTable] = useState<string[]>(["", "", "", "", "", "", "", "", ""]);
    const [winner, setWinner] = useState("");
    const tempTable = table;
    const winConditions = [
        [0, 1, 2], // Horizontal
        [3, 4, 5], // Horizontal
        [6, 7, 8], // Horizontal
        [0, 3, 6], // Vertical
        [1, 4, 7], // Vertical
        [2, 5, 8], // Vertical
        [0, 4, 8] , // Diagonal
        [2, 4, 6] // Diagonal
    ];

    function checkWin() {
        for(let i = 0; i < winConditions.length; i++) {
            const [a,b,c] = winConditions[i];

            if(table[a] !== "" && table[a] === table[b] && table[b] === table[c]){
                setWinner("" + table[a]);
                return true;
            }
        }
        return false;
    }

    function checkDraw () {
        for(let i = 0; i < table.length; i++) {
            if(table[i] === "") return false;
        }
        return true;
    }

    function putValue(index: number){

        if(tempTable[index] !== "") return
        if(value === "X") {
            setValue("O")
            tempTable[index] = "X";
        } else if(value === "O") {
            setValue("X")
            tempTable[index] = "O";
        }
        setTable(tempTable);

        if(checkWin()){
            setTimeout(() => {
                alert("Vencedor: " + winner);
            }, 0);
            setValue("");
        }

        if(checkDraw()) {
            setTimeout(() => {
                alert("Empate!");
            }, 0);
            setValue("");
            return;
        }
    }


    return (
    <section className="game">
        <Square 
            valor={value}
            onClick={() => putValue(0)}
        />
        <Square  
            valor={value}
            onClick={() => putValue(1)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(2)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(3)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(4)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(5)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(6)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(7)}
        />
        <Square 
            valor={value}
            onClick={() => putValue(8)}
        />
    </section>
    )
}