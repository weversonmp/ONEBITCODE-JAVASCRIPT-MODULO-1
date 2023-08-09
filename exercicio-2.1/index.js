const nomeDoVeiculo1 = prompt('Qual o nome do veículo 1?');
const nomeDoVeiculo2 = prompt('Qual o nome do veículo 2?');
const velocidadeVeiculo1 = prompt('Qual a velocidade do veículo 1?');
const velocidadeVeiculo2 = prompt('Qual a velocidade do veículo 2?');

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
	alert(`O ${nomeDoVeiculo1} é mais rápido que o ${nomeDoVeiculo2}`);
} else if (velocidadeVeiculo1 < velocidadeVeiculo2) {
	alert(`O ${nomeDoVeiculo2} é mais rápido que o ${nomeDoVeiculo1}`);
} else {
	alert(`O ${nomeDoVeiculo1} e o ${nomeDoVeiculo2} tem a mesma velocidade.`);
}
