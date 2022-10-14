const quotes = [
 "I can survive well enough on my own, if given the proper reading material.",
 "Life isn't easy, no matter where you are. You'll make choices you think are right, and then suffer for them.",
 "It would not take a monster to destroy a monster, but light, light to drive out darkness.",
 "The world, will be saved and remade by dreamers.",
 "If you can learn to endure pain, you can survive anything.",
 "You could rattle the stars. You could do anything, if only you dared.",
 "Magic makes people dangerous.",
 "Everybody is something. Even the most common witch has her coven.",
 "What's the point in having a heart if you don't use it to spare others from the harsh judgments of your mind?",
 "Libraries were full of ideas, perhaps the most dangerous and powerful of all weapons.",
 "She was Aelin Ashryver Galathynius and she would not be afraid.",
 "To whatever end, Fireheart.",
 "Fireheart, why do you cry? Because I am lost. And do not know the way.",
 "Even when this world is a forgotten whisper of dust between the stars, I will love you.",
];

const quote = document.getElementById("quote");
const input = document.getElementById("quoteType");
const timer = document.getElementById("counter");
let recordedTime = Date.now();
const messageEl = document.getElementById("message-el");

document.getElementById("startBtn").addEventListener("click", render);
document.getElementById("startBtn").addEventListener("click", resetDateTimer);

function resetDateTimer() {
 recordedTime = new Date().getTime();
 messageEl.innerText = `You asked for a new quote, previous timer was reset!`;
}

function render() {
 const currentIndex = Math.floor(Math.random() * quotes.length);
 const currentQuote = quotes[currentIndex];
 quote.innerText = "";
 currentQuote.split("").forEach((character) => {
  const characterSpan = document.createElement("span");
  characterSpan.innerText = character;
  quote.appendChild(characterSpan);
 });

 input.value = null;
 setTimer();
}

function inputCheck() {
 recordedTime = new Date().getTime();
 input.addEventListener("input", () => {
  const quoteArr = quote.querySelectorAll("span");
  const valueArr = input.value.split("");
  let correct = true;
  quoteArr.forEach((item, index) => {
   const character = valueArr[index];
   if (character == null) {
    item.classList.remove("correct");
    item.classList.remove("wrong");
    correct = false;
   } else if (character === item.innerText) {
    item.classList.add("correct");
    item.classList.remove("wrong");
   } else {
    item.classList.remove("correct");
    item.classList.add("wrong");
    correct = false;
   }
  });

  if (correct) {
   render();
   let elapsedTime = new Date().getTime() - recordedTime;
   const message = `CONGRATULATIONS! You finished in  ${Math.floor(
    elapsedTime / 1000
   )} seconds.`;
   messageEl.innerText = message;
   recordedTime = new Date().getTime();
  }
 });
}

let startTimer;
function setTimer() {
 start = new Date();
 timer.innerText = 0;
 setInterval(() => {
  timer.innerText = getTime();
  timer.innerText = `Your current time is: ${timer.innerText}`;
 });
}

function getTime() {
 return Math.floor((new Date() - start) / 1000);
}

inputCheck();
render();
