//operador lógico [parte 1]:

let spaceship="elemental"
let velocidade=20
//And (&&):
console.log(spaceship.length==9 && velocidade>15)
console.log(velocidade>9 && velocidade<19)
console.log(velocidade<17 && spaceship=="elemental")
console.log(spaceship=="golias" && velocidade>21)

//ou (||):
console.log(spaceship.length==9 || velocidade>15)
console.log(velocidade>9 || velocidade<19)
console.log(velocidade<17 || spaceship=="elemental")
console.log(spaceship=="golias" || velocidade>21)

//not (!):
console.log(!(velocidade=20))
console.log(!(spaceship="golias"))

//exercicios 

console.log(!(velocidade>20 && spaceship=="elementar")||(velocidade-3==17 && spaceship.length+1>15))