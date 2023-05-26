const caixa1 = document.querySelector("#caixa1")
const array = ["Sindi", "Iyenifer"]
const element = ["Fernando", "Arnaldo","Sandra", "Katia",array, "Mena", "Cirina", "Demol", "Joaquim"]
element.push("Elena", "Enzo")
element.sort()
element.map((ele, i)=>{
	const eleme = document.createElement("div")
	eleme.setAttribute("id", "f" + (i+1))
	eleme.setAttribute("class", "nota n"+(i +1))
	eleme.innerHTML = ele
	eleme.addEventListener("click",(evt)=>{
		caixa1.removeChild(evt.target)
	})
	caixa1.appendChild(eleme)
})












/*
const caixa = document.querySelector("#caixa1")
const nomes = ["Fernando", "Cheila", "Edna", "Carla", "Rainha", "Tereza"]

nomes.map((ele, i)=>{
	const novo = document.createElement("div")
	novo.setAttribute("id", "f"+i)
	novo.setAttribute("class", "nota")
	novo.innerHTML = ele
	caixa.appendChild(novo)
})


let eleDom = document.querySelector("#caixa1")

const novo = document.createElement("div")
const novo1 = document.createElement("div")
const novo2 = document.createElement("div")
novo.setAttribute("id", "f7")
novo1.setAttribute("id", "f8")
novo2.setAttribute("id", "f9")
novo.setAttribute("class", "n7 nota")
novo1.setAttribute("class", "n8 nota")
novo2.setAttribute("class", "n9 nota")
novo.innerHTML = "Cheila"
novo1.innerHTML = "Demol"
novo2.innerHTML = "Rainha"
eleDom.appendChild(novo)
eleDom.appendChild(novo1)
eleDom.appendChild(novo2)
*/
