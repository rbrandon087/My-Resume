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

function animateName() {
  nameEl.innerHTML = ''; // Clear the name element before starting the animation
  typeWriter(nameText, 0, () => {
    // Animation complete
  });
}

// Call the animateName function every 5000ms (5 seconds)
setInterval(animateName, 5000);

