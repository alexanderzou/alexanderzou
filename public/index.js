// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
//import { initializeApp } from "./firebase/app";
// Add SDKs for Firebase products that you want to use:
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgXtdL1BK4U4Rn6PV1-wJJ1k2HnRBmqHw",
  authDomain: "alexanderzou-ea323.firebaseapp.com",
  projectId: "alexanderzou",
  storageBucket: "alexanderzou.appspot.com",
  messagingSenderId: "183517074140",
  appId: "1:183517074140:web:042eb081b3f9ce0d719a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//buttons
var omb = document.getElementById("omb");
omb.addEventListener("click", function() {openModal("omb");});
var ge = document.getElementById("ge");
ge.addEventListener("click", function() {openModal("ge");});
var srt = document.getElementById("srt");
srt.addEventListener("click", function() {openModal("srt");});

//modal elements
var modal = document.getElementById("modal");
var closer = document.getElementById("close");
var img = document.getElementById("modalImg");
var name = document.getElementById("modalName");
var desc = document.getElementById("modalDesc");
var tool = document.getElementById("modalTool");
var link1 = document.getElementById("modalLink1");
var link2 = document.getElementById("modalLink2");

function openModal(mode) {
	if (mode == "omb") {
		img.src = "img/onemorebullet.png";
		name.innerHTML = "One More Bullet";
		desc.innerHTML = "A game inspired by the flash game \"10 More Bullets\". Has keyboard controls, custom and imported sprites, and an upgrade/money system."
		desc.style.transform = "translate(0,-640px)"
		tool.innerHTML = "Processing, Java"
		link1.href = "https://github.com/fkhan00/MKS22X-Final_Project"
		link1.innerHTML = "GitHub";
		link2.href = "https://processing.org/";
		link2.innerHTML = "Processing";
	}
	if (mode == "ge") {
		img.src = "img/graphic.gif";
		name.innerHTML = "Python Graphics Engine";
		desc.innerHTML = "A simple and easy to build graphics engine written in Python. Supports 3D rendering, animation (movement commands), and lighting.";
		desc.style.transform = "translate(0,-640px)"
		tool.innerHTML = "Python, ImageMagick";
		link1.href = "https://github.com/alexanderzou/MKS66-Animation";
		link1.innerHTML = "GitHub";
		link2.href = "https://imagemagick.org/index.php";
		link2.innerHTML = "ImageMagick";
	}
	if (mode == "srt") {
		img.src = "img/NSA.png";
		name.innerHTML = "Study Room Tracker";
		desc.innerHTML = "A study room tracker web app for the Folsom Library at RPI. Features interactive floor plans, occupy/unoccupy functions, and a login system.";
		desc.style.transform = "translate(0,-640px)"
		tool.innerHTML = "HTML/CSS, Javascript, Firebase";
		link1.href = "https://github.com/StudyRoomTracker/StudyRoomTracker.github.io";
		link1.innerHTML = "GitHub";
		link2.href = "https://studyroomtracker.web.app/";
		link2.innerHTML = "Site";
	}
	modal.style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};

function resetModal() {
	modal.style.display = "none";
	document.getElementsByTagName('body')[0].style.overflow = 'visible';
	img.src = "";
	name.innerHTML = "";
	desc.innerHTML = "";
	desc.style.transform = "translate(0,-1075%)"
	tool.innerHTML = "";
	link1.href = "";
	link1.innerHTML = "";
	link2.href = "";
	link2.innerHTML = "";
}

closer.onclick = function(event) {
	resetModal();
}

window.onclick = function(event) {
  if (event.target == modal) {
    resetModal();
  }
}