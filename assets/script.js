let carImg = document.querySelector('#carousel-img')
let imgsSrc = ['assets/img/car1.jpg', 'assets/img/car2.jpg']
let i = 0

setInterval(mudaImg, 5000)

function mudaImg() {
	console.log(i);
	carImg.src = imgsSrc[i]
	i++
	if (i === 2) i = 0
}
