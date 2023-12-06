/**
 * !Esta funcion lee el contenido de un archivo, muestra cualquier cosa menos los comentarios
 * 
 * @param {*} text 
 * @returns 
 */

export function comentarios(text) {
    //? comentarios de línea
    let sinComentarios = text.replace(/\/\/.*/g, '');
  
    //? comentarios de bloque
    sinComentarios = sinComentarios.replace(/\/\*[\s\S]*?\*\//g, '');
  
    return sinComentarios;
  }