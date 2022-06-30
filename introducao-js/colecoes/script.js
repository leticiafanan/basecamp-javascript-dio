/*atividade utilizando MAP*/
/*
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Leticia', 'Admin');
usuarios.set('Joao', 'User');
usuarios.set('Natália', 'Admin');


console.log(getAdmins(usuarios));

*/
/*atividade utilizando SET*/

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return[...mySet];
}

console.log(valoresUnicos(meuArray));