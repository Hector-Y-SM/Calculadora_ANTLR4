'use client';
import React, { useState } from 'react'
import { analizarLexico } from '../module/generador.js';
import { comentarios } from '../helper/comentarios.js';
import UI from '../components/UI.jsx';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const click = () => {
    const letras = /[a-zA-Z]+$/g //? expresion regular para evitar letras
    //const validaciones = /^(\d+|\([^()]+\))(?:[\+\-\*/]?(\d+|\([^()]+\)))*$/g

    //console.log(input); 
      if (letras.test(input) || input.trim() === ''){
         setInput('');
         setError('Ingresa una operacion');
      } else {
        setError('');
        const limpiar = comentarios(input).trim(); //borrar los espacios en blanco para evitar errores
  
        // Modifica la expresión regular para reconocer divisiones
        const expresiones = limpiar.split('\n');
        const aux = expresiones.map(expresion => analizarLexico(expresion));
  
        // Construye la cadena con el resultado para cada expresión
        const resultadoCadena = aux.map((valor, indice) => {
          return `${expresiones[indice]} = ${valor}`;
        });
  
        setInput(resultadoCadena.join('\n'));
    }
  }
  
  const limpiarTodo = () => { 
    setInput('')
    setError('') 
  }
  const numBtn = (txt) => { setInput((prevInput) => prevInput + txt); }
  const limpiarDigito = () => { setInput((prevInput) => prevInput.slice(0, -1)); }
  
  return (
    <main>
       <UI input={input}
           limpiarCaracter={limpiarDigito}
           ext={(e) => setInput(e.target.value)}
           numBtn={numBtn}
           limpiarTodo={limpiarTodo}
           click={click} 
           error={error}/>
    </main>
  );
}

export default HomePage