let timeout = undefined;

const resizeBg = () => {
  const isMobile = window.innerWidth <= 425;
  const firstTwoSectionsHeight = Array.from(
    document.querySelectorAll("section"),
  )
    .slice(0, 2)
    .map((section) => section.getBoundingClientRect().height)
    .reduce((a, b) => a + b);

  const headerMenuHeight = document
    .querySelector(".shopify-section-group-header-group")
    .getBoundingClientRect().height;

  const bodyHeight = document
    .querySelector("body")
    .getBoundingClientRect().height;

  const bgHeight = firstTwoSectionsHeight + headerMenuHeight;

  // Only display hero background if page is the index page
  if (window.location.pathname === "/") {
    const heroBgImg = document.querySelector(".hero-bg img");
    heroBgImg.style.setProperty("height", `${bgHeight}px`);

    document.querySelector(".hero-bg").style.setProperty("display", "block");
  }

  // Set the height of the bg-texture to the height of the body
  // so that the texture covers the whole page background
  if (isMobile) {
    document.querySelector(".bg-texture").style.setProperty("height", `100%`);
  } else {
    document
      .querySelector(".bg-texture")
      .style.setProperty("height", `${bodyHeight}px`);
  }

  // Hide bg-texture on rutas pages because they have their own background
  if (
    [
      "/pages/ruta-el-hacha",
      "/pages/ruta-la-alacena",
      "/pages/ruta-san-luis",
    ].includes(window.location.pathname)
  ) {
    document.querySelector(".bg-texture").style.setProperty("display", "none");
  }
};

window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(resizeBg, 250);
});

resizeBg();
