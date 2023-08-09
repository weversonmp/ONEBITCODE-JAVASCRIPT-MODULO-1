let fila = [];
let opcao = "";
let pacientes = "";

do {
	for (let i = 0; i < fila.length; i++) {
		pacientes += i + 1 + "* - " + fila[i] + "\n";
	}

	opcao = prompt(
		"Pacientes:\n" + pacientes + "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar\n3. Sair"
	);

	switch (opcao) {
		case "1":
			const novoPaciente = prompt("Qual o nome do paciente?");
			fila.push(novoPaciente);
			break;
		case "2":
			if (!pacientes) {
				alert("Não existe paciente na fila");
				break;
			}
			const pacienteConsultado = fila.shift();
			alert(pacienteConsultado + " foi removido da fila.");
			break;
		case "3":
			alert("Encerrando...");
			break;
		default:
			alert("Opção inválida");
	}
} while (opcao !== "3");
