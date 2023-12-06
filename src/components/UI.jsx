import React from "react";
import '../css/UI.css'

const UI = ({input, ext, limpiarCaracter, numBtn, limpiarTodo, click, error, historial}) =>{
  return (
    <div className="div_main">
      <section className="section_calculadora">
        <div className="input_">
          <textarea
            className="txtArea_"
            value={input}
            onChange={ext}
            placeholder="ej. ((5+5)*8)/2"
          />
          <button
            className="btn_digito"
            onClick={limpiarCaracter}
          >
            X
          </button>
        </div>
        <div className="div_btn">
          <button onClick={limpiarTodo}>C</button>

          <button onClick={() => numBtn('(')}>(</button>
          <button onClick={() => numBtn(')')}>)</button>
          <button onClick={() => numBtn('/')}>/</button>
          <button onClick={() => numBtn('1')}>1</button>
          <button onClick={() => numBtn('2')}>2</button>
          <button onClick={() => numBtn('3')}>3</button>
          <button onClick={() => numBtn('+')}>+</button>
          <button onClick={() => numBtn('4')}>4</button>
          <button onClick={() => numBtn('5')}>5</button>
          <button onClick={() => numBtn('6')}>6</button>
          <button onClick={() => numBtn('-')}>-</button>
          <button onClick={() => numBtn('7')}>7</button>
          <button onClick={() => numBtn('8')}>8</button>
          <button onClick={() => numBtn('9')}>9</button>
          <button onClick={() => numBtn('*')}>*</button>
          <button onClick={historial}>H</button>
          <button onClick={() => numBtn('0')}>0</button>
          <button onClick={() => numBtn('.')}>.</button>
          <button onClick={click}>=</button>
        </div>
        <h1 className="h1_error">{error}</h1>
      </section>
    </div>
  );
}


export default UI;