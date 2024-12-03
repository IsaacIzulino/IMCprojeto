function calcularIMC() {

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');


    if (isNaN(peso) || peso <= 0) {
        resultado.textContent = "Por favor, insira um peso válido!";
        resultado.style.color = "red";
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        resultado.textContent = "Por favor, insira uma altura válida!";
        resultado.style.color = "red";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }


    resultado.textContent = "Seu IMC é " + imc + " (" + classificacao + ").";
    resultado.style.color = "#333"; 
}