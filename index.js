var answer = document.getElementById("answer");
var question = document.getElementById("question");
var probAns = null;

window.onload = init;

answer.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		onEnter();
	}
});

answer.addEventListener("keydown", function(event) {
	if (event.key === "c") {
		location = '/count';
	}
});

function onEnter() {
	let ans = answer.value;
	if (probAns.toString() == ans) {
		incCorrect();
		newQuestion();
		answer.value = '';
	}
}

function init() {
	newQuestion();
	let current = localStorage.getItem('correct');
	if (current == null) {
		current = 0;
		localStorage.setItem('correct', 0);
	}
}

function newQuestion() {
	let a = Math.floor(Math.random()*15);
	let b = Math.floor(Math.random()*15);
	probAns = a * b;
	question.innerText = a.toString() + ' x ' + b.toString();
}

function incCorrect() {
	let current = localStorage.getItem('correct');
	current = parseInt(current)+1
	localStorage.setItem('correct', current);
}