 //Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-screen");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const letterWindow = document.querySelector(".letter-window");
const replayBtn = document.getElementById("replay-btn");
const restartBtn = document.getElementById("restart-btn");
const initialTitle = "Will you be mine?♡";
let replayJourney = false;

function resetLetter() {
    letterWindow.classList.remove("final", "replay-intro", "replay-final", "replay-journey", "open");
    title.textContent = initialTitle;
    catImg.src = "cute.gif";
    catImg.alt = "Cute cat";
    catImg.style.display = "";
    buttons.style.display = "flex";
    finalText.hidden = true;
    noBtn.style.display = "inline-block";
    noBtn.style.transform = "";
    yesScale = 1;
    yesBtn.style.position = "relative";
    yesBtn.style.top = "";
    yesBtn.style.left = "";
    yesBtn.style.transform = "scale(1)";
}

function showReplayIntro() {
    resetLetter();
    letterWindow.classList.add("replay-intro", "replay-journey");
    title.textContent = "click yes, i will tell you smt";
    catImg.src = "bunnydance.gif";
    catImg.alt = "pinkpink.gif";
    noBtn.style.display = "none";
}

//Click Envelope to open letter
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
        restartBtn.style.display = "none";
    if (replayJourney) {
        showReplayIntro();
    } else {
        resetLetter();
    }
    letter.style.display = "flex";
    requestAnimationFrame(() => letterWindow.classList.add("open"));
});


//Logic to move NO btn

    noBtn.addEventListener("mouseover",   () => {
   const min = 200;
   const max = 200;

   const distance =Math.random() * (max - min) + min;
   const angle=Math.random() * Math.PI * 2;


   const moveX = Math.cos(angle) * distance;
   const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

});



// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";


noBtn.addEventListener ("click", () => {
    // Move the button to a random position
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;

    }else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener ("click", () => {
    if (replayJourney) {
        letterWindow.classList.remove("replay-intro");
        letterWindow.classList.add("replay-final");
        title.textContent = "hello SH, i want say, I like your Channel, i hope things will get better for you SH..nothing is forever!.wish you best.\n\nfrom: h/star⭐\n\nbtw u need to try to sleep early.";
        catImg.style.display = "none";
        buttons.style.display = "none";
        finalText.hidden = true;
        return;
    }

    title.textContent = "luckey you SH♡";
    catImg.src = "cutekitty.gif";

    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.hidden = false;
});

replayBtn.addEventListener("click", () => {
  letter.style.display = "none";
  envelope.style.display = "block";
    restartBtn.style.display = "block";
    replayJourney = true;
    resetLetter();
});

restartBtn.addEventListener("click", () => {
    letter.style.display = "none";
    envelope.style.display = "block";
    restartBtn.style.display = "block";
    replayJourney = false;
    resetLetter();
});
