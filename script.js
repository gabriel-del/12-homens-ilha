const choices = {
  '0': ['IJ', 'KA'],
  '00': ['L', 'A'],
  '000': [null, null],
  '001': ['L', '+'],
  '002': ['L', '-'],
  '01': ['I', 'J'],
  '010': ['K', '-'],
  '011': ['I', '+'],
  '012': ['J', '+'],
  '02': ['I', 'J'],
  '020': ['K', '+'],
  '021': ['J', '-'],
  '022': ['I', '-'],
  '1': ['ABE', 'CFI'],
  '10': ['G', 'H'],
  '100': ['D', '+'],
  '101': ['H', '-'],
  '102': ['G', '-'],
  '11': ['A', 'B'],
  '110': ['F', '-'],
  '111': ['A', '+'],
  '112': ['B', '+'],
  '12': ['EC', 'IJ'],
  '120': [null, null],
  '121': ['C', '+'],
  '122': ['E', '-'],
  '2': ['ABE', 'CFI'],
  '20': ['G', 'H'],
  '200': ['D', '-'],
  '201': ['G', '+'],
  '202': ['H', '+'],
  '21': ['EC', 'IJ'],
  '210': [null, null],
  '211': ['E', '+'],
  '212': ['C', '-'],
  '22': ['A', 'B'],
  '220': ['F', '+'],
  '221': ['B', '-'],
  '222': ['A', '-']
}

const left = document.querySelector('section div:nth-child(1)')
const equal = document.querySelector('section div:nth-child(2)')
const right = document.querySelector('section div:nth-child(3)')

let N = ''
const peso = {'+': 'pesado', '-': 'leve'}

function handleClick(n) {
  N += n
  if (N.length <= 2) [left.textContent, right.textContent] = choices[N]
  else document.body.innerHTML = `<h1 style="text-align: center">${choices[N][0]} é mais ${peso[choices[N][1]]}</h1>`
}

equal.addEventListener('click', () => handleClick(0))
left.addEventListener('click', () => handleClick(1))
right.addEventListener('click', () => handleClick(2))

left.addEventListener('mouseenter', () => {
  left.style.transform = 'translateY(10px)'
  right.style.transform = 'translateY(-10px)'
  left.style.fontSize = '2.5em'
  right.style.fontSize = '1.5em'
  equal.style.fontSize = '1.3em'
})
right.addEventListener('mouseenter', () => {
  left.style.transform = 'translateY(-10px)'
  right.style.transform = 'translateY(10px)'
  right.style.fontSize = '2.5em'
  left.style.fontSize = '1.5em'
  equal.style.fontSize = '1.3em'
})
left.addEventListener('mouseleave', reset)
right.addEventListener('mouseleave', reset)
function reset() {
  left.style.transform = 'translateY(0)'
  right.style.transform = 'translateY(0)'
  left.style.fontSize = '2em'
  right.style.fontSize = '2em'
  equal.style.fontSize = '1.5em'
}
