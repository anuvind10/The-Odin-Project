function attachListeners() {
  const arrows = document.querySelectorAll(".nav-arrow");
  const bottomNavs = document.querySelectorAll(".nav");

  arrows.forEach((arrows) => {
    arrows.addEventListener("click", (event) => {
      changeImage(event.target);
    });
  });

  bottomNavs.forEach((nav) => {
    nav.addEventListener("click", (event) => {
      changeImage(event.target);
    });
  });
}

function changeImage(element = "") {
  const currentActiveImage = document.querySelector(".activeImage");
  const currentActiveNav = document.querySelector(".activeNav");
  currentActiveImage.classList.remove("activeImage");
  currentActiveNav.classList.remove("activeNav");
  currentActiveNav.src = "./images/dot.png";
  let activeID;
  let newActiveImage;
  let newActiveNav;

  if (
    element === "" ||
    element.closest("div").classList.contains("nav-arrow")
  ) {
    activeID = parseInt(currentActiveImage.id.split("-")[1]);
  } else if (element.closest("div").id === "bottom-nav") {
    activeID = parseInt(currentActiveNav.id.split("-")[1]);
  } else {
    return;
  }
  //   if arrows are clicked, get the new id accordingly
  if (element === "" || element.closest("div").id === "right-arrow") {
    if (activeID === 2) {
      activeID = 0;
    } else {
      activeID += 1;
    }
  } else if (element.closest("div").id === "left-arrow") {
    if (activeID === 0) {
      activeID = 2;
    } else {
      activeID -= 1;
    }
  }
  //   else get the id of the nav button clicked
  else {
    activeID = element.closest(".nav").id.split("-")[1];
  }
  newActiveImage = document.querySelector(`#img-${activeID}`);
  newActiveNav = document.querySelector(`#nav-${activeID}`);
  newActiveNav = document.querySelector(`#nav-${activeID}`);
  newActiveImage = document.querySelector(`#img-${activeID}`);

  newActiveImage.classList.add("activeImage");
  newActiveNav.classList.add("activeNav");
  newActiveNav.src = "./images/dot_filled.png";

  setTimeout(() => {
    changeImage();
  }, 5000);
}

setTimeout(() => {
  changeImage();
}, 5000);

document.addEventListener("DOMContentLoaded", attachListeners);
