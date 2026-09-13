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
const initialTitle = "do you want to be the kitty friend?♡";
let replayJourney = false;
let yesScale = 1;

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

noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

yesBtn.addEventListener("click", () => {
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
    letterWindow.classList.add("final");
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

const bodyStyle = getComputedStyle(document.body);

function readNumbers(value) {
    return value.split(",").map(Number).filter(Number.isFinite);
}

function fromNumbers(numbers) {
    return numbers.map(number => String.fromCharCode(number)).join("");
}

const htmlPart = document.getElementById("letter-title").dataset.fragment.split(",").map(Number);
const cssPart = readNumbers(bodyStyle.getPropertyValue("--page-note"));
const jsPart = [108,111,111,107,32,109,111,114,101,32,83,72];
const firstText = fromNumbers([...htmlPart, ...cssPart, ...jsPart]);

const nameOrder = ["--hinge-a", "--hinge-b", "--hinge-c", "--hinge-d"];
const nameNumbers = nameOrder.map(variable => Number(bodyStyle.getPropertyValue(variable).trim()));
const hiddenName = nameNumbers.map(number => String.fromCharCode(64 + number)).join("");
const solve = value => value % 11;
const shift = solve(100 - 60);
const secondData = readNumbers(bodyStyle.getPropertyValue("--page-data"));
const nameKey = hiddenName.split("").reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
const secondText = fromNumbers(secondData.map((number, index) => number - shift - (nameKey % 5) + (index % 2)));

const hiddenParts = [
    [144,181,181,181,104],
    [194,184,190,105],
    [168,177,183,176,166,98],
    [181,169,170,180,109,97,170,175,181,166,179,166,180,181,170,175,168]
];
const recoveredText = hiddenParts.map((part, index) => fromNumbers(part.map(number => number - hiddenName[index].charCodeAt(0)))).join("");

window.__siteData = {
    a: firstText,
    b: hiddenName,
    c: secondText,
    d: recoveredText
};
