// protect.js

// Required tokens for each page
const requiredTokens = {
    1: null,
    2: "page1_done",
    3: "page2_done",
    4: "page3_done",
    5: "page4_done",
    6: "page5_done",
    7: "page6_done"
};

// Read page number from HTML
const currentPage = document.body.dataset.page;

// Block unauthorized page openings
if (requiredTokens[currentPage] && sessionStorage.getItem(requiredTokens[currentPage]) !== "true") {
    window.location.href = "index.html";
}

// Timer logic
let timeLeft = 30;
const timerDisplay = document.getElementById("timer");
const btn = document.getElementById("continueBtn");

function startTimer() {
    btn.style.display = "none";
    timerDisplay.textContent = timeLeft;

    const interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(interval);
            btn.style.display = "block"; 
        }
    }, 1000);
}

startTimer();