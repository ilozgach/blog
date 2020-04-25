var sidebar = null
var is_sidebar_removed = false

function dbg() {
	// console.log("OLOLO");

	var w = window.innerWidth;
	// var h = window.innerHeight;

	// 1023
	if (w < 1023 && !is_sidebar_removed) {
		main = document.getElementById("main");
		sidebar = document.getElementById("sidebar");
		main.removeChild(sidebar);
		is_sidebar_removed = true
		posts = document.getElementById("posts");
		posts.style.width = "100%"
	} else if (w >= 1023 && is_sidebar_removed) {
		main = document.getElementById("main");
		main.appendChild(sidebar)
		is_sidebar_removed = false
		posts = document.getElementById("posts");
		posts.style.width = "70%"
	}
}

window.addEventListener('resize', dbg);