over = document.getElementById('overlay');
tog = document.getElementById('toggle');
function toggle() {
	console.log(1);
	tog.classList.toggle('active');
	over.classList.toggle('open');
}
