const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);

// Adicionar Elementos

//push - Adiciona ao final do array

arr.push("Boromir");

//unshift - Adicionar no inicio do array

arr.unshift("Boromir");
console.log(arr);

// Remover elementos

//pop - Remove o ultimo elemento do array
arr.pop();
console.log(arr);

//shift - Remove elementos no começo do array

let ultimoElemento = arr.shift();
console.log(ultimoElemento);

//Pesquisar Elementos
// Includes - Pesquisa Elementos e devolve true ou false

const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexOf - Pesquisa elementos e mostra o índice no array

const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e concatenar
// Slice - Cria uma cópia dos elementos do array para criar um novo array

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(hobbits);
console.log(outros);

//concat

const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos Elementos

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos

for (let indice = 0; indice < sociedade.length; indice++) {
	const elemento = sociedade[indice];
	console.log(elemento + " se encontra na posição" + indice);
}