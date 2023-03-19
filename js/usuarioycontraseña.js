// if (contraseña===contra && usuario===user && intentos!=3  ){
//     document.write("Su saldo es " + saldo );
// }else {
//         document.write('su cuenta esta bloqueada')
//     }

var intentos = 0;
var usuario = "jhonatan";
var contraseña = "123456";
var saldo = 1000;

var user = prompt("Ingrese su usuario");
var contra = prompt("Ingrese su contraseña");

if (user === usuario && contra === contraseña) {
  document.write("Su saldo es " + saldo);
} else {
  intentos += 1;
  if (intentos < 3) {
    alert("Error en usuario o contraseña");
    user = prompt("Ingrese su usuario");
    contra = prompt("Ingrese su contraseña");
    if (user === usuario && contra === contraseña) {
      document.write("Su saldo es " + saldo);
    } else {
      intentos += 1;
      if (intentos < 3) {
        alert("Error en usuario o contraseña");
        user = prompt("Ingrese su usuario");
        contra = prompt("Ingrese su contraseña");
        if (user === usuario && contra === contraseña) {
          document.write("Su saldo es " + saldo);
        } else {
          intentos += 1;
          if (intentos < 3) {
            alert("Error en usuario o contraseña");
            user = prompt("Ingrese su usuario");
            contra = prompt("Ingrese su contraseña");
            if (user === usuario && contra === contraseña)
              document.write("Su saldo es " + saldo);
          } else {
            document.write("Su cuenta está bloqueada por exceder el maximo de intentos");
          }
        }
      }
    }
  }
}

//Intento el ejercicio con while
// while (intentos != 3) {
//   var user = prompt("Ingrese su usuario");
//   var contra = prompt("Ingrese su contraseña");

//   if (user === usuario && contra === contraseña) {
//     document.write("Su saldo es " + saldo);
//     break;
//   } else {
//     alert("Eror en usuario o contraseñass");
//     intentos += 1;
//   }
//   if (intentos === 3) {
//     document.write("su cuenta esta bloqueada");
//   }
// }
