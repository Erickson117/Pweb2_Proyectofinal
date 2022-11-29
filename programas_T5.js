
//Primer programa not
//alert("cuack");
function not(){
   let boleano = true;
   let num;
   num = parseInt(prompt("¿Cero es mator a uno? \n 1 --> si \n 0 --> no"));
   if (num == 1) {
     boleano = !boleano;
   }else if (num == 0) {

   }else if ((num != 0) && (num != 1)) {
     alert("Solo se puede elegir 1 o 0");
     boleano = !boleano;
   }

   if (boleano == true) {
     alert("Tu respuesta es correcta");
   }else {
     alert("tu respuesta es incorrecta");
   }
}

//Programa 2
function numeroDelUnoAlDiez(){
    let num;
    num = parseInt(prompt("Digite un numero del uno al diez"));
    if ((num >= 1) && (num <= 10)) {
      alert("El numero "+num+" es un numero del 1 al 10");
    }else {
      alert("El numero "+num+" no es un numero del 1 al 10");
    }
}
//Programa 3

function or(){
    let num;
    num = parseInt(prompt("Digite un numero"));
    if ((num == 0) || (num == 9)) {
      alert("El numero "+num+" es 0 o 9");
    }else {
      alert("El numero "+num+" no es ni 0 ni 9");
    }
}

function Suma(){
    let num1;
    let num2;
    let suma;
    alert("Suma de numeros");
    num1 = parseInt(prompt("Digite su primer numero"));
    num2 = parseInt(prompt("Digite su segundo numero"));
    suma = num1 + num2;
    alert("El resultado es: "+suma);
}

function adivinaNumero(){
    let num;
    let num_intentos = 0;
    let aleatorio = parseInt(Math.random()*100);
    alert("Adivine el numero");
    do {
       num = parseInt(prompt("Digite un numero: "));
       if (aleatorio > num) {
          alert("Digite un numero mayor");
       }else {
          alert("Digite un numero menor");
       }
       num_intentos++;
    }while (num != aleatorio);
    alert("felicidades !!! \n adivinaste el numero "+num+" en "+num_intentos+" intentos");

}

function and(){
    let num = parseInt(prompt("Digite un numero"));
    if ((num >= 0) && (num <= 9)) {
        alert("El numero "+num+" es mayor o igual a 0 y menor o igual a 9")
    }else {
      alert("El numero "+num+" es menor a 0 o mayor a 9");
    }

}

function dameNombre(){
    nombre = prompt("¿Cual es tu nombre?");
    alert("Tu nombre es "+ nombre);
}
//not();
//numeroDelUnoAlDiez();
//or();
//Suma();
//adivinaNumero();
//and();
//dameNombre();
