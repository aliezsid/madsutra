const siteLogo = document.querySelector("#site-logo");

document.addEventListener("scroll", function(e) {
	if (window.scrollY > 100) {
		siteLogo.style.height = "60px";
		siteLogo.src = "./img/emblem.png";
	} else {
		siteLogo.src = "./img/logo-text-min.png";
		siteLogo.style.height = "";
	}
});

/* Open */
function openNav() {
	document.getElementById("nav").style.height = "100%";
}

/* Close */
function closeNav() {
	document.getElementById("nav").style.height = "0%";
}
