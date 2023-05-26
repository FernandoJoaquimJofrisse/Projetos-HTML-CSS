const f = (v1, v2)=>{return v1 + v2}
const nome = n => {return n}
const add = n => n + n
const f1 = (...valores)=>{
	//let vl = valores.length
	let res = 0
	for(n of valores){
		res += n
	}
	return res
}


console.log(f(10, 5))
console.log(nome("Fernando"))
console.log(add(10))
console.log(f1(2, 3, 5, 10, 20, 50, 8,2))