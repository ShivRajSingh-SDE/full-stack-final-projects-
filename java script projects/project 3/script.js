

let isFunOn = false;

const fun = () => {
  const nav = document.querySelector(".navigation ul");

  if (isFunOn) {
    nav.style.left = "-100%";
    isFunOn = false;
  } else {
    nav.style.left = "110%";
    isFunOn = true;
  }
}

