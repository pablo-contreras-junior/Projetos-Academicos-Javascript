var r1 = 1;
var r2 = 1;

while (r1 <= 10){
    while(r2 <= 10){
        console.log(`${r1} x ${r2} = ${r1*r2}`);
        r2++
    }
    r2 = 1;
    r1++;
    console.log();
}

do {
    do{
        console.log(`${r1} x ${r2} = ${r1*r2}`)
        r2++
    } while(r2 <= 10)
    r2 = 0;
    r1++;
    console.log();
}while(r1 <= 10)

/*
for (r1 =1; r1<=100; r1++){
    for (r2 = 1; r2 <= 10; r2++){
        console.log(`${r1} x ${r2} = ${r1*r2}`);
    }
    r2 = 0;
    console.log();
}
*/