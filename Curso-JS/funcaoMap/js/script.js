
		//Ex003
let dg = document.querySelectorAll("div.prime")
let val = Array.prototype.map.call(dg,({innerHTML})=> innerHTML)
console.log(val)

let conv = (e)=>parseInt(e)
let num = ['1', '2', '3', '4'].map(conv)
console.log(num)





/*
let ele = document.querySelectorAll("div.prime")
const val = Array.prototype.map.call(ele,({innerHTML})=> innerHTML)
console.log(val)


let ele = document.querySelectorAll(".prime")
ele = [...ele]
console.log(ele)
ele.map((el, i)=>{
	console.log(el.innerHTML)
})

let n1 = [2, 4, 6, 8, 9]
n1.map((elemento,iteracao)=>{
	console.log("elemento " +elemento+ " esta na posição " +iteracao)
})

const n = ["Fernando", "Joaquim", "Jofrisse", "Edna", "Cheila"]
	n.map((elemento, indice) =>{
		console.log(`O meu elemento ${elemento} está na posição ${indice}`)
	})
*/
