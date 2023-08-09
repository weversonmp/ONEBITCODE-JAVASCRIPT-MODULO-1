const nomeDoTurista = prompt("Qual seu nome?");
let cidadeVisistadaPergunta = prompt("Você ja visitou outra cidade?");
let cidadesVisitadas = [""];

while (cidadeVisistadaPergunta === "sim") {
	cidadesVisitadas += `${prompt("Qual cidade vc visitou?")}, `;
	cidadeVisistadaPergunta = prompt("Você visitou alguma outra cidade?");
}

alert(cidadesVisitadas);
console.log(cidadesVisitadas)
