// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newArray =[];
  var elArr =[];
  for(let i in objeto){
    elArr.push(i);
    elArr.push(objeto[i]);
    newArray.push(elArr);
    elArr=[];
  }
  return newArray;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var number={}
  for(var i =0;i<string.length;i++){
    number[string.charAt(i)] = number[string.charAt(i)]+1 || 1;
  }
  return number;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = "";
  var min = "";
  var str= "";
  for(var i =0;i<s.length;i++){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      may+=s.charAt(i);
    }
    else{
      min+=s.charAt(i);
    }
  }

  return may + min;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  /*var newStr = "";
  var temp = "";
  for(var i = 0; i < s.length();i++){
      if(str[i]===' '){
        for(var j = temp.length-1; j>=0;j--){
          newStr+=str[j];
        }
        newStr+=" ";
        temp="";
        continue;
      }
      temp+=str[i];
  }*/
  var strArr = str.split(" ");
  var newStr = "";
    strArr.forEach(function(elemento){
      for(var i =elemento.length-1;i>=0;i--){
        newStr+=elemento[i];
      }
      if(elemento != strArr[strArr.length-1]) newStr+=" ";
    });

  return newStr;
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var a = Number(numero.toString().split('').reverse().join('')) ;
  if(a === numero){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var arr = "";
  for(var i =0;i<cadena.length;i++){
    if(cadena[i]!= 'a' && cadena[i]!='b' && cadena[i]!='c') arr+=cadena[i];
  }
  return arr;




}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var i = 0;i<arr.length;i++){
    
    var j = i-1; //2
    var temp = arr[i];//looking
    while(j>=0 && temp.length<arr[j].length){ //looking < beatufil
      arr[j+1] = arr[j]; //arr[i] = 
      arr[j] = temp;
      j--;
    }
  }
  return arr;



}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arr = [];
  for(var i =0; i< arreglo1.length;i++){
    var j = 0;
    do{
      if(arreglo1[i]===arreglo2[j]) {
        arr.push(arreglo1[i]);
      }
      j++;
    }while(arreglo2[j-1]!=arreglo1[i] && j<arreglo2.length);
  }

  return arr;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

