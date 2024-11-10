const choices = {
  "0": ['IJ', 'KA'],
  "00": ['L', 'A'],
  "000": [null, null],
  "001": ['L', '+'],
  "002": ['L', '-'],
  "01": ['I','J'],
  "010": ['K','-'],
  "011": ['I','+'],
  "012": ['J','+'],
  "02": ['I','J'],
  "020": ['K','+'],
  "021": ['J','-'],
  "022": ['I','-'],
  "1": ['ABE', 'CFI'],
  "10": ['G', 'H'],
  "100": ['D', '+'],
  "101": ['H', '-'],
  "102": ['G', '-'],
  "11": ['A', 'B'],
  "110": ['F', '-'],
  "111": ['A', '+'],
  "112": ['B', '+'],
  "12": ['EC', 'IJ'],
  "120": [null, null],
  "121": ['C', '+'],
  "122": ['E', '-'],
  "2": ['ABE', 'CFI'],
  "20": ['G', 'H'],
  "200": ['D', '-'],
  "201": ['G', '+'],
  "202": ['H', '+'],
  "21": ['EC', 'IJ'],
  "210": [null, null],
  "211": ['E', '+'],
  "211": ['C', '-'],
  "212": ['C', '-'],
  "22": ['A', 'B'],
  "220": ['F', '+'],
  "221": ['B', '-'],
  "222": ['A', '-'],
}

let N = ""
let peso = {"+": "pesado", "-": "leve"}


function handleClick(n) {
  N += n
  console.log(N)
  if (N.length <= 2) {
    [leftSide.textContent, rightSide.textContent]  = choices[N]
  } else {
    document.body.innerHTML = `<h1 style="text-align: center; color: #ecf0f1;">${choices[N][0]} é mais ${peso[choices[N][1]]}</h1>`;
  }
}

const leftSide = document.getElementById('leftSide');
const rightSide = document.getElementById('rightSide');
const equalText = document.getElementById('equalText');

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
