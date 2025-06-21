// window.onload = () => {
//   const fireworks = new Fireworks.default(document.querySelector('.fireworks'), {
//     opacity: 0.3,
//     particles: 20,
//     traceLength: 3,
//     explosion: 5,
//   });
//   fireworks.start();
// };

//   function launchEmoji() {
//     const emojiList = ['⚽', '🏆', '💸', '🎉', '🎯','Goal!'];
//     const emoji = document.createElement('div');
//     emoji.className = 'emoji';
//     emoji.style.left = Math.random() * 100 + 'vw';
//     emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
//     document.body.appendChild(emoji);
//     setTimeout(() => emoji.remove(), 4000);
//   }

//   setInterval(launchEmoji, 500);


document.querySelectorAll('.social-icon').forEach(el => {
  el.addEventListener('click', e => {
    const circle = document.createElement('span');
    circle.className = 'ripple';
    const rect = el.getBoundingClientRect();
    circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + 'px';
    circle.style.left = e.clientX - rect.left - rect.width/2 + 'px';
    circle.style.top = e.clientY - rect.top - rect.height/2 + 'px';
    el.append(circle);
    circle.addEventListener('animationend', () => circle.remove());
  });
});
