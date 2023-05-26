let obt1 = {nome: "Teraza", idade: 38, bairro: "Nhamaonha"}
let t1 = ["Naidin", "Claudia", "Cleiton", "Ana", "Amelia", obt1]
let n = [2, 4, 6, 8, t1]
let n1 = ["Fernando" , "Laila", "Cheila"]
let n2 = [...n, ...n1, ...t1]
let n3 = 0
n2.sort()
console.log("Tipo das minhas variaveis é " + typeof(n))
console.log("Tipo das minhas variaveis é " + typeof(n1))
console.log("Junção de objetos n e n1 usando operador spread " + n2)
console.log("Esta na tercira posicao:  " + n2[4])
console.log(obt1)

for(let t1 = n3; n3 < n2.length; n3++){
	document.write(`O elemento <strong>${n2[n3]}</strong> esta na posicao <strong>${n3}</strong> <br/>`)
}
// for of

for(n3 of n2){
	console.log("o meu elemento: " + n3)
}