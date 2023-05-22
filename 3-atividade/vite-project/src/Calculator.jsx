import React, { useState } from "react";
import "./Calculator.css"
export default function Calculator() {

    // Número que aparece no display
    const [number, setNumber] = useState("");
    // Número temporário que serve como memória
    const [tempNumber, setTempNumber] = useState("");
    // Status do botão de Clear
    const [clearName, setClearName] = useState("AC");
    // Qual operador está sendo usado
    const [operator, setOperator] = useState("=");
    // Para monitorar quantas vírgulas já foram usadas (0 ou 1)
    const [commaIn, setCommaIn] = useState(0);
    

    // Função para escrever um número na tela com o press de botão
    function getNumber(v) {
        if(v.target.value === "."){
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
        setClearName("C");
    }

    // Função para limpar a display
    function clear() {
        setNumber("");
        setCommaIn(0);
        setClearName("AC");
    }

    //  Função de operações simples, que não precisam de memória (+/- e %)
    function simpleOperation(t) {
        var type = t.target.value;
        if(number != ""){
            if(type === "+/-") {
                setNumber(-1*number);
            }
            else if (type === "%") {
                setNumber(number/100);
            }
        }
    } 

    // Função de definir o operador que vai ser usado (/, +, -, *) com o botão
    function getOperator(op) {
        var oper = op.target.value;
        setTempNumber(number);
        setOperator(oper);
        setNumber("");
        setCommaIn(0);
    }

    // Função de operação, acionada quando se pressiona o "="
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
        // Calculadora completa
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