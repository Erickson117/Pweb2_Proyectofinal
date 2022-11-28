//Tienda

const frutas = []; //en este arreglo se guardaran los valores del carrito
let lista = "Su lista de frutas es: \n";// Esta String se usara para poder mostrarle al usuario sus productos
frutas.push(prompt("Agregue su primera fruta"));// Aqui se va agregar el primer producto

while (confirm("Desea agregar otro producto al carrito")) { //Aqui se hace el bucle para agregar frutas en caso de que se quiere agregar más
  frutas.push(prompt("Agregue otra fruta"));// con el push se meten valores al arreglo
}

for (var fruta of frutas) { // este for lo use para recorrer el arreglo
  console.log(fruta); // aqui imprimo los valores en consola del arreglo
  lista = lista+"*"+fruta+"\n";// aqui agrego los datos al String lista
}

alert(lista);//Imprimo la lista en un alert para que el usuario pueda verlas
