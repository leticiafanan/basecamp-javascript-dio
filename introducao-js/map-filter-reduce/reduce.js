//exercício para somar os números de um array//

   /* function somaNumeros(arr) {
        return arr.reduce(function (prev, current) {
         console.log({ prev });
            console.log({ current });
            return prev + current;
        })
    }

    const arr = [1, 2, 10, 4, 5, 6];

    console.log(somaNumeros(arr)); */


//exercício para criar uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcular qual será o saldo final após subtrair todos os preços da lista enviada.//

const lista = [
    {
    name: 'sabao em po',
    preco: 30,
    },
    {
    name: 'cereal',
    preco: 12,
    },  
    {
    name: 'toalha',
    preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));