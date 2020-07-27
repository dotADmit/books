let classOpen = document.querySelectorAll('.books__item-desc');
let openBtn = document.querySelectorAll('.btn');

for (let index = 0; index < classOpen.length; index++) {
		classOpen[index].classList.remove('open');
}

for (let index = 0; index < openBtn.length; index++) {
		openBtn[index].onclick = function () {
				classOpen[index].classList.toggle('open');
		}
}