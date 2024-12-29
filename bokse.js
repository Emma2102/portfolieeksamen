document.addEventListener("scroll", function () {
  const fadeElements = document.querySelectorAll(".klikboks");

  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      element.classList.add("visible");
    }
  });
});

document.addEventListener("scroll", function () {
  const fadeElements = document.querySelectorAll(".klikboks2");

  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      element.classList.add("visible");
    }
  });
});
