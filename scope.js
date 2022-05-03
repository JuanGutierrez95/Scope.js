//El Scope es el alcance que tienen las variables.
//Depende donde declaremos e inicializemos una variable de si vas a tener acceso a ella o no.
//Hay dos tipos de Scope. El scope Global que es como el todo y el Scope local, que es como un pequeño universo que existe adentro de este scope global. 
//En este Scope Global van a existir todas las variables, todas las validcaciones, todas las funciones que nosotros tengamos, ahi van a existir. 
//Y una vez que nosotros inicializemos una funcion en ese momento adentro de esta funcion se va a generar lo que se llama scope local.
 //Quiere decir que solo lo que esta dentro de la funcion va a tener acceso a eso mismo.

 var miNombre = "Juan";

 function nombre(){
   var miApellido = "Gutiérrez";
   console.log(miNombre + " " + miApellido);
 }
 nombre();
 