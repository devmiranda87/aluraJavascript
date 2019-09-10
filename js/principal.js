var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var imc = 0;

alturaEhValida = true;
pesoEhValido = true;

if(peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    imc = 'Peso inválido!';
}

if(altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    imc = 'Altura inválida!';
}

if (alturaEhValida && pesoEhValido) {
    imc = (peso / (altura*altura));    
}

paciente.querySelector('.info-imc').textContent = imc;
