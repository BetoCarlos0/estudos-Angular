let N = 12

//let n = 1 + 8*N; 

function somaMult(a, n, count) {
    if ((a+count)> n) return --count
    console.log(a," ",count," ", a+count)
    return somaMult(a+count, n, count+1)
}

console.log(somaMult(0, N, 1))