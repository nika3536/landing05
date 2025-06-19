window.onload = () => {
  const fireworks = new Fireworks.default(document.querySelector('.fireworks'), {
    opacity: 0.3,
    particles: 20,
    traceLength: 3,
    explosion: 5,
  });
  fireworks.start();
};

  function launchEmoji() {
    const emojiList = ['⚽', '🏆', '💸', '🎉', '🎯','Goal!'];
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 4000);
  }

  setInterval(launchEmoji, 500); // launch every 0.5 sec