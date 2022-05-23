//Crear una funcion que devuelva dos parametros
//num1 y num2

function esMultiplo(num1, num2) {
  if (num1 % num2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esMultiplo(8, 2));
