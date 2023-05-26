/*
const soma = (...valores)=>{
	const somar = val =>{
		let res = 0

		for(v of val)
			res += v
		return res
	}
	return somar(valores)

}
*/
const somar = val =>{
		let res = 0

		for(v of val)
			res += v
		return res
}

const soma = (...valores)=>{return somar(valores)}


console.log(soma(10, 5, 25))
valor = [2, 3, 10]
console.log(somar(valor))