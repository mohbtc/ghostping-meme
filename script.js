const openMessage = document.getElementById("openMessage");
const messageBox = document.querySelector(".message-box");
const message = document.querySelector(".message");
const sender = document.querySelector(".sender");
const terminal = document.querySelector(".terminal");
const ghost = document.querySelector(".ghost");

openMessage.addEventListener("click", () => {
  openMessage.disabled = true;
  openMessage.textContent = "OPENING...";

  setTimeout(() => {
    message.textContent = "Seen.";
    sender.textContent = "MESSAGE STATUS";
    openMessage.style.display = "none";
  }, 900);

  setTimeout(() => {
    message.textContent = "Ghostping is typing...";
    sender.textContent = "GHOSTPING";
  }, 1900);

  setTimeout(() => {
    message.textContent = "Ghostping stopped typing.";
  }, 4000);

  setTimeout(() => {
    terminal.innerHTML = `
      <p>CONNECTION: <span>LOST</span></p>
      <p>REPLY STATUS: <span>NONE</span></p>
    `;

    messageBox.innerHTML = `
      <p class="sender">FINAL STATUS</p>
      <p class="message">YOU'VE BEEN GHOSTED. 👻</p>
    `;

    ghost.textContent = "👻";
    ghost.style.animation = "float 1s ease-in-out infinite";

  }, 5200);

  setTimeout(() => {
    const enterButton = document.createElement("button");

    enterButton.textContent = "ENTER THE GHOST ZONE →";
    enterButton.id = "enterGhostZone";

    enterButton.addEventListener("click", () => {
      document.body.innerHTML = `
        <main style="
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:24px;
          background:#05020a;
          color:white;
          font-family:'Space Mono',monospace;
          text-align:center;
        ">
          <div>
            <div style="font-size:70px;margin-bottom:20px;">👻</div>
            <p style="
              color:#b77cff;
              letter-spacing:4px;
              font-size:12px;
              margin-bottom:20px;
            ">
              GHOSTPING.EXE
            </p>
            <h1 style="font-size:32px;margin-bottom:14px;">
              WELCOME TO THE GHOST ZONE
            </h1>
            <p style="color:#85808f;">
              Something is loading...
            </p>
          </div>
        </main>
      `;
    });

    openMessage.parentElement.appendChild(enterButton);
  }, 5700);
});
