const idade = [12, 14, 9, 7, 4, 22, 25, 56, 65, 75]
const maior = idade.filter((valor, indice, array)=>{
	if(valor >= 18)
		return valor
})
const menor = idade.filter((valor, indice, array)=>{
	if(valor < 18)
		return valor
})
console.log(idade)
console.log(maior)
console.log(menor)