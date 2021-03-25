let cities = []
let inp = ''

while (inp != 'stop') {
  inp = String(prompt('Enter a city. Enter \'stop\' when you wish to exit.')).toLowerCase()
  if (inp != 'stop') {
  cities.push(inp)
  } else {
    break
  }
}

let i = cities.length

while (i > -1) {
  console.log(cities[i])
  i -= 1
}