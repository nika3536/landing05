window.onload = () => {
  const fireworks = new Fireworks.default(document.querySelector('.fireworks'), {
    opacity: 0.3,
    particles: 20,
    traceLength: 3,
    explosion: 5,
  });
  fireworks.start();
};