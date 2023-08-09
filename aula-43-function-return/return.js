function criarProduto(nome, preco) {
	const produto = {
		nome,
		preco,
		estoque: 1,
	}
	return produto;
}

const notebook = criarProduto("Notebook Ryzen", "R$ 2500,00");

alert(notebook);