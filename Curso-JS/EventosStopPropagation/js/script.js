let elemet = [...document.querySelectorAll(".nota")]
let caixa = document.querySelector(".caixa")

caixa.addEventListener("click",(evt)=>{
	console.log("clicou")
})

elemet.map((el)=>{
	el.addEventListener("click", (evt)=>{
		evt.stopPropagation()
	})
})