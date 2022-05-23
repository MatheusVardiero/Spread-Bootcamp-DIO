// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: 'Matheus',
  idade: 30,
};

const pessoa2 = {
  nome: 'Magal',
  idade: 70,
};

const animal = {
  nome: 'Thor',
  idade: 3,
  raca: 'Shitzu',
};

//Utilizando o metodo call
console.log(calculaIdade.call(pessoa1, 30))

//Utilizando o metodo apply
console.log(calculaIdade.apply(pessoa1, [30]))
