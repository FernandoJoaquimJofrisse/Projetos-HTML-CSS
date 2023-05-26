//Função com retorno

function soma(n=0, n1=0){
	let res = n + n1
	return res
}

let resu = soma(10, 5)
document.write("A soma vale " + resu, "<br/>")
//function in return
let valor = 0
function somar(t=valor, t1=valor){
	return t + t1
}
document.write("Segund Funcoa " + somar(3, 3))
