import Square from "./Square";
import "../styles/Table.css"
import { useState } from "react";
import { useEffect } from "react";

export default function Table({symbol, reset, gameMode} : {symbol: string; reset: boolean; gameMode: string;}) {
    // símbolo atual
    const [value, setValue] = useState(symbol);
    // estado que define de quem é a vez
    const [playerTurn, setPlayerTurn] = useState(true);
    // array com os valores de cada quadrado
    const [table, setTable] = useState<string[]>(["", "", "", "", "", "", "", "", ""]);
    // vencedor
    const [winner, setWinner] = useState("");
    const squareComponents = table.map((value, index) => {
        return <Square key={index} value = {value} onClick={() => play(index)} />
    });
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

    
    if(!playerTurn) {
        setTimeout(() => {
            putValue(computerPlay());
        }, 300);
        setPlayerTurn(true);
    }

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

    function play(index: number) {
        if(gameMode === "1P") {
            if(playerTurn) {
                setPlayerTurn(!playerTurn);
                 putValue(index);
            } 
        } else {
             putValue(index);
        }
    }
  
    

    function computerPlay() {
        let index = Math.floor(Math.random() * 9);
        while(table[index] !== "") {
            index = Math.floor(Math.random() * 9);
        }
    console.log("indice",index)
        return index;
    }

    // função para colocar o valor no quadrado
    function putValue(index: number){
        console.log("putValue")
        // se o quadrado já estiver preenchido, não faz nada
        // se o valor for X, coloca X no quadrado e muda o valor atual para O
        if(table[index] !== "") return;
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
        // muda o estado playerTurn

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
        }

    }



    return (
    <section className="game">
        {squareComponents}
    </section>
    )
}