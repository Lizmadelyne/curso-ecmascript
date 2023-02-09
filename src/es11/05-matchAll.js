const reg =/\b(etc)+\b/g;

const fruit = 'Apple, Banana, Apple, cherry, watermelon etc, etc, etc' 

for (const match of fruit.matchAll(reg)){
    console.log(match);
}

//
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";

const capturingRegex = /(?<animal>dog|fox) jumps over/;
const found = paragraph.match(capturingRegex);
console.log(found.groups);

//
const clothes = "The girl use blouse, shirt, t-shirt and boots.";

const captureClothes = /(?<top>bluse|shirt) /;
const find = clothes.match(captureClothes);
console.log(find.groups);