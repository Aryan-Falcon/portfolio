
const typedText = document.getElementById("typed-text");
if (typedText) {
  const phrases = [
    "High School Student",
    "Aspiring Software Developer",
    "Competitive Programmer",
    "AI Enthusiast"
  ];
  let i = 0, j = 0, deleting = false;

  function type() {
    const current = phrases[i];
    if (!deleting && j <= current.length) {
      typedText.textContent = current.substring(0, j++);
    } else if (deleting && j >= 0) {
      typedText.textContent = current.substring(0, j--);
    }

    if (j === current.length + 5) deleting = true;
    else if (j === 0 && deleting) {
      deleting = false;
      i = (i + 1) % phrases.length;
    }

    setTimeout(type, deleting ? 60 : 100);
  }
  type();
}


const fills = document.querySelectorAll(".fill");
if (fills.length > 0) {
  window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;
    fills.forEach(fill => {
      const rect = fill.getBoundingClientRect().top;
      if (rect < trigger && fill.style.width === "0px") {
        fill.style.width = fill.dataset.percent + "%";
      }
    });
  });
}

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const darkMode = document.body.classList.contains("dark");
    themeToggle.textContent = darkMode ? "☀️" : "🌙";
    localStorage.setItem("darkMode", darkMode);
  });

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
}
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight * 0.85;

  faders.forEach(el => {
    const rectTop = el.getBoundingClientRect().top;
    if (rectTop < triggerPoint) {
      el.classList.add('visible');
    }
  });
});
