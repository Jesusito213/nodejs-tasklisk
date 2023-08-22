import ("colors")
import inquirer from "inquirer";

const preguntas = [
	{
		type: "list",
		name: "opt",
		message: "What do you want to do?",
		choices: [
			{
				value: "1",
				name: "1. Crear tarea",
			},
			{
				value: "2",
				name: "2. Tareas listadas",
			},
			{
				value: "3",
				name: "3. Tareas completadas",
			},
			{
				value: "4",
				name: "4. Tareas pendientes",
			},
			{
				value: "5",
				name: "5. Completar tarea(s)",
			},
			{
				value: "6",
				name: "6. Borrar tarea",
			},
			{
				value: "0",
				name: "0. Salir",
			},
		],
	},
];

export const inquirerMenu = async () => {
	console.log("===================");
	console.log("Select an option");
	console.log("===================\n");

	const { opt } = await inquirer.prompt(preguntas);
	return opt;
};

export const pause = async () => {
	const question = [
		{
			type: "input",
			name: "enter",
			message: `Presione ${"ENTER".blue} para continuar`,
		},
	];

	await inquirer.prompt(question);
};

export const leerInput = async (message) => {
	const question = [
		{
			type: "input",
			name: "desc",
			message,
			validate(value) {
				if (value.length === 0) {
					return "Por favor ingrese un valor";
				}
				return true;
			},
		},
	];

	const { desc } = await inquirer.prompt(question);
	return desc;
};

