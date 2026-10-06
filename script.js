document.getElementById("year").textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const toggleScrolled = () => siteHeader.classList.toggle("scrolled", window.scrollY > 8);
  toggleScrolled();
  window.addEventListener("scroll", toggleScrolled, { passive: true });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll(
  ".hero-kicker, .hero h1, .hero-sub, .hero-actions, .home-services-intro, .cta h1, .cta h2, .cta p, .cta-contact, .info-card, .service-card, .article-banner .breadcrumb, .article-banner h1, .article-banner .lead"
);

if (revealTargets.length && !prefersReducedMotion && "IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}

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
