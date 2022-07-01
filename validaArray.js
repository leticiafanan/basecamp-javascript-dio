function validaArray(arr, num) {

    try{
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");

    if(arr.length !== num) throw new RangeError("Tamanho inválido");
   
    return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um Reference Error!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Esse erro é um Type Error!")
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Esse erro é um Range Error!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado" + e);
        }
    }
}

console.log(validaArray([4, 6], 2));












/*Atividade: validação de erros por tipo
 - o objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função
 Caso contrário, um erro será lançado.

 - crie uma função que receba um array e um número
 - realize as seguintes validações: 
      - se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
      - se o array não for do tipo 'object', lance um erro do tipo TypeError
      - se o número não for do tipo 'number', lance um erro do tipo TypeError
      - se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
- utilize a declaração try...catch
- filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof. */