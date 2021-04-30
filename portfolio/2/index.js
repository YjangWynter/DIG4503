const axios = require('axios');
const cowsay = require('cowsay');
const chalk = require('chalk');
//advice API
const url = 'https://api.adviceslip.com/advice';
//async because need to wait for random answer from API
async function getAdvice(advice){
    //immediately return fetch request
    return await axios(advice).then((response)=>{
        //print to the console with the format() function
        console.log(format(
            //cowsay module which prints text
            cowsay.say(
                //slip.advice is the point where the advice text returns
                {text: response.data.slip.advice}
            )
        ));
        //if there is an error print to the console    
    }).catch((error)=> console.log(`Error ${error}`));
}
//runs Promise
console.log(getAdvice(url));

//formats the advice 
 function format(advice){
    let text = chalk.italic.yellow(advice);
    return text;
}


 