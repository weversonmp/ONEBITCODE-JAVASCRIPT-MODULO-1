const imoveis = [];
let option = "";
let imovel = "";

do {
	for (let i = 0; i < imoveis.length; i++) {}

	option = prompt(
		"Quantidade de imóveis cadastrados: " +
			imoveis.length +
			"\n" +
			"\n1 - Adicionar Imóvel" +
			"\n2 - Consultar Imóveis" +
			"\n3 - Sair"
	);

	switch (option) {
		case "1":
			const imovel = {}
			imovel.nome = prompt("Qual o nome do proprietário?");
			imovel.quartos = prompt("Quantos quartos?");
			imovel.banheiro = prompt("Quantos banheiros");
			imovel.garagem = prompt("Possui garagem?");

			let confirmacao = confirm("Gostaria de adicionar as informações?\n"+
				"\nProprietário: " + imovel.nome+
				"\nQuartos: " + imovel.quartos+
				"\nBanheiros: " + imovel.banheiro+
				"\nGaragem: " + imovel.garagem
			);

			if (confirmacao) {
				imoveis.push(imovel);
			}

			break;

		case "2":
			for (let i = 0; i < imoveis.length; i++) {
				alert(
					"Cadastro Nº: " +
						(i + 1) +
						"\n\nProprietário: " +
						imoveis[i].nome +
						"\nQuartos: " +
						imoveis[i].quartos +
						"\nBanheiros: " +
						imoveis[i].banheiro +
						"\nGaragem: " +
						imoveis[i].garagem
				);
			}
			break;

		case "3":
			alert("Encerrando...");
			break;

		default:
			alert("Digite uma opção correta!!!");
			break;
	}
} while (option != "3");
