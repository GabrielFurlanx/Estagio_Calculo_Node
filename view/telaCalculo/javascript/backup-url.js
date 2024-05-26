const form = document.getElementById('register-form'); // Obter o formulário por ID ou outra maneira

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const input1 = document.getElementById("Inputvalor1_0").value.trim();
    const input2 = document.getElementById("Inputvalor2_0").value.trim();
    const input3 = document.getElementById("Inputvalor3_0").value.trim();
    const input4 = document.getElementById("Inputvalor4_0").value.trim();
    const indice_0 = document.getElementById("indice0").value.trim();
    const input1_1 = document.getElementById("Inputvalor1_1").value.trim();
    const input2_1 = document.getElementById("Inputvalor2_1").value.trim();
    const input3_1 = document.getElementById("Inputvalor3_1").value.trim();
    const input4_1 = document.getElementById("Inputvalor4_1").value.trim();
    const indice_1 = document.getElementById("indice1").value.trim();
    const input1_2 = document.getElementById("Inputvalor1_2").value.trim();
    const input2_2 = document.getElementById("Inputvalor2_2").value.trim();
    const input3_2 = document.getElementById("Inputvalor3_2").value.trim();
    const input4_2 = document.getElementById("Inputvalor4_2").value.trim();
    const indice_2 = document.getElementById("indice2").value.trim();
    const input1_3 = document.getElementById("Inputvalor1_3").value.trim();
    const input2_3 = document.getElementById("Inputvalor2_3").value.trim();
    const input3_3 = document.getElementById("Inputvalor3_3").value.trim();
    const input4_3 = document.getElementById("Inputvalor4_3").value.trim();
    const indice_3 = document.getElementById("indice3").value.trim();
    const input1_4 = document.getElementById("Inputvalor1_4").value.trim();
    const input2_4 = document.getElementById("Inputvalor2_4").value.trim();
    const input3_4 = document.getElementById("Inputvalor3_4").value.trim();
    const input4_4 = document.getElementById("Inputvalor4_4").value.trim();
    const indice_4 = document.getElementById("indice4").value.trim();
    const input1_5 = document.getElementById("Inputvalor1_5").value.trim();
    const input2_5 = document.getElementById("Inputvalor2_5").value.trim();
    const input3_5 = document.getElementById("Inputvalor3_5").value.trim();
    const input4_5 = document.getElementById("Inputvalor4_5").value.trim();
    const indice_5 = document.getElementById("indice5").value.trim();
    const input1_6 = document.getElementById("Inputvalor1_6").value.trim();
    const input2_6 = document.getElementById("Inputvalor2_6").value.trim();
    const input3_6 = document.getElementById("Inputvalor3_6").value.trim();
    const input4_6 = document.getElementById("Inputvalor4_6").value.trim();
    const indice_6 = document.getElementById("indice6").value.trim();
    const input1_7 = document.getElementById("Inputvalor1_7").value.trim();
    const input2_7 = document.getElementById("Inputvalor2_7").value.trim();
    const input3_7 = document.getElementById("Inputvalor3_7").value.trim();
    const input4_7 = document.getElementById("Inputvalor4_7").value.trim();
    const indice_7 = document.getElementById("indice7").value.trim();
    const input1_8 = document.getElementById("Inputvalor1_8").value.trim();
    const input2_8 = document.getElementById("Inputvalor2_8").value.trim();
    const input3_8 = document.getElementById("Inputvalor3_8").value.trim();
    const input4_8 = document.getElementById("Inputvalor4_8").value.trim();
    const indice_8 = document.getElementById("indice8").value.trim();
    const input1_9 = document.getElementById("Inputvalor1_9").value.trim();
    const input2_9 = document.getElementById("Inputvalor2_9").value.trim();
    const input3_9 = document.getElementById("Inputvalor3_9").value.trim();
    const input4_9 = document.getElementById("Inputvalor4_9").value.trim();
    const indice_9 = document.getElementById("indice9").value.trim();
    const input1_10 = document.getElementById("Inputvalor1_10").value.trim();
    const input2_10 = document.getElementById("Inputvalor2_10").value.trim();
    const input3_10 = document.getElementById("Inputvalor3_10").value.trim();
    const input4_10 = document.getElementById("Inputvalor4_10").value.trim();
    const indice_10 = document.getElementById("indice10").value.trim();
    const input1_11 = document.getElementById("Inputvalor1_11").value.trim();
    const input2_11 = document.getElementById("Inputvalor2_11").value.trim();
    const input3_11 = document.getElementById("Inputvalor3_11").value.trim();
    const input4_11 = document.getElementById("Inputvalor4_11").value.trim();
    const indice_11 = document.getElementById("indice11").value.trim();
    const input1_12 = document.getElementById("Inputvalor1_12").value.trim();
    const input2_12 = document.getElementById("Inputvalor2_12").value.trim();
    const input3_12 = document.getElementById("Inputvalor3_12").value.trim();
    const input4_12 = document.getElementById("Inputvalor4_12").value.trim();
    const indice_12 = document.getElementById("indice12").value.trim();
    const input1_13 = document.getElementById("Inputvalor1_13").value.trim();
    const input2_13 = document.getElementById("Inputvalor2_13").value.trim();
    const input3_13 = document.getElementById("Inputvalor3_13").value.trim();
    const input4_13 = document.getElementById("Inputvalor4_13").value.trim();
    const indice_13 = document.getElementById("indice13").value.trim();
    const input1_14 = document.getElementById("Inputvalor1_14").value.trim();
    const input2_14 = document.getElementById("Inputvalor2_14").value.trim();
    const input3_14 = document.getElementById("Inputvalor3_14").value.trim();
    const input4_14 = document.getElementById("Inputvalor4_14").value.trim();
    const indice_14 = document.getElementById("indice14").value.trim();
    const IPA = document.getElementById("ipaFinal").value.trim();
    const PP = document.getElementById("ppFinal").value.trim();




    const url = '/calculo';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input1, input2, input3, input4, indice_0, input1_1, input2_1, input3_1, input4_1, indice_1, input1_2, input2_2, input3_2, input4_2, indice_2, input1_3, input2_3, input3_3, input4_3, indice_3, input1_4, input2_4, input3_4, input4_4, indice_4, input1_5, input2_5, input3_5, input4_5, indice_5, input1_6, input2_6, input3_6, input4_6, indice_6, input1_7, input2_7, input3_7, input4_7, indice_7, input1_8, input2_8, input3_8, input4_8, indice_8, input1_9, input2_9, input3_9, input4_9, indice_9, input1_10, input2_10, input3_10, input4_10, indice_10, input1_11, input2_11, input3_11, input4_11, indice_11, input1_12, input2_12, input3_12, input4_12, indice_12, input1_13, input2_13, input3_13, input4_13, indice_13, input1_14, input2_14, input3_14, input4_14, indice_14, IPA, PP })
        });
        const result = await response.json(); // Processar a resposta, se necessário
        console.log(result);
    } catch (erro) {
        console.log("Erro", erro);
    }


});

