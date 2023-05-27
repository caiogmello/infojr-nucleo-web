import Square from "./Square";
import "../styles/Table.css"
import { useState } from "react";

export default function Table({symbol} : {symbol: string}) {
    const [value, setValue] = useState(symbol);
    const [table, setTable] = useState<string[]>(["", "", "", "", "", "", "", "", ""])
    const tempTable = [...table];

    function putValue(index: number){
        if(value === "X") {
            setValue("O")
            tempTable[index] = "O";
            setTable(tempTable);
            return
        }
        setValue("X")
        tempTable[index] = "X";
        setTable(tempTable);
    }

    return (
    <section className="game">
        <Square 
            valor={value}
            onClick={putValue(0)}
        />
        <Square  
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
        <Square 
            valor={value}
            onClick={putValue}
        />
    </section>
    )
}