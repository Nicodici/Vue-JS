import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
//Creamos la directiva personalizada globalmente con .directive() - como primer parametro recibe el nombre de la directiva y como segundo parametro, un objeto
// Crearemos una directiva que cambie el tamaño de la fuente del elemento al que se la apliquemos
app.directive("fontSizeAndColor", {
  //El hook que utilizaremos sera el de mounted
  // la declaramos utilizando pares clave-valor

  //definimos una accion antes de que el componente que utilice la directiva sea montado en el DOM

  //  el: elemento(etiqueta) al que se le aplica la directiva.
  //binding: contiene informacion sobre la directiva, como el valor que le pasemos
  beforeMount: (el, binding) => {
    el.style.fontSize = "50px";
    el.style.color = "blue";
  },
});

app.directive("specific-size", {
  mounted: (el, binding) => {
    el.style.fontSize = binding.value + "px";
  },
});
app.directive("custom-size", {
  mounted: (el, binding) => {
    let size;
    switch (binding.arg) {
      case "sm":
        size = 10;
        break;
      case "md":
        size = 20;
        break;
      case "lg":
        size = 30;
        break;
      case "xl":
        size = 40;
        break;
      case "xxl":
        size = 50;
        break;
      default:
        size = 16;
    }
    el.style.fontSize = size + "px";
  },
});

// Modificadores
// a diferencia de los argumentos, los modificadores no reciben valores, sino que son booleanos (true/false).
// Se utilizan para aplicar ciertas condiciones a la directiva.
// Ejemplo: v-directiva.modificador
// Podemos crear una directiva que cambie el color del texto a rojo si se utiliza el modificador "red" y a verde si se utiliza el modificador "green".

app.directive("custom-color", {
  beforeMount: (el, binding) => {
    let color = "black"; //color por defecto
    if (binding.modifiers.red) {
      color = "red";
    } else if (binding.modifiers.green) {
      color = "green";
    } else if (binding.modifiers.blue) {
      color = "blue";
    }
    el.style.color = color;
  },
});

app.directive("custom-bgColor", {
  beforeMount: (el, binding) => {
    let bgColor = "white";
    if (binding.modifiers.black) {
      bgColor = "black";
    }
    if (binding.modifiers.grey) {
      bgColor = "grey";
    }
    if (binding.modifiers.blue) {
      bgColor = "blue";
    }
    if (binding.modifiers.orange) {
      bgColor = "orange";
    }
    el.style.backgroundColor = bgColor;
  },
});

app.directive("custom-fontSize-color", {
  beforeMount: (el, binding) => {
    let color = "black";
    let size = 18;

    if(binding.modifiers.xxl){
        size = 35;
    }
    if(binding.modifiers.xl){
        size = 28;
    }
    if(binding.modifiers.l){
        size = 21;
    }
    if(binding.modifiers.m){
        size = 14;
    }
    el.style.fontSize = size + "px";

    if (binding.modifiers.pink){
        color = 'pink';
    }
    if (binding.modifiers.red){
        color = 'red';
    }
    if (binding.modifiers.brown){
        color = 'brown';
    }
    el.style.color = color;

  },
});

app.mount("#app");
