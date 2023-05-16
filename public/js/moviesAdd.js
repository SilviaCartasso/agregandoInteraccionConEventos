window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitulo = document.querySelector('input#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", function(){
        titulo.style.color = "red";
    });
    titulo.addEventListener("mouseout", function(){
        titulo.style.color = "black";
    });

    let estadoSecreto = 0;
    inputTitulo.addEventListener("keypress", function (e){
        if(e.key === "s" && estadoSecreto == 0){
            estadoSecreto = 1;
        } else if(e.key === "e" && estadoSecreto == 1){
            estadoSecreto = 2;
        }else if(e.key === "c" && estadoSecreto == 2){
            estadoSecreto = 3;
        }else if(e.key === "r" && estadoSecreto == 3){
            estadoSecreto = 4;
        }else if(e.key === "e" && estadoSecreto == 4){
            estadoSecreto = 5;
        }else if(e.key === "t" && estadoSecreto == 5){
            estadoSecreto = 6;
        }else if(e.key === "o" && estadoSecreto == 6){
            alert("SECRETO MÁGICO");
            estadoSecreto = 0;
        } else {
            estadoSecreto = 0;
        }
    });

}