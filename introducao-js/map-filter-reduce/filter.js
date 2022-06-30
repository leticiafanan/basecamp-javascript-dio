// exercício para filtrar todos os números pares de um array//

function filtraPares(arr) {
    return arr.filter(callBack);
}

function callBack(item) {
    return item % 2 === 0; //filtra números pares//
   // return item % 2 !== 0; -> filtra números que não são pares//
}

const meuArray = [1, 23, 55, 67, 30, 2, 4, 7];

console.log(filtraPares(meuArray));