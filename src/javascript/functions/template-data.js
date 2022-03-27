export function createTemplate() {
	const fragment = document.createDocumentFragment();

	const Article = document.createElement("article");
	Article.classList.add("infoContainer");

	//
	//
	//

	const UserInfoContainer = document.createElement("DIV");
	UserInfoContainer.classList.add("userInfo");

	const UserInfoUserName = document.createElement("H2");
	UserInfoUserName.classList.add("userInfo__userName");
	UserInfoUserName.textContent = "username";

	const UserInfoImageContainer = document.createElement("DIV");
	UserInfoImageContainer.classList.add("userInfo__imageContainer");

	const UserInfoImage = document.createElement("IMG");
	UserInfoImage.setAttribute("src", "/src/assets/images/Bitmap.svg");
	UserInfoImage.setAttribute("alt", "user prefile image");
	UserInfoImage.classList.add("userInfo__profileImage");

	const UserInfoTwitterUsername = document.createElement("SPAN");
	UserInfoTwitterUsername.classList.add("userInfo__twitterUsername");
	UserInfoTwitterUsername.textContent = "@twitter username";

	const UserInfoJoinDate = document.createElement("SPAN");
	UserInfoJoinDate.classList.add("userInfo__joinDate");
	UserInfoJoinDate.textContent = "fecha";

	const UserInfoDescription = document.createElement("P");
	UserInfoDescription.classList.add("userInfo__description");
	UserInfoDescription.textContent = "Lorem, molestias optio quae veritatis reiciendis sequi inventore natus exercitationem quia? Reprehenderit id distinctio ipsam reiciendis totam";

	UserInfoImageContainer.append(UserInfoImage);

	UserInfoContainer.append(UserInfoUserName);
	UserInfoContainer.append(UserInfoImageContainer);
	UserInfoContainer.append(UserInfoTwitterUsername);
	UserInfoContainer.append(UserInfoJoinDate);
	UserInfoContainer.append(UserInfoDescription);

	//
	//
	//

	const GithubInfoContainer = document.createElement("DIV");
	GithubInfoContainer.classList.add("githubInfo");

	//

	const GithubInfoRepositories = document.createElement("DIV");
	GithubInfoRepositories.classList.add("githubInfo__repositories");

	const GithubInfoRepositoriesText = document.createElement("DIV");
	GithubInfoRepositoriesText.classList.add("githubInfo__repositories--text");
	GithubInfoRepositoriesText.textContent = "repos";

	const GithubInfoRepositoriesNumbers = document.createElement("SPAN");
	GithubInfoRepositoriesNumbers.classList.add("githubInfo__repositories--number");
	GithubInfoRepositoriesNumbers.textContent = "097";

	GithubInfoRepositories.append(GithubInfoRepositoriesText);
	GithubInfoRepositories.append(GithubInfoRepositoriesNumbers);

	//

	const GithubInfoFollows = document.createElement("DIV");
	GithubInfoFollows.classList.add("githubInfo__follows");

	const GithubInfoFollowsText = document.createElement("DIV");
	GithubInfoFollowsText.classList.add("githubInfo__follows--text");
	GithubInfoFollowsText.textContent = "follows";

	const GithubInfoFollowsNumbers = document.createElement("SPAN");
	GithubInfoFollowsNumbers.classList.add("githubInfo__follows--number");
	GithubInfoFollowsNumbers.textContent = "092";

	GithubInfoFollows.append(GithubInfoFollowsText);
	GithubInfoFollows.append(GithubInfoFollowsNumbers);

	//

	const GithubInfoFollowings = document.createElement("DIV");
	GithubInfoFollowings.classList.add("githubInfo__followings");

	const GithubInfoFollowingsText = document.createElement("DIV");
	GithubInfoFollowingsText.classList.add("githubInfo__followings--text");
	GithubInfoFollowingsText.textContent = "followings";

	const GithubInfoFollowingsNumbers = document.createElement("SPAN");
	GithubInfoFollowingsNumbers.classList.add("githubInfo__followings--number");
	GithubInfoFollowingsNumbers.textContent = "217";

	GithubInfoFollowings.append(GithubInfoFollowingsText);
	GithubInfoFollowings.append(GithubInfoFollowingsNumbers);

	//

	GithubInfoContainer.append(GithubInfoRepositories);
	GithubInfoContainer.append(GithubInfoFollows);
	GithubInfoContainer.append(GithubInfoFollowings);

	//
	//
	//

	const ExtraInfoContainer = document.createElement("DIV");
	ExtraInfoContainer.classList.add("extraInfo");

	const ExtraInfoList = document.createElement("UL");
	ExtraInfoList.classList.add("extraInfo__list");

	//

	const ExtraInfoLocation = document.createElement("LI");
	ExtraInfoLocation.classList.add("extraInfo__listItem", "extraInfo__location");

	const ExtraInfoLocationImageContainer = document.createElement("DIV");
	ExtraInfoLocationImageContainer.classList.add("extraInfo__imageContainer");

	const ExtraInfoLocationImage = document.createElement("IMG");
	ExtraInfoLocationImage.setAttribute("src", "/src/assets/images/icons/icon-location.svg");
	ExtraInfoLocationImage.setAttribute("alt", "location image");
	ExtraInfoLocationImage.classList.add("extraInfo__locationImg");

	ExtraInfoLocationImageContainer.append(ExtraInfoLocationImage);

	ExtraInfoLocation.append(ExtraInfoLocationImageContainer);
	ExtraInfoLocation.append(document.createTextNode("geolocalization"));

	//

	const ExtraInfoGithub = document.createElement("LI");
	ExtraInfoGithub.classList.add("extraInfo__listItem", "extraInfo__githubLink");

	const ExtraInfoGithubImageContainer = document.createElement("DIV");
	ExtraInfoGithubImageContainer.classList.add("extraInfo__imageContainer");

	const ExtraInfoGithubImage = document.createElement("IMG");
	ExtraInfoGithubImage.setAttribute("src", "/src/assets/images/icons/icon-website.svg");
	ExtraInfoGithubImage.setAttribute("alt", "website link image");
	ExtraInfoGithubImage.classList.add("extraInfo__githubLinkImg");

	const ExtraInfoGithubLink = document.createElement("A");
	ExtraInfoGithubLink.setAttribute("href", "#");
	ExtraInfoGithubLink.setAttribute("target", "blank");
	ExtraInfoGithubLink.setAttribute("id", "userGithubLink");
	ExtraInfoGithubLink.classList.add("extraInfo__githubLink");
	ExtraInfoGithubLink.textContent = "link github";

	ExtraInfoGithubImageContainer.append(ExtraInfoGithubImage);

	ExtraInfoGithub.append(ExtraInfoGithubImageContainer);
	ExtraInfoGithub.append(ExtraInfoGithubLink);

	//

	const ExtraInfoSocialMedia = document.createElement("LI");
	ExtraInfoSocialMedia.classList.add("extraInfo__listItem", "extraInfo__socialMedia");

	const ExtraInfoSocialMediaImageContainer = document.createElement("DIV");
	ExtraInfoSocialMediaImageContainer.classList.add("extraInfo__imageContainer");

	const ExtraInfoSocialMediaImage = document.createElement("IMG");
	ExtraInfoSocialMediaImage.setAttribute("src", "/src/assets/images/icons/icon-twitter.svg");
	ExtraInfoSocialMediaImage.setAttribute("alt", "socialMedia");
	ExtraInfoSocialMediaImage.classList.add("extraInfo__socialMediaImg");

	const ExtraInfoSocialMediaLink = document.createElement("A");
	ExtraInfoSocialMediaLink.setAttribute("href", "#");
	ExtraInfoSocialMediaLink.setAttribute("target", "blank");
	ExtraInfoSocialMediaLink.setAttribute("id", "userSocialMediaLink");
	ExtraInfoSocialMediaLink.classList.add("extraInfo__twitterLink");
	ExtraInfoSocialMediaLink.textContent = "link twitter";

	ExtraInfoSocialMediaImageContainer.append(ExtraInfoSocialMediaImage);

	ExtraInfoSocialMedia.append(ExtraInfoSocialMediaImageContainer);
	ExtraInfoSocialMedia.append(ExtraInfoSocialMediaLink);

	//

	const ExtraInfoJobPlace = document.createElement("LI");
	ExtraInfoJobPlace.classList.add("extraInfo__listItem", "extraInfo__jobPlace");

	const ExtraInfoJobPlaceImageContainer = document.createElement("DIV");
	ExtraInfoJobPlaceImageContainer.classList.add("extraInfo__imageContainer");

	const ExtraInfoJobPlaceImage = document.createElement("IMG");
	ExtraInfoJobPlaceImage.setAttribute("src", "/src/assets/images/icons/icon-company.svg");
	ExtraInfoJobPlaceImage.setAttribute("alt", "company image");
	ExtraInfoJobPlaceImage.classList.add("extraInfo__jobPlaceImg");

	ExtraInfoJobPlaceImageContainer.append(ExtraInfoJobPlaceImage);

	ExtraInfoJobPlace.append(ExtraInfoJobPlaceImageContainer);
	ExtraInfoJobPlace.append(document.createTextNode("empresa"));

	//

	ExtraInfoList.append(ExtraInfoLocation);
	ExtraInfoList.append(ExtraInfoGithub);
	ExtraInfoList.append(ExtraInfoSocialMedia);
	ExtraInfoList.append(ExtraInfoJobPlace);

	ExtraInfoContainer.append(ExtraInfoList);

	//
	//
	//

	Article.append(UserInfoContainer);
	Article.append(GithubInfoContainer);
	Article.append(ExtraInfoContainer);

	fragment.append(Article);

	return fragment;
}
