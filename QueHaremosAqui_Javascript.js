var i = 0;
var text = [
    'Hola amigos! Lo que aqui aprenderemos a hacer es un juegito de un gatito a manera de chatbot 🤖',
    'Tienes que hacer que al presionar un boton mande un mensaje que tu editaste. Y luego de eso mas divertido es colocar no solo mensajes si no imagenes que aparecen al dar click en un boton.',
    'Para esto tenemos que aprender el uso de los if condicionales. Usar metodos que nos dan y colocarlos para que funcione todo correctamente. No se preocupen si no entienden algo luego mas adelante podran salir de dudas entender todo.',
    'Se ven cosas como esta: Por ejemplo que es un metodo? Un metodo divide el codigo en una parte mas pequeña puede tener "parametros" y recibir valores. Y que son los parametros? Lo que veras entre parentesis y separados por comas    , Esos son los parametros',
    '----------- Chatbot con Java -----------<br> aqui mas codigo <br>metodo(parametros) {<br>&nbsp;&nbsp;&nbsp;&nbsp;codigo <br>}<br> aqui mas codigo'
];
document.getElementById("demo").innerHTML = text[0];

function next() {
  if(i < text.length - 1) {
    i++;
    document.getElementById("demo").innerHTML = text[i];
  }
}

function prev() {
  if(i > 0) {
    i--;
    document.getElementById("demo").innerHTML = text[i];
  }
}
