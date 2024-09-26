const response = await fetch('https://nutritious-sallyanne-yitzhakp-2ef75de7.koyeb.app/')
  .then(respuesta => respuesta.json())
  .then(datos => datos)
  .catch(error => error)

console.log(response);
