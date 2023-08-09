const valorEmMetros = parseFloat(prompt("Digite quantos metros"));
const medidaDaConversao = prompt(`\nDigite para qual medida deseja fazer a conversão:\n
- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)
`);

let conversaoDaMedida = "";

switch (medidaDaConversao) {
	case "mm":
		conversaoDaMedida = parseFloat(valorEmMetros / 0.001);
		alert(`${valorEmMetros} metros é equivalente a ${conversaoDaMedida}mm'`);
		break;
	case "cm":
		conversaoDaMedida = parseFloat(valorEmMetros / 0.01);
		alert(`${valorEmMetros} metros é equivalente a ${conversaoDaMedida}cm'`);
		break;
	case "dm":
		conversaoDaMedida = parseFloat(valorEmMetros / 0.1);
		alert(`${valorEmMetros} metros é equivalente a ${conversaoDaMedida}dm`);
		break;
	case "dam":
		conversaoDaMedida = parseFloat(valorEmMetros / 10);
		alert(`${valorEmMetros} metros é equivalente a ${conversaoDaMedida}dam`);
		break;
	case "hm":
		conversaoDaMedida = parseFloat(valorEmMetros / 100);
		alert(`${valorEmMetros} metros é equivalente a ${conversaoDaMedida}hm`);
		break;
	case "km":
		conversaoDaMedida = parseFloat(valorEmMetros / 1000);
		alert(`${valorEmMetros} metros é equivalente a ${conversaoDaMedida}km`);
		break;
	default:
		alert("Opção Inválida...");
}
