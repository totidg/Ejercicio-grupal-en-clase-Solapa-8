function copiarNumeros() {
  let numero1 = document.getElementById('numero1').value;
  let numero2 = document.getElementById('numero2').value;

  const CONTENEDOR = document.getElementById('container');

  // let crearParrafo = document.createElement('p');
  // crearParrafo.innerHTML = 'Número 1: ' + numero1;
  // CONTENEDOR.appendChild(crearParrafo);

  // let crearParrafo2 = document.createElement('p');
  // crearParrafo2.innerHTML = 'Número 2: ' + numero2;
  // CONTENEDOR.appendChild(crearParrafo2);

  CONTENEDOR.innerHTML =
    'Número 1: ' + numero1 + '<br>' + 'Número 2: ' + numero2;
}
