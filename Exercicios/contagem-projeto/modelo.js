/* [Exercicio]
function contar(){

    var step = Number(document.getElementById('step').value); 
    var start = Number(document.getElementById('start').value);
    var end = Number(document.getElementById('end').value);
    var display = document.querySelector('#res');
    
    

    
    if(start.length == 0 || end.length == 0 || step.length == 0){     //tudo ok
        window.alert('Preencha todos os campos!');
    } else if (start >= end ){
        window.alert('O ponto de partida deve ser menor que o fim!')
    } else if (step == '0') {
        window.alert('Passo 0 impossivel. Substituindo para 1...');
        step = 1;
    } else {
        while (start <= end){
            var mostrador = document.createElement('p');
            display.appendChild(mostrador).innerText = `${start},  `;
            document.querySelector('#msg').innerText= 'Tudo certo!';
            start = start + step;
        }
    }
} 
*/


//Correção:

function clicar(){
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var step = document.getElementById('step').value;
    var res = document.getElementById('res');

    res.innerHTML = "Preparando a contagem";

    /* Caso inputs vazios */
    if (start.length == 0 || end.length == 0 || step.length == 0){
        window.alert('Preencha todos os campos!');
    } 
    /* Caso passo 0 */
    else if (Number(step) <= 0){
        window.alert("Passo inválido.");
    } 
    /* Caso tudo ok */
    else {
        res.innerHTML = "Contando...";
        var s = Number(start);
        var e = Number(end);
        var p = Number(step);

        if (s < e){
            for (c = Number(start); c <= Number(end); c += Number(step)){
                res.innerHTML += `${c}➡️ `;
            }
            res.innerHTML += "🏴";
        } else if(s > e){
            for (c = Number(start); c >= Number(end); c-= Number(step)){
                res.innerHTML += `${c}➡️ `;
            }
            res.innerHTML += "🏴";
        }
    }
}