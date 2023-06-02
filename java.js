



const PASSWORD = "julian123"
const USER= "juliangentili"


let usuario
let contrasenia

function bienvenida(mensaje1,mensaje2,mensaje3) {
  alert(mensaje1 + mensaje2 + mensaje3)
  
}


do{
usuario = prompt("ingrese su usuario")
contrasenia = prompt("ingrese su clave")

}
while(usuario !== USER  && PASSWORD !== contrasenia)

bienvenida("hola" + " " + usuario + " " + "iniciaste secion correctamente!")


let menu = (prompt("ingrese 1 para ver el stock de nuestros productos\ningrese 2 para ver nuestros precios\ningrese 3 para salir"))

if (menu == 1) {
  alert("salamines\nquesos\njamon\nmuzarella\n")
  let decision = prompt("ingrese salir para cerrar la sesion")
  if (decision == "salir" )
  {alert("gracias por tu visita")

  }
    
  }


else if (menu == 2) { 
  alert("salame los calvos = 1200$\nqueso la paulina = 800$\njamon natural = 1500$\nmuzarella barraza = 1000$") 
}
else if (menu == 3) {
   alert("adios gracias por tu visita") 
  }

else if (menu <1 || menu >3) {
  alert("la opcion es invalida . fin del programa")
}


alert("adios" + " " + usuario + " " + "vuelvas pronto!")

 
