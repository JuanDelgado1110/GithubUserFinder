import { infoContainer } from "../scripts.js";
import { createTemplate } from "../functions/template-data.js";
import { printData } from "../functions/print-data.js";
import { printError } from "../functions/print-error.js";

const input = document.getElementById("userNameSeeker");

export let dataJSON;

export function requestData() {
	fetch(`https://api.github.com/users/${input.value}`)
		.then((response) => {
			if (response.status == 404) throw new Error("no existe un usuario con ese nombre");

			return response.json();
		})
		.then((data) => {
			dataJSON = data;

			[...infoContainer.children].forEach((child) => infoContainer.removeChild(child));

			infoContainer.prepend(createTemplate());

			printData();
		})
		.catch((error) => {
			printError(error);
		});
}
