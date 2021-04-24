/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  // Definimos el contexto del canvas en '2d'
  var ctx = document.getElementById("lienzo").getContext("2d");
  // Aumentamos la distancia velocidad de movimiento
  var distancia = 10;
  // Definimos el objeto
  var obj = { height: 37, width: 37, x: 10, y: 10, color: "#000" };
  // Mostramos el objeto
  render();

  document.body.onkeydown = function(event) {
    // Renderizamos antes de teclear,para mejorar el movimiento
    render();

    switch (event.keyCode) {
      case 37: // Izquierda
        obj.x -= distancia;
        obj.y += 0;
        break;
      case 38: // Arriba
        obj.x += 0;
        obj.y -= distancia;
        break;
      case 39: // Derecha
        obj.x += distancia;
        obj.y += 0;
        break;
      case 40: // Bajar
        obj.x += 0;
        obj.y += distancia;
        break;
    }
  };

  function render() {
    // Limpiar pantalla
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    // Dibujamos el objeto
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    ctx.fillStyle = obj.color;
  }

  /*
Renderizar:
    Es una jerga informática para referirse al proceso de generar imagen fotorrealista 
    o no fotorrealista a partir de un modelo 2D o 3D por medio de programas informáticos.

*/

  /*
Nota:
    Para que funcione correctamente,se recomienda hacerle un
    click con el mause sobre cualquier parte de la pantalla o 
    véanlo en otra PESTAÑA.
*/
};
