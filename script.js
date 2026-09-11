/* =========================
   ELEMENTS
========================= */

const home = document.getElementById("home");
const ghosting = document.getElementById("ghosting");
const zone = document.getElementById("zone");
const voidPage = document.getElementById("void");

const ghost = document.getElementById("ghost");

const openBtn = document.getElementById("openBtn");
const ignoreBtn = document.getElementById("ignoreBtn");

const messageText = document.getElementById("messageText");
const typing = document.getElementById("typing");
const typingText = document.getElementById("typingText");
const finalText = document.getElementById("finalText");
const zoneBtn = document.getElementById("zoneBtn");

const exitZone = document.getElementById("exitZone");

const statusBtn = document.getElementById("statusBtn");
const talkBtn = document.getElementById("talkBtn");
const loreBtn = document.getElementById("loreBtn");
const voidBtn = document.getElementById("voidBtn");

const backBtn = document.getElementById("backBtn");
const voidMessage = document.getElementById("voidMessage");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");


/* =========================
   PAGE SWITCH
========================= */

function page(pageToShow) {

  home.classList.remove("active");
  ghosting.classList.remove("active");
  zone.classList.remove("active");
  voidPage.classList.remove("active");

  pageToShow.classList.add("active");

  window.scrollTo(0, 0);
}


/* =========================
   TOAST
========================= */

let toastTimer;

function notify(text) {

  toastText.textContent = text;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {

    toast.classList.remove("show");

  }, 3200);
}


/* =========================
   MODAL
========================= */

function openModal(title, text) {

  modalTitle.textContent = title;

  modalText.textContent = text;

  modal.classList.add("show");
}

function closeTheModal() {

  modal.classList.remove("show");

}

closeModal.addEventListener("click", closeTheModal);

modal.addEventListener("click", function(event) {

  if (event.target === modal) {
    closeTheModal();
  }

});


/* =========================
   OPEN MESSAGE
========================= */

openBtn.addEventListener("click", function() {

  openBtn.disabled = true;

  openBtn.textContent = "OPENING...";

  setTimeout(function() {

    page(ghosting);

  }, 500);


  setTimeout(function() {

    messageText.textContent = "SEEN.";

  }, 900);


  setTimeout(function() {

    typing.classList.add("show");

    typingText.textContent =
      "Ghostping is typing...";

  }, 1800);


  setTimeout(function() {

    typingText.textContent =
      "Ghostping stopped typing.";

    typing.classList.remove("show");

  }, 3800);


  setTimeout(function() {

    finalText.textContent =
      "YOU'VE BEEN GHOSTED. 👻";

  }, 4600);


  setTimeout(function() {

    zoneBtn.classList.add("show");

  }, 5200);

});


/* =========================
   IGNORE
========================= */

ignoreBtn.addEventListener("click", function() {

  const responses = [

    "you really pressed ignore.",

    "Ghostping saw that.",

    "bold move.",

    "okay then.",

    "that won't save you.",

    "message status: still waiting.",

    "bro really ignored Ghostping."

  ];

  const response =
    responses[Math.floor(Math.random() * responses.length)];

  notify(response);

});


/* =========================
   GHOST ZONE
========================= */

zoneBtn.addEventListener("click", function() {

  page(zone);

  setTimeout(function() {

    notify("you actually came in.");

  }, 500);

});


/* =========================
   EXIT
========================= */

exitZone.addEventListener("click", function() {

  notify("there is no exit.");

  setTimeout(function() {

    page(home);

    openBtn.disabled = false;

    openBtn.textContent = "OPEN MESSAGE";

  }, 1700);

});


/* =========================
   STATUS
========================= */

statusBtn.addEventListener("click", function() {

  openModal(
    "YOUR STATUS",
`SIGNAL: weak

ATTENTION SPAN: 4%

GHOST TOLERANCE: 87%

CHANCE OF RECEIVING A REPLY:
statistically embarrassing.

FINAL STATUS:
YOU ARE COOKED.`
  );

});


/* =========================
   TALK
========================= */

talkBtn.addEventListener("click", function() {

  openModal(
    "TRANSMISSION",
`YOU:
hello?

GHOSTPING:
typing...

GHOSTPING:
typing...

GHOSTPING:
typing...

GHOSTPING:
stopped typing.

YOU:
???

REPLY:
NONE.

CONNECTION:
somehow still online.`
  );

});


/* =========================
   LORE
========================= */

loreBtn.addEventListener("click", function() {

  openModal(
    "FILE 00.404",
`Ghostping was never built
to reply.

It appears.

It watches.

It disappears.

Nobody knows why.

Nobody has ever received
a satisfying explanation.

FILE STATUS:
CLASSIFIED.`
  );

});


/* =========================
   VOID
========================= */

voidBtn.addEventListener("click", function() {

  page(voidPage);

  voidMessage.textContent =
    "you were warned.";

  setTimeout(function() {

    voidMessage.textContent =
      "seriously, there is nothing here.";

  }, 2200);

  setTimeout(function() {

    voidMessage.textContent =
      "why are you still looking?";

  }, 4800);

});


/* =========================
   BACK FROM VOID
========================= */

backBtn.addEventListener("click", function() {

  page(zone);

  notify("good decision.");

  setTimeout(function() {

    notify("probably.");

  }, 1800);

});


/* =========================
   GHOST SECRET
========================= */

let ghostClicks = 0;

ghost.addEventListener("click", function() {

  ghostClicks++;

  if (ghostClicks === 1) {

    notify("don't touch the ghost.");

  }

  if (ghostClicks === 3) {

    notify("seriously?");

  }

  if (ghostClicks === 5) {

    notify("THE GHOST IS ANGRY.");

  }

  if (ghostClicks === 7) {

    openModal(
      "SECRET FOUND",
`you clicked the ghost seven times.

congratulations.

you found absolutely nothing.

...

unless?

👻`
    );

    ghostClicks = 0;

  }

});


/* =========================
   RANDOM EVENTS
========================= */

const randomEvents = [

  "someone is typing...",

  "Ghostping is online.",

  "Ghostping went offline.",

  "reply server still dead.",

  "message failed successfully.",

  "you've been here for a while.",

  "the ghost noticed you.",

  "connection unstable.",

  "why are you still here?"

];

setInterval(function() {

  if (
    home.classList.contains("active") ||
    zone.classList.contains("active")
  ) {

    const random =
      randomEvents[
        Math.floor(Math.random() * randomEvents.length)
      ];

    notify(random);

  }

}, 12000);


/* =========================
   IDLE
========================= */

let idleTimer;

function resetIdle() {

  clearTimeout(idleTimer);

  idleTimer = setTimeout(function() {

    notify("you still there?");

    setTimeout(function() {

      notify("thought so.");

    }, 2800);

  }, 25000);

}

document.addEventListener("mousemove", resetIdle);
document.addEventListener("touchstart", resetIdle);
document.addEventListener("keydown", resetIdle);

resetIdle();


/* =========================
   DEVTOOLS
========================= */

console.log(
  "%c👻 GHOSTPING",
  "font-size:28px;font-weight:bold;color:#9d4cff;"
);

console.log(
  "%cYou weren't supposed to look here.",
  "font-size:13px;color:#aaa;"
);


/* =========================
   REFRESH JOKE
========================= */

window.addEventListener("beforeunload", function() {

  console.log(
    "%cWHY ARE YOU REFRESHING?",
    "font-size:22px;font-weight:bold;color:#9d4cff;"
  );

});