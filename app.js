const p1Button = document.querySelector("#PLAYER1");
const p2Button = document.querySelector("#PLAYER2");

const reset = document.querySelector("#reset");

let p1ScoreD = document.querySelector("#p1");
let p2ScoreD = document.querySelector("#p2");

const selection = document.querySelector("#count");
console.log(selection.value);
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winScore = 7;

selection.addEventListener("change", function () {
	winScore = parseInt(this.value);
	p1Score = 0;
	p2Score = 0;
	p1ScoreD.textContent = 0;
	p2ScoreD.textContent = 0;
	isGameOver = false;
});

p1Button.addEventListener("click", function () {
	if (!isGameOver) p1Score++;
	if (p1Score === winScore) {
		isGameOver = true;
		p1ScoreD.style.color = "green";
		p2ScoreD.style.color = "red";
		p2Button.style.backgroundColor = "gray";
		this.style.backgroundColor = "gray";
	}
	p1ScoreD.textContent = p1Score;
});

p2Button.addEventListener("click", function () {
	if (!isGameOver) p2Score++;
	if (p2Score === winScore) {
		isGameOver = true;
		p2ScoreD.style.color = "green";
		p1ScoreD.style.color = "red";
		p1Button.style.backgroundColor = "gray";
		this.style.backgroundColor = "gray";
	}
	p2ScoreD.textContent = p2Score;
});

reset.addEventListener("click", function () {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1ScoreD.textContent = 0;
	p2ScoreD.textContent = 0;
	p1Button.style.backgroundColor = "skyblue";
	p2Button.style.backgroundColor = "lawngreen";
	p1ScoreD.style.color = "black";
	p2ScoreD.style.color = "black";
});
