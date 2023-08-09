function dividir(num) {
	console.log(num);

	if (num % 2 == 0) {
		dividir(num / 2);
		return;
	} else {
		return num;
	}
}

console.log(dividir(24));

// função recursiva nada mais é que uma função que chama a si mesma criando uma espécie de loop
// no ex acima a função dividirá o parâmetro até q ele n seja mais divisível por 0

// no ex abaixo a função resolve um problema da matemática chamado fatorial
// a função recursiva multiplica o parâmetro pelo próprio parâmetro até q ele se torne 1

function fatorial(num) {
	console.log(num);
	if (num === 0) {
		return 1;
	} else if (num === 1) {
		return 1;
	} else {
		console.log(num + " * ! " + (num - 1));
		return num * fatorial(num - 1);
	}
}

console.log(fatorial(5));
