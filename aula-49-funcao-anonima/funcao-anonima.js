function somar(a, b) {
	return a + b;
}

// Podemos salvar funções em variáveis
//e.g:

const operacao = somar;

console.log(operacao);

// a função acima n pode ter parentese, pois vc n está chamando ela
// vc está associando a uma variável, por isso n tem parêntese.

// abaixo um exemplo de função anônima

const subtrair = function (a, b) {
	return a - b;
};

console.log(subtrair(36 - 13));

// a função acima n tem nome e foi adicionada diretamente a variável "subtrair"

olaMundo() // vai funcionar
oiMundo()  // n vai funcionar


function olaMundo() {
	console.log("ola mundo")

}

const oiMundo = function () {
	console.log("Oi Mundo")
}

// no exemplo acima precisamos ficar atentos a essa situação
// funcoes anonimas n pode ser chamada antes de ser declarada
// um erro será gerado, diferente da função criada normalmente.