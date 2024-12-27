function load(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var hora = new Date().getHours(); 
    msg.innerHTML=`Agora são ${hora}h`;
    

    if(hora < 12 && hora > 0){
        img.style.backgroundImage = "url('img/manha.jpg')";
        document.body.style.backgroundColor = "#FFCE48";
        
    } else if (hora >= 12 && hora < 18){
        img.style.backgroundImage = "url('img/tarde.jpg')";
        img.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = "#39628A";
        
    } else {
        img.style.backgroundImage = "url('img/noite.jpg')";
        img.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = "#0A4163";
    }
}

function clicar(){
    var hora = new Date().getHours(); 
    
    
        if (hora < 12 && hora > 0){
        document.body.style.backgroundImage = "url('img/manha.jpg')";
        document.body.style.backdropFilter = "blur(12px)";
        } 
    else if(hora >= 12 && hora < 18){
        document.body.style.backgroundImage = "url('img/tarde.jpg')";
        document.body.style.backdropFilter = "blur(12px)";
        } 
    else{
        document.body.style.backgroundImage = "url('img/noite.jpg')";
        document.body.style.backdropFilter = "blur(12px)";
        }
}
