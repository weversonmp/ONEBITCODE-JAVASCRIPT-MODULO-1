let baralho = [];
let opcao = "";

do {
	let cartas = "";
	for (let i = 0; i < baralho.length; i++) {
		cartas += `${i + 1}* ${baralho[i]}\n`;
	}

	opcao = prompt(
		"Baralho:\n" + cartas + "\nEscolha uma carta:\n1. Nova carta\n2. Remover do baralho\n3. Sair"
	);

	switch (opcao) {
		case "1":
			const nomeDaCarta = prompt("Qual a carta?");
			baralho.unshift(nomeDaCarta);
			break;

		case "2":
			alert(baralho.shift() + " Foi Removido");
			break;

		case "3":
			alert("Encerrando...");
			break;

		default:
			alert("Digite uma opção válida!!!");
			break;
	}
} while (opcao != "3");
