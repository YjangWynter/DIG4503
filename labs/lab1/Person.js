const chalk = require('chalk');
class Person {
    constructor(name, color) {
        this.name = name;
        this.favoriteColor = color;
    }
    speak() {
        const colored = chalk.keyword(this.favoriteColor)
        console.log(colored(this.name));
    }
}
module.exports = Person;