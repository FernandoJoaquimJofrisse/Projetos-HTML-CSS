
let send = document.querySelector("#btn")

send.addEventListener("click", function(a){
	a.preventDefault();

	let n = document.querySelector("input#num")
	let tab = document.querySelector("select#seltab")


	if(n.value.length == 0){
		alert("Campo vazio porfavor digite um número")

	}else if(n.value == 0) {
		alert("[ERRO] número inválido para gerar tabuada")
	}else{
		let numtab = Number(n.value)

		tab.innerHTML = ' '
		for(let c = 1; c <= 20; c++){
			let opt = document.createElement('option')
			opt.text = `${numtab} × ${c} = ${c * numtab}`
			opt.value = `${c}`
			tab.appendChild(opt)


		}
		console.log(numtab)
	}
})