const elementosDom = [...document.querySelectorAll(".nota")]
console.log(elementosDom)

elementosDom.map((elt)=>{
	elt.addEventListener("click", (event)=>{
		const elt = event.target
		elt.classList.add("destaqui")

		console.log(`${elt.id} foi clicado`)
		console.log(`${elt.innerHTML} foi clicado`)
	})
})








/*
const ele = [...document.querySelectorAll(".nota")]
ele.map((el)=>{
	el.addEventListener("click",(evento)=>{
		const el = evento.target
		el.classList.add("destaqui")
		console.log(el.id +" foi clicado")
		console.log(el.innerHTML +" foi clicado")
	})
console.log(val)



let elementos = document.querySelectorAll("div.nota")[2]
    elementos.innerHTML = "EDNA"

const msg = ()=>{
	alert("clicou")
}


const msg = ()=>{
	alert("Clicou")
}
elementos.addEventListener("click", msg)
*/