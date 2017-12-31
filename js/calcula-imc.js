
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i < pacientes.length; i++ ){

	var tdpeso = pacientes[i].querySelector(".info-peso");
	var tdaltura = pacientes[i].querySelector(".info-altura");
	var altura = tdaltura.textContent;
	var peso = tdpeso.textContent;
	var tdImc = pacientes[i].querySelector(".info-imc");
	var paciente = pacientes[i];

	var pesoValido = true;
	var alturaValida = true;

	if (peso <= 0 || peso > 500 ) {
		msgError = "peso invalido";
		pesoValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if (altura <= 0 || altura >= 3.00){
		msgError = "altura invalida";
		alturaValida = false;
		paciente.classList.add("paciente-invalido");
	}

	if (alturaValida && pesoValido){
		tdImc.textContent = calculaImc(peso, altura);
	}else{
		tdImc.textContent = msgError;
	}

}

function calculaImc(peso,altura){
	var IMC = 0;
	IMC = peso / (altura * altura);
	return IMC.toFixed(2);
}





