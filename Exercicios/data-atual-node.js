var agora = new Date().getHours();
console.log(`Agora são exatamente ${agora}h`);

if ((agora <= 12)&&(agora >= 0)){
    console.log('Está de manhã')
} else if ((agora > 12)&&(agora <= 18)){
    console.log('Está de tarde')
} else if ((agora > 18)&&(agora <= 24)){
    console.log('Está de noite')
} 