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

  let background1Size = `auto ${bgHeight}px`;
  let background2Size = `100% auto`;

  /* Hide 2nd background if page is not the index page */
  if (window.location.pathname !== "/") {
    background1Size = `0 0`;
  }

  document
    .querySelector("body")
    .style.setProperty(
      "background-size",
      `${background1Size}, ${background2Size}`,
    );
};

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(resizeBg, 250);
});

resizeBg();
