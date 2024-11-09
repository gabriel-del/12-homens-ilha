const leftSide = document.getElementById('leftSide');
const rightSide = document.getElementById('rightSide');
const equalText = document.getElementById('equalText');
let clickCount = 0;

// Function to handle click events and change numbers
function handleClick(side) {
  clickCount++;

  console.log(side)

  // Generate random numbers between 10 and 99
  const newLeftNumber = Math.floor(Math.random() * 90) + 10;
  const newRightNumber = Math.floor(Math.random() * 90) + 10;

  // Set the new values
  leftSide.textContent = newLeftNumber;
  rightSide.textContent = newRightNumber;

  // After the third click, display the final message
  if (clickCount === 3) {
    const biggerNumber = Math.max(newLeftNumber, newRightNumber);
    document.body.innerHTML = `<h1 style="text-align: center; color: #ecf0f1;">The bigger number is: ${biggerNumber}</h1>`;
  }
}

// Tilt animations
function tiltLeft() {
  leftSide.style.transform = 'translateY(10px)';
  rightSide.style.transform = 'translateY(-10px)';
  leftSide.style.fontSize = '2.5em';
  rightSide.style.fontSize = '1.5em';
  equalText.style.fontSize = '1.3em';
}

function tiltRight() {
  leftSide.style.transform = 'translateY(-10px)';
  rightSide.style.transform = 'translateY(10px)';
  rightSide.style.fontSize = '2.5em';
  leftSide.style.fontSize = '1.5em';
  equalText.style.fontSize = '1.3em';
}

function resetTilt() {
  leftSide.style.transform = 'translateY(0)';
  rightSide.style.transform = 'translateY(0)';
  leftSide.style.fontSize = '2em';
  rightSide.style.fontSize = '2em';
  equalText.style.fontSize = '1.5em';
}

// Event listeners for tilt effect
leftSide.addEventListener('mouseenter', tiltLeft);
leftSide.addEventListener('mouseleave', resetTilt);
rightSide.addEventListener('mouseenter', tiltRight);
rightSide.addEventListener('mouseleave', resetTilt);
