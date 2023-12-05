/**
 * !Esta funcion lee el contenido de un archivo, muestra cualquier cosa menos los comentarios
 * 
 * @param {*} text 
 * @returns 
 */

export function comentarios(text) {
  const lineas = text.split('\n');
  let dentroBloqueComentario = false;

  const lineasSinComentarios = lineas.filter(linea => {
      if (linea.includes('/*')) {
          dentroBloqueComentario = true;
          return false;
      }

      if (linea.includes('*/')) {
          dentroBloqueComentario = false;
          return false;
      }

      if (dentroBloqueComentario) {
          return false;
      }

      return !linea.trim().startsWith('//');
  });

  return lineasSinComentarios.join('\n');
}