document.addEventListener("DOMContentLoaded", function() {

    console.log("O DOM foi completamente carregado.");

function calcularIPAFinal() {
    const ipaElements = document.querySelectorAll('.ipa, .ipa_1, .ipa_2, .ipa_3, .ipa_4, .ipa_5, .ipa_6, .ipa_7, .ipa_8, .ipa_9, .ipa_10, .ipa_11, .ipa_12, .ipa_13, .ipa_14');
    let ipaFinal = 1;

    ipaElements.forEach(ipaElement => {
        const ipaValue = parseFloat(ipaElement.textContent);
        if (!isNaN(ipaValue)) {
            ipaFinal *= ipaValue;
        }
    });

    document.querySelector('.ipa_final').textContent = ipaFinal.toFixed(5);
    // Atualize o ipa_final
    

    // Retornar o valor de ipaFinal
    return ipaFinal;
    
}

function calcularPorcentagemIPAFinal() {
    // Chamar a função calcularIPAFinal() para obter o valor de ipaFinal
    const ipaFinal = calcularIPAFinal();

    // Verificar se ipaFinal é 1 e todos os inputs estão vazios
    const inputsVazios = document.querySelectorAll('.valor');
    const todosVazios = Array.from(inputsVazios).every(input => input.value.trim() === '');
    
    if (ipaFinal === 1 && todosVazios) {
        // Se ipaFinal for 1 e todos os inputs estiverem vazios, retornar o número inteiro
        return '50%';
    } else {
        // Calcular a porcentagem do IPA final
        const porcentagemIPAFinal = (ipaFinal / (ipaFinal + 1)) * 100;

        // Retornar a porcentagem formatada com até 6 casas decimais
        return isNaN(porcentagemIPAFinal) ? '#N/D' : porcentagemIPAFinal.toFixed(6) + '%';
    }
}

function atualizarPorcentagemIPAFinal() {
    const porcentagemIPAFinal = document.querySelector('.porcentagem_ipa_final');
    porcentagemIPAFinal.textContent = calcularPorcentagemIPAFinal();
}



/////// LINHA 0 - D8S1179 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 

const inputs = document.querySelectorAll('.valor');
const resultados = document.querySelectorAll('[class^="resultado"]');
let soma1 = 0;
let soma2 = 0;
let soma3 = 0;
let exclusao = 0;
let somaFinal = 0;
let IPA = 0;

// Variaveis para gerar
var input1 = 0;
var input2 = 0;
var input3 = 0;
var input4 = 0;
var indiceResultado = 0;

const frequencias = {
    8: 0.008,
    9: 0.011,
    10: 0.075,
    11: 0.088,
    12: 0.121,
    13: 0.285,
    14: 0.245,
    15: 0.127,
    16: 0.035,
    17: 0.005
};

function getFrequencia(value) {
    return frequencias[value] || '#N/D';
}

    function atualizarResultados() {
        // Aqui vai o restante do seu código atualizado
        const valores = Array.from(inputs).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

        // Inputs que serão gerados
        input1 = valores[0];
        console.log("Esse é o input1::", input1);
        input2 = valores[1];
        input3 = valores[2];
        input4 = valores[3];


        //document.getElementById("Inputvalor1_0").querySelector('.valor').value = input1;


        // Selecionando o elemento <p> com a classe "input1"
        const elementoInput1 = document.querySelector('.input1');
        const elementoInput2 = document.querySelector('.input2');
        const elementoInput3 = document.querySelector('.input3');
        const elementoInput4 = document.querySelector('.input4');


        // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
        if (elementoInput1 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input1
            elementoInput1.textContent = input1;
        }

        if (elementoInput2 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input1
            elementoInput2.textContent = input2;
        }

        if (elementoInput3 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input1
            elementoInput3.textContent = input3;
        }

        if (elementoInput4 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input1
            elementoInput4.textContent = input4;
        }







    // Comparação entre campos na mesma linha
    resultados[0].textContent = valores[0] === null || valores[1] === null ? '#N/D' : valores[0] === valores[1] ? '1' : '0'; // Campo1 = Campo2
    resultados[1].textContent = valores[2] === null || valores[3] === null ? '#N/D' : valores[2] === valores[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados[2].textContent = valores[0] === null || valores[2] === null ? '#N/D' : valores[0] === valores[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados[3].textContent = valores[0] === null || valores[3] === null ? '#N/D' : valores[0] === valores[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados[4].textContent = valores[1] === null || valores[2] === null ? '#N/D' : valores[1] === valores[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados[5].textContent = valores[1] === null || valores[3] === null ? '#N/D' : valores[1] === valores[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1 = (resultados[2].textContent === '#N/D' || resultados[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados[2].textContent) + parseFloat(resultados[3].textContent);
    document.querySelector('.soma1').textContent = soma1 === '#N/D' ? soma1 : soma1.toFixed(2);

    // Soma 2
    soma2 = (resultados[4].textContent === '#N/D' || resultados[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados[4].textContent) + parseFloat(resultados[5].textContent);
    document.querySelector('.soma2').textContent = soma2 === '#N/D' ? soma2 : soma2.toFixed(2);

    // Soma 3
    soma3 = (soma1 === '#N/D' || soma2 === '#N/D') ? '#N/D' : soma1 + soma2;
    document.querySelector('.soma3').textContent = soma3 === '#N/D' ? soma3 : soma3.toFixed(2);

    // Determinar exclusao
    exclusao = soma3 === '#N/D' ? '#N/D' : soma3 > 0 ? 1 : 0;
    document.querySelector('.exclusao').textContent = exclusao;

    // Soma Final
    somaFinal = (resultados[0].textContent === '#N/D' || resultados[1].textContent === '#N/D' || soma1 === '#N/D' || soma2 === '#N/D') ? '#N/D' : parseFloat(resultados[0].textContent) + parseFloat(resultados[1].textContent) + soma1 + soma2;
    document.querySelector('.somaFinal').textContent = somaFinal === '#N/D' ? somaFinal : somaFinal.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1 = (soma1 === '#N/D' || valores[0] === null || valores[1] === null) ? '#N/D' : soma1 > 0 ? getFrequencia(valores[0]) : getFrequencia(valores[1]);
    document.querySelector('.comparar1').textContent = comparar1 === '#N/D' ? comparar1 : comparar1.toFixed(3);

    const comparar2 = (soma2 === '#N/D' || valores[1] === null) ? '#N/D' : soma2 > 0 ? getFrequencia(valores[1]) : '-';
    document.querySelector('.comparar2').textContent = comparar2;

    // Transportar 1
    let transportar1 = '#N/D';
    if (somaFinal === '#N/D' || comparar1 === '#N/D' || comparar2 === '#N/D') {
        transportar1 = '#N/D';
    } else if (somaFinal === 0.5) {
        transportar1 = 1 / (4 * comparar1);
    } else if (somaFinal === 1.5) {
        transportar1 = 1 / (2 * comparar1);
    } else if (somaFinal === 2) {
        transportar1 = 1 / (2 * comparar1);
    } else if (somaFinal === 3.5) {
        transportar1 = 1 / comparar1;
    } else if (somaFinal === 1) {
        transportar1 = (comparar1 + comparar2) / (4 * comparar1 * comparar2);
    } else {
        transportar1 = '-';
    }
    document.querySelector('.transportar1').textContent = transportar1 === '#N/D' ? transportar1 : transportar1.toFixed(6);

    // Transportar 2
    const transportar2 = exclusao === '#N/D' || transportar1 === '-' ? '#N/D' : exclusao > 0 ? transportar1 : 0;
    document.querySelector('.transportar2').textContent = transportar2 === '#N/D' ? transportar2 : transportar2.toFixed(6);


    // Índice
    const indice = transportar2 === '#N/D' ? '#N/D' : transportar2 === 0 ? "Exclusão" : transportar2.toFixed(5);
    document.querySelector('.indice').textContent = indice;

    // Indice que sera gerado
    indiceResultado = indice;
    //console.log("Valor de indice:Resultado", indiceResultado);


    const elementoIndice = document.querySelector('.indice0');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice.textContent = indiceResultado;
    }



    // Transportar 3
    const transportar3 = transportar2 === '#N/D' ? '#N/D' : transportar2 > 0 ? transportar2 : 1;
    document.querySelector('.transportar3').textContent = transportar3 === '#N/D' ? transportar3 : transportar3.toFixed(6);
    //console.log("Valor de transportar3:", transportar3);

    // ÉNãoDisp
    const éNãoDisp = transportar3 === '#N/D';
    document.querySelector('.éNãoDisp').textContent = éNãoDisp ? "VERDADEIRO" : "FALSO";
    //console.log("Valor de éNãoDisp:", éNãoDisp);
    
    // Transportar Final
    const transportarFinal = éNãoDisp === false ? parseFloat(transportar3) : 1;
    document.querySelector('.transportarFinal').textContent = transportarFinal === '#N/D' ? transportarFinal : transportarFinal.toFixed(5);
    //console.log("Valor de transportarFinal:", transportarFinal);

    // IPA
    IPA = transportarFinal;
    document.querySelector('.ipa').textContent = IPA === '#N/D' ? IPA : IPA.toFixed(5);
    //console.log("Valor de IPA:", IPA);


    
    // CALCULAR O IPA_FINAL
    calcularIPAFinal();

    //ATUALIZA A PORCENTAGEM FINAL
    atualizarPorcentagemIPAFinal()



// Atualize o PP
document.getElementById("ppFinal").textContent = calcularPorcentagemIPAFinal();

  
}

inputs.forEach(input => {
    input.addEventListener('input', atualizarResultados);
});

atualizarResultados(); // Atualiza os resultados inicialmente

atualizarPorcentagemIPAFinal();

// Todas as suas funções e variáveis existentes

});




