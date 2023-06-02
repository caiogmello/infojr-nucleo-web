import { useState } from "react"
import "../styles/Square.css"

export default function Square({onClick } : { onClick: () => string}){
    const [value, setValue] = useState("")
    
    function putValue(){
        if(value === "") {
            setValue(onClick());
            return
        }
    }
    return <button className={value} onClick={putValue}>{value}</button>
}