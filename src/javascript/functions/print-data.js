import { dataJSON } from "../controllers/request-data.js";

export const printData = function () {
	const userImage = document.querySelector(".userInfo__profileImage");
	const userName = document.querySelector(".userInfo__userName");
	const userTwitterUsername = document.querySelector(".userInfo__twitterUsername");
	const joinDate = document.querySelector(".userInfo__joinDate");
	const userBio = document.querySelector(".userInfo__description");

	const userRepositories = document.querySelector(".githubInfo__repositories--number");
	const userFollowers = document.querySelector(".githubInfo__follows--number");
	const userFollowings = document.querySelector(".githubInfo__followings--number");

	const userLocation = document.querySelector(".extraInfo__location");
	const userGithub = document.getElementById("userGithubLink");
	const userTwitter = document.getElementById("userSocialMediaLink");
	const userEnterprise = document.querySelector(".extraInfo__jobPlace");

	userImage.src = dataJSON.avatar_url;
	userName.textContent = dataJSON.login;
	joinDate.textContent = dataJSON.created_at.slice(0, 10);

	if (dataJSON.bio === null) {
		userBio.textContent = "";
	} else {
		userBio.textContent = dataJSON.bio;
	}

	userRepositories.textContent = dataJSON.public_repos;
	userFollowers.textContent = dataJSON.followers;
	userFollowings.textContent = dataJSON.following;

	if (dataJSON.location == null) {
		userLocation.childNodes[1].textContent = "Unknown";
	} else {
		userLocation.childNodes[1].textContent = dataJSON.location;
	}

	userGithub.textContent = dataJSON.html_url;
	userGithub.href = dataJSON.html_url;

	if (dataJSON.twitter_username == null) {
		userTwitterUsername.textContent = `@Unknown`;
		userTwitter.textContent = "Unknown";
	} else {
		userTwitterUsername.textContent = `@${dataJSON.twitter_username}`;

		userTwitter.textContent = dataJSON.twitter_username;
		userTwitter.href = `https://twitter.com/${dataJSON.twitter_username}`;
	}

	if (dataJSON.company == null) {
		userEnterprise.childNodes[1].textContent = "Unknown";
	} else {
		userEnterprise.childNodes[1].textContent = dataJSON.company;
	}
};
