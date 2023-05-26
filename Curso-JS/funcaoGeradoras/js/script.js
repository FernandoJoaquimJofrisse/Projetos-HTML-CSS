/*u
function* cores(){
	yield 'Vermelho'
	yield 'Verde'
	yield 'Azul'
}
const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
*/
function* perguntas(){
	const nome = yield 'Qual é o seu nome?'
	const esporte = yield 'Qual é o seu esporte favorito?'
	return "Meu nome é, " + nome + " ,meu esporte favorito é, " + esporte
}
const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next("Ferando").value)
console.log(itp.next("Carate").value)




function * pergunta(){

}