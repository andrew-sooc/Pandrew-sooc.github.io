
function showSurprise() {
  const surprise = document.getElementById("surprise");

  surprise.classList.toggle("hidden");

  if (!surprise.classList.contains("hidden")) {
    surprise.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    createHearts(15);
  }
}

function revealMessage() {
  const message = document.getElementById("extraMessage");

  message.classList.toggle("hidden");

  if (!message.classList.contains("hidden")) {
    createHearts(12);
  }
}

function sendLove() {
  const message = document.getElementById("loveMessage");

  message.textContent =
    "Sending you a thousand virtual hugs and hearts, Babyy! 💗💖🌷";

  createHearts(35);
}

function createHearts(amount = 15) {
  const container = document.getElementById("hearts");

  const emojis = ["💗", "💕", "💖", "💘", "🌸", "✨"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.animationDuration = (2.5 + Math.random() * 2) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
