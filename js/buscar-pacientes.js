var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if (xhr.status == 200){

            var erro = document.querySelector('#erro-ajax');
            erro.classList.add('invisivel');

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach( function(paciente) {
                adicionaPaciente(paciente); 
            });
            
        }else{

            console.log(xhr.status);
            var erro = document.querySelector('#erro-ajax');
            erro.classList.remove('invisivel');

        }

    });

    xhr.send();

});
