document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const filterBar = document.getElementById("infoFilters");

if (filterBar) {
  const filterButtons = filterBar.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".info-card");

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const matches = filter === "alla" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !matches);
    });
  });
}
