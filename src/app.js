/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // Definimos el contexto del canvas en '2d'
  var ctx = document.getElementById("lienzo").getContext("2d");
  // Aumentamos la distancia velocidad de movimiento
  var distancia = 10;
  // Definimos el objeto
  var obj = { height: 10, width: 10, x: 10, y: 10, color: "#00FF00" };
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
};
