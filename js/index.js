function ponto(){
    let login, senha;

    login = document.getElementById("login");
    senha = document.getElementById("senha");

    let quantidade_pontos = 0;
    if(quantidade_pontos <= 4){
        if((login.value != "" && senha.value != "") ){ 
            if(login.value == "teste" && senha.value == "12345"){            
                window.location.assign("paginas/principal.html");
            }else{
                
                alert("Ponto de "+login.value + " marcado com sucesso!");
                console.log(login.value);
                login.value = "";
                console.log(login.value);
                senha.value = "";       
                quantidade_pontos++;

            }
        }
    } else{
        alert("Todas as marcações foram realizadas");
    }
    
    console.log(quantidade_pontos);
}

function alterarTipo(){
    let tipo = document.getElementById("usarioComum");    
    tipo.innerHTML = "Administrador"   ;
}
