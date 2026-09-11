/* =========================================
   GHOSTPING
   everything is slightly broken on purpose.
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const intro = document.getElementById("intro");
const ghost = document.getElementById("ghost");

const openBtn = document.getElementById("openBtn");
const ignoreBtn = document.getElementById("ignoreBtn");

const messageSection = document.getElementById("messageSection");
const giantMessage = document.getElementById("giantMessage");
const typingArea = document.getElementById("typingArea");
const typingText = document.getElementById("typingText");
const finalMessage = document.getElementById("finalMessage");
const zoneBtn = document.getElementById("zoneBtn");

const zone = document.getElementById("zone");
const leaveZone = document.getElementById("leaveZone");

const statusCard = document.getElementById("statusCard");
const talkCard = document.getElementById("talkCard");
const loreCard = document.getElementById("loreCard");
const voidCard = document.getElementById("voidCard");

const voidScreen = document.getElementById("void");
const backBtn = document.getElementById("backBtn");
const voidText = document.getElementById("voidText");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");


/* =========================================
   HELPERS
========================================= */

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function top() {
  window.scrollTo(0, 0);
}

function notify(text) {

  toastText.textContent = text;

  show(toast);

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    hide(toast);
  }, 3300);
}

function openModal(title, text) {

  modalTitle.textContent = title;
  modalBody.textContent = text;

  show(modal);
}

function closeModal() {
  hide(modal);
}


/* =========================================
   OPEN THE MESSAGE
========================================= */

openBtn.addEventListener("click", () => {

  openBtn.disabled = true;

  openBtn.textContent = "WAIT...";

  setTimeout(() => {

    hide(intro);

    show(messageSection);

    top();

  }, 700);


  setTimeout(() => {

    giantMessage.textContent = "Seen.";

    giantMessage.style.transform = "translateX(-4px)";

    setTimeout(() => {
      giantMessage.style.transform = "translateX(0)";
    }, 120);

  }, 1200);


  setTimeout(() => {

    typingText.textContent =
      "Ghostping is typing...";

    show(typingArea);

  }, 2200);


  setTimeout(() => {

    typingText.textContent =
      "Ghostping is typing...";

  }, 3400);


  setTimeout(() => {

    typingText.textContent =
      "Ghostping stopped typing.";

    hide(typingArea);

  }, 4300);


  setTimeout(() => {

    finalMessage.textContent =
      "YOU'VE BEEN GHOSTED. 👻";

  }, 5000);


  setTimeout(() => {

    show(zoneBtn);

  }, 5700);

});


/* =========================================
   IGNORE
========================================= */

ignoreBtn.addEventListener("click", () => {

  const messages = [

    "bold of you to ignore Ghostping.",

    "Ghostping saw that.",

    "okay.",

    "you'll regret that.",

    "bro really pressed ignore 😭",

    "message status: still waiting.",

    "that's not how this works."

  ];

  const random =
    messages[Math.floor(Math.random() * messages.length)];

  notify(random);

  ignoreBtn.textContent = "too late";

  setTimeout(() => {

    ignoreBtn.textContent = "ignore";

  }, 1800);

});


/* =========================================
   GHOST ZONE
========================================= */

zoneBtn.addEventListener("click", () => {

  hide(messageSection);

  show(zone);

  top();

  setTimeout(() => {

    notify("you actually came in.");

  }, 700);

});


/* =========================================
   EXIT ZONE
========================================= */

leaveZone.addEventListener("click", () => {

  notify("there is no exit.");

  setTimeout(() => {

    notify("fine. go.");

    hide(zone);

    show(intro);

    top();

  }, 1800);

});


/* =========================================
   STATUS
========================================= */

statusCard.addEventListener("click", () => {

  openModal(
    "YOUR STATUS",
`SIGNAL: weak

ATTENTION SPAN: 4%

GHOST TOLERANCE: 87%

CHANCE OF GETTING A REPLY:
statistically embarrassing.

OVERALL STATUS:
you're cooked.`
  );

});


/* =========================================
   TALK TO GHOSTPING
========================================= */

