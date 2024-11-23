// Add interactivity if needed
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Loaded Successfully");
});

document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
