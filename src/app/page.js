'use client';
import React, { useState } from 'react'
import { analizarLexico } from '../module/generador.js';
import UI from './components/UI.jsx';

const HomePage = () => {
  const [input, setInput] = useState('');


  const click = () => {
    const letras = /[a-zA-Z(+\-/*){9}?,:;_]+$/g //? expresion regular para evitar letras
    //console.log(input); 
      if (letras.test(input)){
        setInput('');
        alert('Solo se pueden ingresar numeros');
      } else {
          const aux = analizarLexico(input);
          //console.log(aux);
          setInput(aux.join('\n')); 
    }
  }
  
  const limpiarTodo = () => { setInput(''); }
  const numBtn = (txt) => { setInput((prevInput) => prevInput + txt); }
  const limpiarDigito = () => { setInput((prevInput) => prevInput.slice(0, -1)); }
  
  return (
    <main>
       <UI input={input}
           limpiarCaracter={limpiarDigito}
           ext={(e) => setInput(e.target.value)}
           numBtn={numBtn}
           limpiarTodo={limpiarTodo}
           click={click} />
    </main>
  );
}

export default HomePage