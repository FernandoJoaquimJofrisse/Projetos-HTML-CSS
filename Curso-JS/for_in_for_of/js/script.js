
let array = ["Fernando", "Tereza", "Rainha"]
array.push("Lemone", "Elio", "Loide")
document.write(array)

document.write("<p>Loop</p>")

for(let n = 0; n < array.length; n++){
	document.write(`<h2> nome: ${array[n]} esta na posição ${n}</h2><br/>`)
}
document.write(`<h2>meu array tem ${array.length} posições</h2></br>`)

//.............................................................................................

let arra = [2, 4, 6, 8, 1, 3, 5, 7, 9]

for(n of arra){
	document.write(`Os elementos são ${n} <br/>`)
}