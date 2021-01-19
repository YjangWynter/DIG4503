let Person = require('./Person');

class Yjang extends Person{
    constructor(name, favoriteColor){
        super(name, favoriteColor);
    }
}
let yjang = new Person('Yjang', 'green');
yjang.speak()
module.exports = Yjang;