const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + '. ';
    textoFinal += vaga.nome;
    textoFinal += ' (' + vaga.candidatos.length + ' candidatos)';
    return textoFinal;
  }, '');

  alert(vagasEmTexto);
}

console.log(listarVagas(vagas));
