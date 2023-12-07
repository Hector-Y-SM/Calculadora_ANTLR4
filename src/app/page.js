'use client';
import React, { useState } from 'react'
import { analizarLexico } from '../module/generador.js';
import { comentarios } from '../helper/comentarios.js';
import UI from '../components/UI.jsx';

const HomePage = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const click = () => {
    const letras = /[a-zA-Z]/g; // Expresión regular para evitar letras
    const numeros = /\d/g;
    const pass = comentarios(input);

    if (letras.test(pass)) {
      setError('No se pueden ingresar letras');
    } else if (comentarios(input.trim()) === '' || !numeros.test(input)) {
      setError('Ingresa una operación');
    } else if (!input.includes('=')) {
      setError('');

      const limpiar = comentarios(input).trim(); // Borrar los espacios en blanco
      const expresiones = limpiar.split('\n').filter(expresion => expresion.trim() !== ''); // Borrar líneas en blanco
      const aux = expresiones.map(expresion => analizarLexico(expresion));

      const resultadoCadena = aux.map((valor, indice) => {
        return `${expresiones[indice]} = ${valor}`;
      });

      setInput(resultadoCadena.join('\n'));
    } else {
      setError('Caracteres inválidos: "="');
    }
  }
  
  const limpiarTodo = () => { 
    setInput('');
    setError(''); 
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