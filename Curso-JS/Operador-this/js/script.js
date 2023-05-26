
function aluno_dados(nome, idade, anos, class){
	this.nome = nome
	this.idade = idade
	this.anos = anos
	this.class = class

	this.dados = function(){
		setTimeout(()=>{
			console.log(this.nome)
			console.log(this.idade)
			console.log(this.anos)
			console.log(this.class)
		},2000)
	}
}
const alunos = new aluno_dados("Fernando", 23, 26, "classy")
alunos.dados()

/*
function dados(name, idade, nota){
	this.name = name
	this.idade = idade
	this.nota = nota

	this.dados_aluno = function(){
		setTimeout(()=>{
			console.log(this.name)
			console.log(this.idade)
			console.log(this.nota)
		},2000)
	}
}
const aluno1 = new dados("Fernando",20, 13)
aluno1.dados_aluno()

function student(name, apelido, nota){
	this.name = name
	this.apelido = apelido
	this.nota = nota

	this.dadostude = function(){
		setTimeout(()=>{
			console.log(this.name)
			console.log(this.apelido)
			console.log(this.nota)
		},2000)
	}
}
const student1 = new student("Fernando", "Jofrisse",10)
student1.dadostude()

function aluno(nome, nota){
	this.nome = nome
	this.nota = nota

	this.dados = function(){
		setTimeout(()=>{
			console.log(this.nome)
			console.log(this.nota)
		},2000)
	}
}
const aluno1 = new aluno("Fernando", 10)
aluno1.dados()
*/
