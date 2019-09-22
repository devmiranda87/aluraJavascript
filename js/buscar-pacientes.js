var botaoAdicionar = document.querySelector('#adicionar-pacientes');

botaoAdicionar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientesxx');

    xhr.addEventListener('load', function(){
        var erroAjax = document.querySelector('#erro-ajax');

        if(xhr.status != 200) {
            erroAjax.classList.remove('invisivel');
            return;
        }

        erroAjax.classList.add('invisivel');
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionarPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});