const btn = document.querySelector("#btn")

btn.addEventListener("click", function(e){
	e.preventDefault();
	const pesq = document.querySelector("#pesq")
	const value = pesq.value
	let array = [value]
	console.log(array)

	console.log(value)
});
const btnLogin = document.querySelector(".btn_login")

btnLogin.addEventListener("click", function(login){
	login.preventDefault();

	const email = document.querySelector("#email")
	const senha = document.querySelector("#senha")

	const msg = email.value
	const password = senha.value

	console.log(`${password}`)
	let array = [password]
	console.log(array)
});


