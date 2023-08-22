import("colors");
import { pause, inquirerMenu, leerInput } from "./helpers/inquirer.js";
import { TareasList } from "./models/tareasList.js";

console.clear();

const main = async () => {
	let opt = "";

	const tareas = new TareasList();

	do {
		opt = await inquirerMenu();
		switch (opt) {
			case "1":
				const desc = await leerInput("Descripción: ")
				tareas.crearTarea(desc)
				break;

			case "2":
				console.log(tareas.listadoArray);
				break;
		}

		await pause();
	} while (opt !== "0");
};

main();
