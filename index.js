const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const idade = document.getElementById("idade");
const botao = document.getElementById("calc");
const resultado = document.getElementById("resultado");
const sexo_valor = {"homem": 161, "mulher": -5};
const atividade_valor = {"nenhuma": 369, "leve": 691, "moderada": 1014, "intensa": 1336};

botao.addEventListener("click", () => {
    let sexo = document.querySelectorAll('input[name="sexo"]');
    let atividade = document.querySelectorAll('input[name="atividade"]');

    for (const i in sexo) {
        if (sexo[i].checked) {
            sexo = sexo[i];
            break;
        }
    }

    for (const i in atividade) {
        if (atividade[i].checked) {
            console.log(atividade[i]);
            atividade = atividade[i];
            break;
        }
    }
    
    let tmb = 10 * peso.value + 6.25 * altura.value - 5 * idade.value + sexo_valor[sexo.value] + atividade_valor[atividade.value];
    resultado.value = tmb
});
