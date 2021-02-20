const scream = (text) => text.toUpperCase();

function whisper(text){
    text = text.toLowerCase();
    return text;
}

console.log(scream('Yjang!!!!'))
console.log(whisper('Wynter...'))

let hobbies = [false, true, 'video games', 'anime', 'reading news'];
let [isLiterate, canCook, ...nerdCrap] = hobbies;
console.log(isLiterate);
console.log(canCook);
console.log(nerdCrap)