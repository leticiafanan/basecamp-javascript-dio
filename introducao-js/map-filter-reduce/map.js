// praticar a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado, e depois sem ele//

const maca ={
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
    return  item * this.value;
    }, thisArg)
}

const nums = [1, 2];

console.log('this -> maça', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));

//função sem utilizar o parâmetro this//

function mapSemThis(arr) {
    return arr.map(function(item){
    return item * 2
    });
}

const num = [2, 4, 6, 8, 10];

console.log(mapSemThis(num));

console.log(num); //valor do array inicial não foi alterado//