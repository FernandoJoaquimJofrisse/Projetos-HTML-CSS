const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#copi-btn")
const nomes = [...document.querySelectorAll(".nota")]

nomes.map((ele)=>{
	ele.addEventListener("click", (event)=>{
		const name = event.target
		name.classList.toggle("selecionado")
		console.log(name)
	})
})
btn.addEventListener("click",()=>{
	const nomeSelecionado = [...document.querySelectorAll(".selecionado")]
	nomeSelecionado.map((el)=>{
		caixa2.appendChild(el)
	})
	const nomeNaoSelecionado = [...document.querySelectorAll(".nota:not(.selecionado)")]
	nomeNaoSelecionado.map((elNao)=>{
		caixa1.appendChild(elNao)
	})

})
