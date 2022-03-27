import { infoContainer } from "../scripts.js";

export function printError(error) {
	const fragment = document.createDocumentFragment();

	const imageContainer = document.createElement("DIV");
	imageContainer.classList.add("searchMessage__imageContainer");

	const errorImage = document.createElement("IMG");
	errorImage.setAttribute("src", "/src/assets/images/icons/icon-alert.svg");
	errorImage.setAttribute("alt", "icon error");
	errorImage.classList.add("searchMessage__image");

	imageContainer.prepend(errorImage);

	const errorParagraph = document.createElement("P");
	errorParagraph.classList.add("searchMessage__paragraph");
	errorParagraph.textContent = `${error}`;

	fragment.prepend(imageContainer);
	fragment.append(errorParagraph);

	[...infoContainer.children].forEach((item) => infoContainer.removeChild(item));

	infoContainer.append(fragment);
}
