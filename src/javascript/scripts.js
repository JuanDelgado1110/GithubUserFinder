import { searchMessage } from "./functions/search-message.js";
import { requestData } from "./controllers/request-data.js";
import { themeSwitcher, changeTheme } from "./controllers/theme.js";

const form = document.getElementById("finder");
const button = document.querySelector(".seeker__button");

export const infoContainer = document.querySelector(".infoContainer");

searchMessage();

form.addEventListener("submit", (event) => {
	event.preventDefault();
});

button.addEventListener("click", requestData);

themeSwitcher.addEventListener("click", changeTheme);
