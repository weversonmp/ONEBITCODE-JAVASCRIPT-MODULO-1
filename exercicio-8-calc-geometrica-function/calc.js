let opcao = ""
let base = 0
let altura = 0
let lado = 0
let baseMaior = 0
let baseMenor = 0

function areaTriangulo(base, altura) {
	return base * (altura / 2)
}

function areaRetangulo(base, altura) {
	return base * altura
}

function areaQuadrado(lado) {
	return lado * lado
}

function areaTrapezio(baseMaior, baseMenor, altura) {
	return (baseMaior + baseMenor) * (altura / 2)
}

function areaCirculo(raio) {
	return 3.14 * (raio * raio)
}

do {

	opcao = prompt("Qual cálculo quer fazer?\n" +
	
	"\n1 - Área do triangulo" +
	"\n2 - Área do retangulo" +
	"\n3 - Área do quadrado" +
	"\n4 - Área do trapezio" +
	"\n5 - Área do circulo" +
 	"\n6 - Sair\n"
	);

	switch (opcao) {
		case "1":
			base = Number(prompt("Digite a base"));
			altura = Number(prompt("Digite a altura"));
			alert("A área do triângulo é: " + areaTriangulo(base, altura))
			break;

		case "2":
			base = Number(prompt("Digite a base"));
			altura = Number(prompt("Digite a altura"));
			alert("A área do retângulo é: " + areaRetangulo(base, altura))
			break;

		case "3":
			lado = Number(prompt("Digite a lado"));
			alert("A área do quadrado é: " + areaQuadrado(lado))
			break;

		case "4":
			baseMaior = Number(prompt("Digite a base menor"));
			baseMenor = Number(prompt("Digite a base maior"));
			altura = Number(prompt("Digite a altura"));
			alert("A área do trapézio é: " + areaTrapezio(baseMaior, baseMenor, altura))
			break;

		case "5":
			raio = Number(prompt("Digite o raio"));
			alert("A área do círculo é: " + areaCirculo(raio))
			break;

		case "6":
			alert("Encerrando...");
			break;

		default:
			alert("Digite uma opção correta!!!")
			break;
	}

} while (opcao != "6")
