soma(1000);
 function soma(limite){
    let m5 = 0;
    let m7 = 0;
    for(i =0;i <= limite;i++){
        if(i % 5 === 0)
            m5 += i;
        if(i % 7 === 0)
            m7 += i;
    }
    return(m5 + m7);
 }