let userArray = []
let inp = true

while (true) {
  inp = String(prompt())
  if(inp == true) {
     userArray.push(inp)
   } else {
     break
    }
   console.log(Boolean(inp))
}

console.log(userArray)
