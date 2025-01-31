let timeout = undefined;

const resizeBg = () => {
  const firstTwoSectionsHeight = Array.from(
    document.querySelectorAll("section"),
  )
    .slice(0, 2)
    .map((section) => section.getBoundingClientRect().height)
    .reduce((a, b) => a + b);

  const headerMenuHeight = document
    .querySelector(".shopify-section-group-header-group")
    .getBoundingClientRect().height;

  const bgHeight = firstTwoSectionsHeight + headerMenuHeight;
  document
    .querySelector("body")
    .style.setProperty("background-size", `auto ${bgHeight}px, 100% auto`);
};

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(resizeBg, 250);
});

resizeBg();
