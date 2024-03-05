// cria array multidimensional - pag 144 
var table = new Array(10);    // linnhas da tabuad
for (var i=0; i < table.length; i++) {
 table[i] = new Array(10); }    // dada linha tem  colunas

// inicializa o array
for (var row=0; row < table.length; row++) {
    for (col=0; col < table[row].length; col++)  {
        table[row][col] = row*col;
    }
}
// usa o array multidimensional 
var product = table[5][7];   //  35
console.log(product)

console.log(table.join())  // coverte elementos da array em uma string
