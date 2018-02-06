const siteLogo = document.querySelector("#site-logo");

document.addEventListener("scroll", function(e) {
	if (window.scrollY > 100) {
		siteLogo.style.height = "60px";
		siteLogo.src = "./img/emblem.svg";
	} else {
		siteLogo.src = "./img/logo-text-min.png";
		siteLogo.style.height = "";
	}
});
