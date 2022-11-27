let lines = "234".split('');
let soma = 0;
let mult = 1

lines.forEach(item => {
    mult *= parseInt(item);
});
lines.forEach(item => {
    soma += parseInt(item);
});

console.log(mult-soma)
