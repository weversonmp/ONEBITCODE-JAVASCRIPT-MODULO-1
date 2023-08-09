const personagens = [
    { nivel: 42, nome: 'Thrall', raca: 'Orc', classe: 'Xamã' },
    { nivel: 28, nome: 'Garrosh', raca: 'Orc', classe: 'Guerreiro' },
    { nivel: 35, nome: 'Varok', raca: 'Orc', classe: 'Guerreiro' },
    { nivel: 35, nome: 'Uther', raca: 'Humano', classe: 'Paladino' },
    { nivel: 26, nome: 'Jaina', raca: 'Humano', classe: 'Maga' },
    { nivel: 39, nome: 'Tyrande', raca: 'Elfo Noturno', classe: 'Sacerdotisa' },
    { nivel: 29, nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro' },
];

// Map => Utilizado para fazer transformações em arrays a partir de um array inicial
// No exemplo abaixo será utilizado um algorítimo que terá a função similar do Map

const nomes = [];

for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome);
}

console.log('sem utilizar o map', nomes);

// No exemplo abaixo a função Map tem a mesma utilidade do algorítimo acima
// a função Map utiliza um callback assim como o forEach

const nomes2 = personagens.map(function (personagem) {
    return personagem.nome;
});

console.log('utilizando map', nomes2);

// Filter => Utilizado para criar um array novo utilizando o valor filtrado na função
// Abaxio um exemplo de um algorítimo que teria a mesma usabilidade

const orcs = [];

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === 'Orc') {
        orcs.push(personagens[i]);
    }
}

console.log('sem utilizar o Filter', orcs);

// Abaixo utilizando o Filter

const orcs2 = personagens.filter(function (personagem) {
    return personagem.raca === 'Orc';
});

console.log('utilizando o Filter', orcs2);

// Reduce => tbm utiliza callback, transforma o array em outro valor(obj, outro array,
// somar valores e etc)
// no exemplo abaixo o reduce será usado para somar todos os níveis dos personagens

const niveltOtal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel;
}, 0);

console.log('Nivel total dos personagens', niveltOtal);

// No exemplo abaixo o reduce está sendo usado para transformar o array
// O resultado desse algoritimo será um array onde cada indice será uma raça

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem);
    } else {
        valorAcumulado[personagem.raca] = [personagem];
    }
    return valorAcumulado;
}, {});

// Sort = Organiza um array seguindo um critério
// no exemplo abaixo o sort foi utilizado para organizar o array de acordo com o nível do personagem
// Cuidado ao utilizar o sort pois o mesmo muda a array original.

personagens.sort(function (a, b) {
    return a.nivel - b.nivel;
})

console.log("Sort no array", personagens); // Array organizado pelo tamanho do nivel


// Abaixo, um xemplo de como não modificar o array principal com o sort
// O slice criará um novo array e preservará o array principal

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return a.nivel - b.nivel;
})

console.log("Sort no array", personagensOrdenados); // Array organizado pelo tamanho do nivel