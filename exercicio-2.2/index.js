const nomeDoPersonagem1 = prompt('Qual o nome do personagem 1?');
const poderDeAtaquePersonagem1 = parseFloat(prompt('Qual o poder de ataque do personagem 1?'));
const nomeDoPersonagem2 = prompt('Qual o nome do personagem 2?');
const pontosDeVidaPersonagem2 = parseFloat(prompt('Quantos pontos de vida o personagem 2 possui?'));
const pontosDeDefesaPersonagem2 = parseFloat(prompt('Quantos pontos de defesa o personagem 2 possui?'));
const escudoBolean = confirm('Ele tem escudo?');

if (poderDeAtaquePersonagem1 <= pontosDeDefesaPersonagem2) {
	alert('Poder de ataque muito fraco, o dano causado foi "ZERO!"');
} else if (poderDeAtaquePersonagem1 > pontosDeDefesaPersonagem2 && escudoBolean == false) {
	let danoCausado = poderDeAtaquePersonagem1 - pontosDeDefesaPersonagem2;
	alert(`O dano causado por ${nomeDoPersonagem1} foi de: ${danoCausado}`);
	alert(`${nomeDoPersonagem2}
	Dano Sofrido: ${danoCausado}
	Vida Atual: ${pontosDeVidaPersonagem2 - danoCausado}

	`);
} else if (poderDeAtaquePersonagem1 > pontosDeDefesaPersonagem2 && escudoBolean == true) {
	danoCausado = (poderDeAtaquePersonagem1 - pontosDeDefesaPersonagem2) / 2;
	alert(`O dano causado por ${nomeDoPersonagem1} foi de: ${danoCausado}`);
	alert(`${nomeDoPersonagem2}
	Dano Sofrido: ${danoCausado}
	Vida Atual: ${pontosDeVidaPersonagem2 - danoCausado}`);
}
