var jaune = document.getElementById('jaune');
var overlay = document.getElementById('overlay');
jaune.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal(){
	overlay.style.display='none';
}