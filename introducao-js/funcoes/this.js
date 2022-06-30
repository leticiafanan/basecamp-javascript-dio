function calculeIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}

const pessoa2 = {
    nome: 'Juliana',
    idade: 45
}

const animal = {
    nome: 'Cacau',
    idade: 5,
    raca: 'Duschound'
}

console.log(calculeIdade.apply(pessoa1, [5]));
