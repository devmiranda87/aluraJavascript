var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
    var textoFiltro = this.value;

    var pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(function(paciente) {
        var tdNome = paciente.querySelector('.info-nome');
        var nome = tdNome.textContent;

        if (nome != textoFiltro) {
            paciente.classList.add('invisivel');
            return;
        }

        paciente.classList.remove('invisivel');
    });
});