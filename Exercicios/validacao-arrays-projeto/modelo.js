let numb = document.getElementById('numb');
let lista = document.querySelector('select');
let res = document.getElementById('res');
let vet = [];

function testeNumero(n){
    if (Number(n) >= 0 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function testeRepeticao(n, vetor){
    if (vetor.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if (testeNumero(numb.value) && !testeRepeticao(numb.value, vet)){
        vet.push(Number(numb.value));
        let option = document.createElement('option');
        option.innerText = `Valor ${Number(numb.value)} adicionado!`;
        lista.appendChild(option);
        res.innerHTML = "";
        

    } else {
        window.alert('Numero repetido ou ínvalido. Tente novamente')
    }
    numb.value = "";
    numb.focus();
}

function verificar(){
    let total = vet.length;
    res.innerHTML = ` <p> Ao todo, temos ${total} números cadastrados </p>`;

    let maior = vet[0];
    let menor = vet[0];
    let soma = 0;
    
    for(let posicao in vet){
        soma += vet[posicao];
        if (vet[posicao]> maior){
            maior = vet[posicao]
        } if (vet[posicao] < menor){
            menor = vet[posicao]
        }
    }
    let media = soma/total
    res.innerHTML += ` <p> O maior valor informado foi o ${maior} </p>`;
    res.innerHTML += ` <p> O menor valor informado foi o ${menor} </p>`;
    res.innerHTML += ` <p> A soma de todos os elementos é igual a ${soma}`;
    res.innerHTML += ` <p> A média de todos os elementos é igual a ${media.toFixed(2)}`;
 
    
    
}