const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const choiceArea = document.getElementById("choiceArea");
const messageArea = document.getElementById("messageArea");
const chatMessage = document.getElementById("chatMessage");
const typing = document.getElementById("typing");
const finalArea = document.getElementById("finalArea");
const enterButton = document.getElementById("enterButton");
let noClicks = 0;
const noMessages = [
  "that's crazy.",
  "you sure?",
  "interesting choice.",
  "bro really said no 💀",
  "okay then.",
  "we'll see about that."
];
/* NO BUTTON: IT DOES NOT WANT TO BE CLICKED */
noButton.addEventListener("click", () => {
  noClicks++;
  noButton.textContent =
    noMessages[Math.min(noClicks - 1, noMessages.length - 1)];
  const maxX = Math.min(100, window.innerWidth / 3);
  const maxY = 70;
  const randomX = (Math.random() * maxX * 2) - maxX;
  const randomY = (Math.random() * maxY * 2) - maxY;
  noButton.style.transform =
    `translate(${randomX}px, ${randomY}px)`;
  if (noClicks >= 4) {
    noButton.textContent = "FINE 😭";
  }
});
/* YES BUTTON: START THE GHOSTING */
yesButton.addEventListener("click", () => {
  yesButton.disabled = true;
  noButton.style.display = "none";
  yesButton.textContent = "CONNECTING...";
  setTimeout(() => {
    choiceArea.classList.add("hidden");
    messageArea.classList.remove("hidden");
    chatMessage.textContent = "hey, you there?";
    yesButton.textContent = "YES, LET ME SEE";
  }, 700);
  setTimeout(() => {
    chatMessage.textContent = "Seen.";
    typing.classList.add("hidden");
  }, 1900);
  setTimeout(() => {
    chatMessage.textContent = "Ghostping is typing...";
    typing.classList.remove("hidden");
  }, 2900);
  setTimeout(() => {
    chatMessage.textContent = "Ghostping stopped typing.";
    typing.classList.add("hidden");
  }, 4800);
  setTimeout(() => {
    chatMessage.textContent = "Ghostping is typing...";
    typing.classList.remove("hidden");
  }, 5900);
  setTimeout(() => {
    chatMessage.textContent = "...";
    typing.classList.add("hidden");
  }, 7200);
  setTimeout(() => {
    messageArea.classList.add("hidden");
    finalArea.classList.remove("hidden");
    document.body.classList.add("glitching");
    setTimeout(() => {
      document.body.classList.remove("glitching");
    }, 600);
  }, 7900);
});
/* ENTER THE GHOST ZONE */
enterButton.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="noise"></div>
    <main style="
      min-height:100vh;
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      text-align:center;
      padding:30px;
      background:
        radial-gradient(circle at center, rgba(126,34,206,.2), transparent 35%),
        #050208;
      color:#f8f4ff;
      font-family:'Space Mono',monospace;
    ">
      <div style="
        font-size:80px;
        margin-bottom:25px;
        filter:drop-shadow(0 0 25px rgba(168,85,247,.8));
        animation:ghostFloat 3s ease-in-out infinite;
      ">
        👻
      </div>
      <p style="
        color:#c084fc;
        font-size:9px;
        letter-spacing:4px;
        margin-bottom:18px;
      ">
        GHOSTPING.EXE
      </p>
      <h1 style="
        font-family:Arial,sans-serif;
        font-size:clamp(34px,9vw,70px);
        line-height:1;
        margin-bottom:18px;
      ">
        WELCOME TO<br>
        THE GHOST ZONE
      </h1>
      <p style="
        color:#756b7d;
        font-size:10px;
        max-width:320px;
        line-height:1.8;
      ">
        something is loading...
        <br>
        probably.
      </p>
      <p style="
        margin-top:35px;
        color:#403946;
        font-size:7px;
        letter-spacing:2px;
      ">
        STATUS: YOU SHOULD NOT BE HERE
      </p>
    </main>
  `;
  /* Add the animation because the page was rebuilt dynamically */
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ghostFloat {
      0%,100% { transform:translateY(0) rotate(-2deg); }
      50% { transform:translateY(-12px) rotate(2deg); }
    }
  `;
  document.head.appendChild(style);
});
/* RANDOM SYSTEM GLITCH */
setInterval(() => {
  if (Math.random() > 0.75) {
    const body = document.body;
    body.style.transform =
      `translateX(${Math.random() * 4 - 2}px)`;
    setTimeout(() => {
      body.style.transform = "translateX(0)";
    }, 80);
  }
}, 3500);