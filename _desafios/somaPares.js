let x = 4
while (x !== 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
    if  (x % 2 == 0)
    {
        x = x+(x+2)+(x+4)+(x+6)+(x+8);
    }else {
        x+=1
        x = x+(x+2)+(x+4)+(x+6)+(x+8);
    }
//Imprima a soma:
    break
    //x = parseInt(gets());
}