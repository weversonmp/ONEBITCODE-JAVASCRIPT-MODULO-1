function criarUsuario(nome, email, senha, tipo = "admin") {
	const usuario = {
		nome, //quando o parametro e a propriedade tem o mesmo nome, podemos abreviar assim
		email, // ao invés de email: "email"... o javascript entende se for adicionado o nome apenas 1 vez
		senha,
		tipo,
	};

	console.log(usuario);
}

// parâmetros são os valores dados ao chamar uma função
// note que abaixo, ao chamar a função "criarUsuario" os atributos ("Weverson", "weverson@email.com", "12345")
// foram usados como parâmetros para a função acima

criarUsuario("Weverson", "weverson@email.com", "12345");
