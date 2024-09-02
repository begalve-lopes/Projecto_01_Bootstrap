let nomePiloto=prompt("Digite o nome do piloto?:")
let nave=0
newNave=prompt('digite a velocidade da nave:')
let confimarNave=confirm(`${nomePiloto} estás a ir na velocidade ${newNave} km/s`)
b
if(confimarNave){
    nave=newNave
}

if(nave<=0){
    alert("a na ve está parada")
}else if(nave<40){
    alert("estamos a andar devagar")
}else if(nave<80){
    alert("parece uma boa velocidade")
}else if(nave<100){
    alert("velocidade alta")
}else{
    alert("não esxite")
}
