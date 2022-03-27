import { infoContainer } from "../scripts.js";

export function searchMessage() {
	const fragment = document.createDocumentFragment();

	const imageContainer = document.createElement("DIV");
	imageContainer.classList.add("searchMessage__imageContainer");

	const searchImage = document.createElement("IMG");
	searchImage.setAttribute("src", "./src/assets/images/icons/magnifying-glass.svg");
	searchImage.setAttribute("alt", "magnifying-glass");
	searchImage.classList.add("searchMessage__image");

	imageContainer.prepend(searchImage);

	const searchParagraph = document.createElement("P");
	searchParagraph.classList.add("searchMessage__paragraph");
	searchParagraph.textContent = "search a github user";

	fragment.prepend(imageContainer);
	fragment.append(searchParagraph);

	infoContainer.prepend(fragment);
}
