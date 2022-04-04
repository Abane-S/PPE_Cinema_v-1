document.addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector("header span");
	let icon = document.querySelector("header img");
	let body = document.querySelector("body");
	console.log( icon);
	btn.addEventListener("click", () => {
		if (btn.innerHTML === `<span class="material-icons md-48">light_mode</span>`){
			btn.innerHTML = `<span class="material-icons md-48">dark_mode</span>`;
			icon.setAttribute("src", "./asset/netflix_official_logo_icon_168085.ico");

		} else {
			btn.innerHTML = `<span class="material-icons md-48">light_mode</span>`;
			icon.setAttribute("src", "./asset/icon_light_mode.png");

		}
		body.classList.toggle("light");
	});

});