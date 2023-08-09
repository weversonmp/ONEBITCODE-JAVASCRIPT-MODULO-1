let num1 = parseFloat(prompt("Digite um número"));
let listaTabuada = "";

for (let contador = 1; contador < 21; contador++) {
	listaTabuada += num1 * contador + ", ";
}

listaTabuada = listaTabuada.slice(0, -2);
console.log(`${listaTabuada}.`);
