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

  const applyFilter = (filter) => {
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    cards.forEach((card) => {
      const matches = filter === "alla" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !matches);
    });
  };

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    const isActive = button.classList.contains("active");
    applyFilter(isActive ? "alla" : button.dataset.filter);
  });

  const hashFilter = decodeURIComponent(window.location.hash.slice(1));
  const hasMatchingButton = Array.from(filterButtons).some(
    (btn) => btn.dataset.filter === hashFilter
  );

  if (hasMatchingButton) {
    applyFilter(hashFilter);
  }
}