talkCard.addEventListener("click", () => {

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

CONNECTION:
somehow still online.

REPLY:
none.`
  );

});


/* =========================================
   LORE
========================================= */

loreCard.addEventListener("click", () => {

  openModal(
    "FILE 00.404",
`CLASSIFICATION:
VERY UNIMPORTANT

Ghostping was never designed
to reply.

It appears.

It watches.

It disappears.

Some say the ghost has been
online since the first unread
message.

Nobody knows why.

Nobody has ever received
a satisfying explanation.

FILE STATUS:
still not telling you.`
  );

});


/* =========================================
   VOID
========================================= */

voidCard.addEventListener("click", () => {

  hide(zone);

  show(voidScreen);

  top();

  voidText.textContent =
    "you were warned.";

  setTimeout(() => {

    voidText.textContent =
      "seriously, there is nothing here.";

  }, 2200);

  setTimeout(() => {

    voidText.textContent =
      "why are you still looking?";

  }, 4800);

});


/* =========================================
   BACK FROM VOID
========================================= */

backBtn.addEventListener("click", () => {

  hide(voidScreen);

  show(zone);

  top();

  notify("good decision.");


  setTimeout(() => {

    notify("probably.");

  }, 1800);

});


/* =========================================
   MODAL
========================================= */

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeModal();
  }

});


/* =========================================
   GHOST CLICK SECRET
========================================= */

let ghostClicks = 0;

ghost.addEventListener("click", () => {

  ghostClicks++;

  if (ghostClicks === 1) {

    notify("don't touch the ghost.");

  }

  if (ghostClicks === 2) {

    notify("i'm serious.");

  }

  if (ghostClicks === 3) {

    notify("bro.");

  }

  if (ghostClicks === 5) {

    notify("THE GHOST IS ANGRY.");

    ghost.style.transform = "scale(1.15) rotate(5deg)";

    setTimeout(() => {
      ghost.style.transform = "";
    }, 400);

  }

  if (ghostClicks === 7) {

    openModal(
      "SECRET FOUND",
`you clicked the ghost 7 times.

congratulations.

you found absolutely nothing.

...

unless?

👻`
    );

    ghostClicks = 0;

  }

});


/* =========================================
   RANDOM GHOSTPING EVENTS
========================================= */

const randomEvents = [

  "someone is typing...",

  "connection unstable.",

  "Ghostping is online.",

  "Ghostping went offline.",

  "message failed successfully.",

  "you've been here for a while.",

  "the ghost noticed you.",

  "reply server remains dead.",

  "do not refresh.",

  "why are you still here?"

];

setInterval(() => {

  if (
    !intro.classList.contains("hidden") ||
    !zone.classList.contains("hidden")
  ) {

    const event =
      randomEvents[
        Math.floor(Math.random() * randomEvents.length)
      ];

    notify(event);

  }

}, 11000);


/* =========================================
   IDLE DETECTION
========================================= */

let idleTimer;

function resetIdle() {

  clearTimeout(idleTimer);

  idleTimer = setTimeout(() => {

    notify("you still there?");

    setTimeout(() => {

      notify("thought so.");

    }, 2800);

  }, 25000);

}

document.addEventListener("mousemove", resetIdle);
document.addEventListener("touchstart", resetIdle);
document.addEventListener("keydown", resetIdle);

resetIdle();


/* =========================================
   REFRESH JOKE
========================================= */

window.addEventListener("beforeunload", () => {

  console.log(
    "%cWHY ARE YOU REFRESHING?",
    "font-size:22px;font-weight:bold;color:#9d4cff;"
  );

  console.log(
    "%cGhostping does not support patience.",
    "font-size:12px;color:#aaa;"
  );

});


/* =========================================
   DEVTOOLS
========================================= */

console.log(
  "%c👻 GHOSTPING",
  "font-size:28px;font-weight:bold;color:#9d4cff;"
);

console.log(
  "%cYou found the developer dimension.",
  "font-size:13px;color:#aaa;"
);

console.log(
  "%cThere is nothing useful here.",
  "font-size:11px;color:#666;"
);


/* =========================================
   RANDOM GLITCH
========================================= */

setInterval(() => {

  const title = document.querySelector(".intro h1");

  if (!title || intro.classList.contains("hidden")) {
    return;
  }

  title.style.transform =
    `translate(${Math.random() * 4 - 2}px, ${Math.random() * 3 - 1}px)`;

  setTimeout(() => {

    title.style.transform = "";

  }, 90);

}, 7000);