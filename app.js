// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
// { name: 'olya', gender: 'female', age: 20 }
// ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках


const fs = require('fs');
const path = require('path');

const pathToManOlder20 = path.join(__dirname, 'manOlder20');
const pathToManYounger20 = path.join(__dirname, 'manYounger20');
const pathToWomanOlder20 = path.join(__dirname, 'womanOlder20');
const pathToWomanYounger20 = path.join(__dirname, 'womanYounger20');

const users = [
    {name: 'olya', gender: 'female', age: 20},
    {name: 'vasya', gender: 'male', age: 14},
    {name: 'ivan', gender: 'male', age: 33},
    {name: 'mariya', gender: 'female', age: 18},
    {name: 'ira', gender: 'female', age: 12},
    {name: 'kostya', gender: 'male', age: 30},
    {name: 'denys', gender: 'male', age: 48},
    {name: 'oleg', gender: 'male', age: 10},
    {name: 'anna', gender: 'female', age: 28},
    {name: 'nastya', gender: 'female', age: 18},
];

fs.mkdir(pathToManOlder20, (err) => {
    if (err) {
        console.log(err);
        return
    }
    fs.mkdir(pathToManYounger20, (err) => {
        if (err) {
            console.log(err);
            return
        }
        fs.mkdir(pathToWomanOlder20, (err) => {
            if (err) {
                console.log(err);
                return
            }
            fs.mkdir(pathToWomanYounger20, (err) => {
                if (err) {
                    console.log(err);
                    return
                }
                createNewFile(users)
            })
        })
    })
});

const createNewFile = (array) => {
    array.forEach((user) => {
        if (user.age > 20 && user.gender === 'male') {
            fs.writeFile(path.join(pathToManOlder20, `${user.name}.json`), JSON.stringify(user), (err) => {
                console.log(err);
            })
            return
        }
        if (user.age < 20 && user.gender === 'male') {
            fs.writeFile(path.join(pathToManYounger20, `${user.name}.json`), JSON.stringify(user), (err) => {
                console.log(err);
            })
            return;
        }
        if (user.age > 20 && user.gender === 'female') {
            fs.writeFile(path.join(pathToWomanOlder20, `${user.name}.json`), JSON.stringify(user), (err) => {
                console.log(err);
            })
            return
        }
        if (user.age < 20 && user.gender === 'female') {
            fs.writeFile(path.join(pathToWomanYounger20, `${user.name}.json`), JSON.stringify(user), (err) => {
                console.log(err);
            })
        }
    })
}

