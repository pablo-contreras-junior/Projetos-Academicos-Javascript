function clicar(){
    var display = document.getElementById('res');
    var r1 = Number(document.getElementById('r1').value);
    var r2 = 1;
    display.innerText = "";

     while(r2 <= 10){
        var option = document.createElement('option');
        display.appendChild(option);
        option.innerText = `${r1} x ${r2} = ${r1*r2}`;
        r2++
     }
}