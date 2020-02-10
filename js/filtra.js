var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
    var textoFiltro = this.value;
    var pacientes = document.querySelectorAll('.paciente');

    if (textoFiltro.length > 0) {
        pacientes.forEach(function(paciente) {
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            var expressao = new RegExp(textoFiltro, 'i');

            if (expressao.test(nome) === false) {
                paciente.classList.add('invisivel');
                return;
            }

            paciente.classList.remove('invisivel');
        });

    } else {
        pacientes.forEach(function(paciente) {
            paciente.classList.remove('invisivel');
        });
    }
});
