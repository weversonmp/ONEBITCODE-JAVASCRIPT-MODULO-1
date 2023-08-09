//high order function = uma função q recebe outra função como parâmetro
//e.g:

function calcular(a, b, operacao) {
	console.log("Calculando alguma coisa");
	const resultado = operacao(a, b);
	return resultado;
}

function soma(a, b) {
	console.log("Realizando uma soma");
	return a + b;
}

console.log(calcular(3, 5, soma));

// no exemplo abaixo uma arrow function está sendo usada como parâmetro
// para a função calcular

console.log(
	calcular(8, 4, (a, b) => {
		console.log("Realizando a subtração");
		return a - b;
	})
);

//No exemplo a baixo vamos usar uma função que substitui o algoritimo abaixo

function exibirElemento(elemento, indice, array) {
	console.log({
		elemento,
		indice,
		array,
	});
}

const lista = ["Maçã", "Pera", "Uva", "Melão",]

// for (let i = 0; i < lista.length; i++) {
//   exibirElemento(lista[i], i, lista)
// }

// Agora como ficaria com forEach
// a funcao forEach fará o callback de 3 atributos patrões
// 1 - elemento do array = string
// 2 - index do elemento = number
// 3 - printa o array completo = array

lista.forEach(exibirElemento);

// A função forEach é um exemplo de HOF
// No exemplo acima, o forEach fez o callback da função exibirElemento
// para cada item do array

// Abaixo um exemplo com função anônima como parâmetro do forEach

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})