const nameEl = document.querySelector('#name');
const nameText = "Hi, my name is Brandon";

function typeWriter(text, i, callback) {
  if (i < text.length) {
    nameEl.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1, callback), 50);
  } else {
    callback();
  }
}

typeWriter(nameText, 0, () => {
  // Animation complete
});
