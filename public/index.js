/*
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
*/

var omb = document.getElementById("omb");
var ombInfo = document.getElementById("ombInfo");
var ombClose = document.getElementById("ombClose");
omb.onclick = function(event) {
	ombInfo.style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};
ombClose.onclick = function(event) {
	ombInfo.style.display = "none";
	document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

var ge = document.getElementById("ge");
var geInfo = document.getElementById("geInfo");
var geClose = document.getElementById("geClose");
ge.onclick = function(event) {
	geInfo.style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};
geClose.onclick = function(event) {
	geInfo.style.display = "none";
	document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

var srt = document.getElementById("srt");
var srtInfo = document.getElementById("srtInfo");
var srtClose = document.getElementById("srtClose");
srt.onclick = function(event) {
	srtInfo.style.display = "block";
	document.getElementsByTagName('body')[0].style.overflow = 'hidden';
};
srtClose.onclick = function(event) {
	srtInfo.style.display = "none";
	document.getElementsByTagName('body')[0].style.overflow = 'visible';
}

window.onclick = function(event) {
  if (event.target == ombInfo || event.target == geInfo || event.target == srtInfo) {
    ombInfo.style.display = "none";
	geInfo.style.display = "none";
	srtInfo.style.display = "none";
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
  }
}