matriz1=[3, 2, 1, 1, 2, 3, 2, 3, 1];
matriz2=[1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log("Arreglo 1: ["+matriz1+"]");
console.log("Arreglo 2: ["+matriz2+"]");

//console.log(matriz1.length);

for(let x=0; x<matriz1.length;x++ ){
   console.log(matriz1[x]+" + "+matriz2[x]+" = "+ (matriz1[x]+matriz2[0])+ "\n");
   console.log(matriz1[x]+" * "+matriz2[x]+" = "+ (matriz1[x]*matriz2[0])+ "\n");
}
