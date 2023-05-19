import React, { useState } from "react";
import "Calculator.css"
export default function Calculator() {

    const [number, setNumber] = useState("");
    // const [numberSize, setNumberSize] = useState(0);
    const [tempNumber, setTempNumber] = useState("");
    const [clearName, setClearName] = useState("AC");
    const [operator, setOperator] = useState("=");
    const [commaIn, setCommaIn] = useState(0);
    
    function getNumber(v) {
        // if(numberSize === 9){
        //     return;
        // }

        if(v.target.value === "." && number != ""){
            setCommaIn(1);
            if(commaIn === 0) {
                setNumber(number + v.target.value);
            }
        }
        else{
            if(number == 0 && commaIn === 0){
                setNumber(v.target.value);
            } 
            else {
                setNumber(number + v.target.value);
            }
        }

        // setNumberSize(numberSize+1);
        setClearName("C");
    }

    function clear() {
        setNumber("");
        setCommaIn(0);
        setClearName("AC");
        // setNumberSize(0);
    }

    function simpleOperation(t) {
        var type = t.target.value;
        if(number != ""){
            if(type === "+/-") {
                setNumber(-1*number);
            }
            else if (type === "%") {
                setNumber(number/100);
            }
            else if (type === ",") {
                if(commaIn == 0){
                    setNumber(number + ".");
                    setCommaIn(1);
                }
            }
        }
    } 

    function getOperator(op) {
        var oper = op.target.value;
        setTempNumber(number);
        setOperator(oper);
        setNumber("");
        setCommaIn(0);
        // setNumberSize(0);
    }

    function operation() {
        if(operator === "/") {
            setNumber(tempNumber/number);
        }
        else if(operator === "*") {
            setNumber(number*tempNumber);
        }
        else if(operator === "+") {
            setNumber(number-(-1*tempNumber));
        }
        else if(operator === "-") {
            setNumber(tempNumber-number);
        }

        setOperator("=")
    }

    return (

        <section className="calculator">
            <div className="display">
                <p>{number}</p>
            </div>
            <div className="buttons">
                <button id = "AC" className="grey-buttons" onClick={clear}>{clearName}</button>
                <button className="grey-buttons" onClick={simpleOperation} value={"+/-"}>+/-</button>
                <button className="grey-buttons" onClick={simpleOperation} value={"%"}>%</button>
                <button className="operations" onClick={getOperator} value={"/"}>/</button>
                <button className="number" onClick={getNumber} value={7}>7</button>
                <button className="number" onClick={getNumber} value={8}>8</button>
                <button className="number" onClick={getNumber} value={9}>9</button>
                <button className="operations" onClick={getOperator} value={"*"}>*</button>
                <button className="number" onClick={getNumber} value={4}>4</button>
                <button className="number" onClick={getNumber} value={5}>5</button>
                <button className="number" onClick={getNumber} value={6}>6</button>
                <button className="operations" onClick={getOperator} value={"-"}>-</button>
                <button className="number" onClick={getNumber} value={1}>1</button>
                <button className="number" onClick={getNumber} value={2}>2</button>
                <button className="number" onClick={getNumber} value={3}>3</button>
                <button className="operations" onClick={getOperator} value={"+"}>+</button>
                <button id="zero" className="number" onClick={getNumber} value={0}>0</button>
                <button className="comma" onClick={getNumber} value={"."}>,</button>
                <button className="operations" onClick={operation}>=</button>
            </div>
        </section>
    )
}