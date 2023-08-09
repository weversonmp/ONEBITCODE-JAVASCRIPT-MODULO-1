let receitaAtual = parseFloat(prompt("Qual a receita atual?"));
let infoPrincipal = 0;
do {
	infoPrincipal = parseFloat(
		prompt(`Receita atual: ${receitaAtual}
	1 - Adicionar
	2 - Sacar
	3 - Encerrar
	`)
	);

	switch (infoPrincipal) {
		case 1:
			receitaAtual += parseFloat(prompt("Quanto quer adicionar a receita?"));
			break;
		case 2:
			receitaAtual -= parseFloat(prompt("Quanto quer retirar da receita?"));
			break;
		case 3:
			alert("Encerrando...");
			break;
		default:
			alert("Digite um valor valido");
	}
} while (infoPrincipal !== 3);
