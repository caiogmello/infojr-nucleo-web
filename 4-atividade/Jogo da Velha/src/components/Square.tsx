import { useState } from "react"
import "../styles/Square.css"

export default function Square({ valor, onClick } : {valor: string, onClick: () => void}){
    const [value, setValue] = useState("")
    function putValue(){
        onClick();
        if(value === "") {
            setValue(valor)
            return
        }
    }
    return <button className={value} onClick={putValue}>{value}</button>
}