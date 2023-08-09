let pessoa = {
	name: "Weverson",
	idade: 30,
	saudacao() {
		console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.idade} anos de idade.`);
	},
};

pessoa.saudacao();

// method nada mais é que utilizarmos uma função como propriedade de um objeto
// dentro do meto podemos chamar o proprio objeto utilizando o método "this" como no exemplo acima
