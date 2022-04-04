document.addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector("header span");
	let icon = document.querySelector("header img");
	let body = document.querySelector("body");
	
	btn.addEventListener("click", () => {
		if (btn.innerHTML === `<span class="material-icons md-48">light_mode</span>`){
			btn.innerHTML = `<span class="material-icons md-48">dark_mode</span>`;
			icon.innerHTML = `<img src="./asset/Sans titre-1(1).ico" alt="logo netflix">`;
		} else {
			btn.innerHTML = `<span class="material-icons md-48">light_mode</span>`;
		}
		body.classList.toggle("light");
	});
});