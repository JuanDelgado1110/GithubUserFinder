const themeMode = document.querySelector(".themeSwitcher__mode");
const themeIcon = document.querySelector(".themeSwitcher__imgMode");

export const themeSwitcher = document.querySelector(".themeSwitcher");

const rootElement = document.documentElement.style;

export function changeTheme(event) {
	if (themeMode.textContent === "Dark") {
		rootElement.removeProperty("--color-1");
		rootElement.removeProperty("--color-2");
		rootElement.removeProperty("--color-4");

		themeMode.textContent = "Light";
		themeIcon.src = "/src/assets/images/icons/icon-sun.svg";
	} else {
		rootElement.setProperty("--color-4", "#4B6A9B");
		rootElement.setProperty("--color-1", "#DDDDDD");
		rootElement.setProperty("--color-2", "#FFFFFF");

		themeMode.textContent = "Dark";
		themeIcon.src = "/src/assets/images/icons/icon-moon.svg";
	}
}
