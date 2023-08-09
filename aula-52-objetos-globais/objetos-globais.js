// Objetos de escopo global começam com letra maiúscula
//e.g. Object, Array, String
// Abaixo exemplos criando variaveis com Objetos globais

let pessoa = Object() // Cria um objeto vazio
let lista = Array() // Cria um array vazio
lista = Array('A', "B", "C", "D",) // Adicionando valores ao array...
let texto = String(42) // Converte o 42 para string
let numero = Number("42") // Converte o 42 para numero

// Abaixo métodos dentro dos Objetos Globais

Number.isInteger(4.5) // Retornará falso. o .isInteger retorna um boolean value.