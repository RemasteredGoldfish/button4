const colors = ["green", "red", "purple", "blue", "black"];
const buttonColors = ["green", "red", "purple", "blue", "black"]; // Pas de kleuren hier aan

function changeColor(button) {
  let currentColor = button.dataset.color || 0;
  currentColor = parseInt(currentColor);

  if (currentColor < buttonColors.length - 1) {
    currentColor++;
    button.dataset.color = currentColor;
    button.style.backgroundColor = buttonColors[currentColor];
  } else {
    if (button.style.backgroundColor === "black") {
      button.remove();
    }
  }
}
