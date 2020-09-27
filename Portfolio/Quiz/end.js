const totalScore = document.getElementById("totalScore");
const scoreTotal = localStorage.getItem("scoreTotal");
totalScore.innerText = "Total Score: " + scoreTotal;
