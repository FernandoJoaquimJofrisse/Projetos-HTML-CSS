
let btn = document.querySelector("#send")
btn.addEventListener("click", function(a){
	//travando o value do input
	a.preventDefault();
	let pt = document.querySelector("#txt1")
	let resu = document.querySelector("div#res")
	let pt2 = document.querySelector("#txt2")
	let nt1 = Number(pt.value)
	let nt2 = Number(pt2.value)

	let media = (nt1 + nt2) / 2

	if(media >= 10){
		return resu.innerHTML = "Meus PARABENS voce ADMITIU com a media " + media
	}else if(media >= 8){
		return resu.innerHTML = "REPESCADO com a media " + media
	}else{
	return resu.innerHTML = "REPROVADO com a media " + media
	}

})

