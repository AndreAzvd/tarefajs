let a = 18, b = 6

function mdc(a,b) {
    let maior = 0 
    for(let i=1;i<=a && i<=b;i++){
        if(a % i == 0 && b % i == 0)
            maior = i
    } 
    
    return maior
}

module.exports(maior)