
let f = function(t1, t2){
	return t1 + t2
}

let n = function(...valores){
	let res = 0

	for(n1 of valores){
		res += n1
	}
	return res
}
document.write("A soma vale sem loop: ", + f(5, 12), "<br/>")

document.write("Funcao loop: vale: ", + n(2, 4))