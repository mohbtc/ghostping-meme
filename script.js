/* =========================
   MAIN ELEMENTS
========================= */

const entry = document.getElementById("entry");
const messageScreen = document.getElementById("messageScreen");
const zoneScreen = document.getElementById("zoneScreen");
const voidScreen = document.getElementById("voidScreen");

const openMessage = document.getElementById("openMessage");
const ignoreMessage = document.getElementById("ignoreMessage");

const messageBox = document.querySelector(".message-box");
const message = document.querySelector(".message");
const sender = document.querySelector(".sender");
const terminal = document.querySelector(".terminal");
const ghost = document.querySelector(".ghost");

const chat = document.getElementById("chat");
const ghosted = document.getElementById("ghosted");
const enterZone = document.getElementById("enterZone");

const statusCard = document.getElementById("statusCard");
const talkCard = document.getElementById("talkCard");
const loreCard = document.getElementById("loreCard");
const voidCard = document.getElementById("voidCard");

const backFromVoid = document.getElementById("backFromVoid");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");


/* =========================
   SCREEN SWITCHING
========================= */

function showScreen(screen) {

  entry.style.display = "none";

  messageScreen.classList.remove("active");
  zoneScreen.classList.remove("active");
  voidScreen.classList.remove("active");

  if (screen === entry) {
    entry.style.display = "flex";
  }

  if (screen === messageScreen) {
    messageScreen.classList.add("active");
  }

  if (screen === zoneScreen) {
    zoneScreen.classList.add("active");
  }

  if (screen === voidScreen) {
    voidScreen.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
}


/* =========================
   OPEN MESSAGE
========================= */

openMessage.addEventListener("click", () => {

  openMessage.disabled = true;
  openMessage.textContent = "OPENING...";


  /* First change */

  setTimeout(() => {

    message.textContent = "Seen.";

    sender.textContent = "MESSAGE STATUS";

    openMessage.style.display = "none";

  }, 900);


  /* Ghostping starts typing */

  setTimeout(() => {

    message.textContent =
      "Ghostping is typing...";

    sender.textContent =
      "GHOSTPING";

  }, 1900);


  /* Stops typing */

  setTimeout(() => {

    message.textContent =
      "Ghostping stopped typing.";

  }, 4000);


  /* Final ghosted state */

  setTimeout(() => {

    terminal.innerHTML = `
      <p>
        CONNECTION:
        <span class="red">LOST</span>
      </p>

      <p>
        REPLY STATUS:
        <span class="red">NONE</span>
      </p>
    `;


    messageBox.innerHTML = `
      <p class="sender">
        FINAL STATUS
      </p>

      <p class="message">
        YOU'VE BEEN GHOSTED. 👻
      </p>
    `;


    ghost.textContent = "👻";

    ghost.style.animation =
      "ghostFloat 1s ease-in-out infinite";


  }, 5200);


  /* Show Ghost Zone button */

  setTimeout(() => {

    enterZone.style.display = "block";

  }, 5700);

});


/* =========================
   ENTER GHOST ZONE
========================= */

enterZone.addEventListener("click", () => {

  showScreen(zoneScreen);

});


/* =========================
   IGNORE BUTTON
========================= */

ignoreMessage.addEventListener("click", () => {

  notify(
    "you really thought ignoring it would work."
  );


  setTimeout(() => {

    notify(
      "Ghostping saw that."
    );

  }, 3500);

});


/* =========================
   MODAL
========================= */

function openModal(title, text) {

  modalTitle.textContent = title;

  modalText.textContent = text;

  modal.classList.add("active");

}


function closeTheModal() {

  modal.classList.remove("active");

}


closeModal.addEventListener(
  "click",
  closeTheModal
);


modal.addEventListener("click", (event) => {

  if (event.target === modal) {

    closeTheModal();

  }

});


/* =========================
   CHECK YOUR STATUS
========================= */

statusCard.addEventListener("click", () => {

  openModal(
    "YOUR STATUS",
    "Signal detected.\n\nAttention span: 3%.\nGhost tolerance: 87%.\nChance of receiving a reply: statistically embarrassing."
  );

});


/* =========================
   TALK TO GHOSTPING
========================= */

talkCard.addEventListener("click", () => {

  openModal(
    "TRANSMISSION",
    "You: hello?\n\nGhostping: typing...\n\nGhostping: typing...\n\nGhostping: stopped typing.\n\nYou have been ghosted."
  );

});


/* =========================
   CLASSIFIED FILE
========================= */

loreCard.addEventListener("click", () => {

  openModal(
    "FILE 00.404",
    "Ghostping was never built to reply.\n\nIt was built to appear, disappear, and leave you questioning whether the message ever existed."
  );

});


/* =========================
   ENTER THE VOID
========================= */

voidCard.addEventListener("click", () => {

  showScreen(voidScreen);

});


/* =========================
   GO BACK FROM VOID
========================= */

backFromVoid.addEventListener("click", () => {

  showScreen(zoneScreen);

});


/* =========================
   NOTIFICATIONS
========================= */

function notify(text) {

  notificationText.textContent = text;

  notification.classList.add("show");


  setTimeout(() => {

    notification.classList.remove("show");

  }, 3500);

}


/* =========================
   GHOST SECRET CLICKS
========================= */

let ghostClicks = 0;


ghost.addEventListener("click", () => {

  ghostClicks++;


  if (ghostClicks === 1) {

    notify(
      "don't touch that."
    );

  }


  if (ghostClicks === 3) {

    notify(
      "seriously?"
    );

  }


  if (ghostClicks === 5) {

    notify(
      "the ghost is getting annoyed."
    );

  }


  if (ghostClicks === 7) {

    openModal(
      "YOU FOUND IT",
      "You clicked the ghost seven times.\n\nThere is absolutely nothing here.\n\nUnless there is."
    );

    ghostClicks = 0;

  }

});


/* =========================
   RANDOM SYSTEM MESSAGES
========================= */

const randomMessages = [

  "someone is watching this page.",

  "reply server still dead.",

  "ghost detected nearby.",

  "you've been here for too long.",

  "connection is pretending to be stable.",

  "Ghostping knows you're still here.",

  "message delivery failed successfully."

];


setInterval(() => {

  const randomMessage =
    randomMessages[
      Math.floor(
        Math.random() *
        randomMessages.length
      )
    ];


  notify(randomMessage);

}, 9000);


/* =========================
   REFRESH JOKE
========================= */

window.addEventListener(
  "beforeunload",
  () => {

    console.log(
      "%cWHY ARE YOU REFRESHING?",
      "font-size:20px;color:#8d35ff;font-weight:bold;"
    );

  }
);


/* =========================
   DEVTOOLS JOKE
========================= */

console.log(
  "%c👻 GHOSTPING NETWORK",
  "font-size:24px;font-weight:bold;color:#8d35ff;"
);

console.log(
  "%cYou weren't supposed to look in here.",
  "font-size:13px;color:#aaa;"
);