import React from "react";
import "../Calculator.css"
export default function Calculator() {
    return (
        <section className="calculator">
            <div className="display">
            </div>
            <div className="buttons">
                <button className="grey-buttons">AC</button>
                <button className="grey-buttons">+/-</button>
                <button className="grey-buttons">%</button>
                <button className="operations">/</button>
                <button className="number">7</button>
                <button className="number">8</button>
                <button className="number">9</button>
                <button className="operations">*</button>
                <button className="number">4</button>
                <button className="number">5</button>
                <button className="number">6</button>
                <button className="operations">-</button>
                <button className="number">1</button>
                <button className="number">2</button>
                <button className="number">3</button>
                <button className="operations">+</button>
                <button id="zero" className="number">0</button>
                <button className="comma">,</button>
                <button className="operations">=</button>
            </div>
        </section>
    )
}