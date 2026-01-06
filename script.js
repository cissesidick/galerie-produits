// ---------- TOGGLE MODE CLAIR / SOMBRE ----------
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode clair"
    : "🌙 Mode sombre";
});

// ---------- ANIMATION D'APPARITION ----------
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add("show");
  }, index * 200);
});
