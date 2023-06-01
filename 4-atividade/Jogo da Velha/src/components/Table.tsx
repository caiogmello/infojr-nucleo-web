import Square from "./Square";
import "../styles/Table.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Table({symbol, reset, gameMode} : {symbol: string; reset: boolean; gameMode: string;}) {
    // símbolo atual
    const [value, setValue] = useState(symbol);
    // array com os valores de cada quadrado
    const [table, setTable] = useState<string[]>(["", "", "", "", "", "", "", "", ""]);
    // vencedor
    const [winner, setWinner] = useState("");
    // tabela temporária
    const tempTable = table;
    // condições de vitória
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

    // função para reiniciar o jogo
    useEffect(() => {
        if (reset) {
          setValue(""); // Reinicializa o estado value para uma string vazia
          setTable(["", "", "", "", "", "", "", "", ""]); // Reinicializa o estado table para um array vazio
          setWinner(""); // Reinicializa o estado winner para uma string vazia
        }
      }, [reset]);

    // função para verificar se houve vencedor e alertar o vencedor
    useEffect(() => {
        if (winner) {
            setTimeout(() => {
            alert("Vencedor: " + winner);
            }, 0);
        }
    }, [winner]);


    // função para verificar vitória
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

    // função para verificar empate
    function checkDraw () {
        for(let i = 0; i < table.length; i++) {
            if(table[i] === "") return false;
        }
        return true;
    }

    // função para colocar o valor no quadrado
    function putValue(index: number){
        // se o quadrado já estiver preenchido, não faz nada
        if(tempTable[index] !== "") return
        // se o valor for X, coloca X no quadrado e muda o valor atual para O
        if(value === "X") {
            setValue("O")
            tempTable[index] = "X";
        } 
        // se o valor for O, coloca O no quadrado e muda o valor atual para X
        else if(value === "O") {
            setValue("X")
            tempTable[index] = "O";
        }
        // atualiza o estado table
        setTable(tempTable);

        // verifica se houve vencedor
        if(checkWin()){
            setValue("");
        }

        // verifica se houve empate
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
        // passa o valor do estado value para o componente Square
            valor={value}
        // passa a função putValue para o componente Square
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