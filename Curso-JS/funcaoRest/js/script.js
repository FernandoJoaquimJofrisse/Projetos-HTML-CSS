function somar(...numeros){
	let qn = numeros.length
	let res = 0

	for(let pos = 0; pos < qn; pos++){
		res += numeros[pos]
	}
	return res
}
console.log(somar(12, 8, 5, 10, 5))


function soma(...valores){
	let n = 0

	for(n1 of valores){
		n += n1
	}
	return n
}
console.log(soma(4,8))