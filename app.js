// const counterNum = document.querySelectorAll(".number-counter1");

// const speed = 40;

// counterNum.forEach((curElem) => {
// 	const updateNumber = () => {
// 		const targetNumber = parseInt(curElem.dataset.number);

// 		const initialNum = parseInt(curElem.innerText);

// 		const incrementNumber = Math.trunc(targetNumber / speed);
// 		console.log(targetNumber);


// 		if(initialNum < targetNumber){
// 			curElem.innerText = `${initialNum + incrementNumber}+`;
// 			setTimeout(updateNumber, 100);
// 		}
// 	};

// 	updateNumber();
//  });

const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

 function myFunction(){
	 document.getElementById("myVideo").autoplay = true;
	document.getElementById("myVideo").controls = true;
	document.getElementById("myVideo").style.display = "block";
	document.getElementById("videoButton").style.display = "none";
	document.querySelector(".video-container").style.background = "none";
}
//  function logo(){
// 	 document.querySelectorAll(".brand-logo").style.display = "none";

// }

// const workSection = document.querySelector('.about');
// const workObserver = new IntersectionObserver((entries, observer) => {
// 	const ent = entries[0];
// 	console.log(ent)
// }, {
// 	root: null,
// 	threshold: 0,
// });

// workObserver.observe(workSection);






