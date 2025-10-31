const editedimage = document.querySelector("#editedimage");

const buttonsdiv = document.querySelector(".buttonsdiv");

const gradient1button = buttonsdiv.querySelector("#gradient1button");
const gradient2button = buttonsdiv.querySelector("#gradient2button");
const gradient3button = buttonsdiv.querySelector("#gradient3button");

const applyGradient = (newClass) => {
  editedimage.className = ""; // clear all previous gradients
  editedimage.classList.add(newClass); // apply the new one
};

gradient1button.addEventListener("click", () => {
  console.log("trying gradient 1");
  applyGradient("gradient1class");
});
gradient2button.addEventListener("click", () => {
  console.log("trying gradient 2");
  applyGradient("gradient2class");
});

gradient3button.addEventListener("click", () => {
  console.log("trying gradient 3");
  applyGradient("gradient3class");
});
