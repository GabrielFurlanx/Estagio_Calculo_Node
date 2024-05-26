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



  
}

inputs.forEach(input => {
    input.addEventListener('input', atualizarResultados);
});

atualizarResultados(); // Atualiza os resultados inicialmente




/////// LINHA 1 - D21S11 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 





const inputs_1 = document.querySelectorAll('.valor_1');
const resultados_1 = document.querySelectorAll('.resultado1_1, .resultado2_1, .resultado3_1, .resultado4_1, .resultado5_1, .resultado6_1');

let soma1_1 = 0;
let soma2_1 = 0;
let soma3_1 = 0;
let exclusao_1 = 0;
let somaFinal_1 = 0;
let IPA_1 = 0;

// Variaveis que serão geradas
var input1_1 = 0;
var input2_1 = 0;
var input3_1 = 0;
var input4_1 = 0;
var indiceResultado_1 = 0;



function getFrequencia1(value) {
    const frequencias = {
        24.2: 0.003,
        25: 0.001,
        26: 0.001,
        27: 0.028,
        28: 0.141,
        29: 0.217,
        29.2: 0.001,
        30: 0.253,
        30.2: 0.038,
        31: 0.063,
        31.2: 0.099,
        32: 0.012,
        32.2: 0.100,
        33: 0.002,
        33.2: 0.033,
        34: 0.001,
        34.2: 0.002,
        35: 0.004,
        36: 0.001
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_1() {
    const valores_1 = Array.from(inputs_1).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);



    // Inputs que serão gerados
    input1_1 = valores_1[0];
    //console.log("Valor do input1_1", input1_1);
    input2_1 = valores_1[1];
    //console.log("Valor do input2_1", input2_1);
    input3_1 = valores_1[2];
    //console.log("Valor do input3_1", input3_1);
    input4_1 = valores_1[3];
    //console.log("Valor do input4_1", input4_1);

    //document.getElementById("Inputvalor1_1").innerText = input1_1;
    //document.getElementById("Inputvalor2_1").innerText = input2_1;
    //document.getElementById("Inputvalor3_1").innerText = input3_1;
    //document.getElementById("Inputvalor4_1").innerText = input4_1;

        // Selecionando os elementos correspondentes
        const elementoInput1_1 = document.querySelector('.input1_1');
        const elementoInput2_1 = document.querySelector('.input2_1');
        const elementoInput3_1 = document.querySelector('.input3_1');
        const elementoInput4_1 = document.querySelector('.input4_1');
    
        // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
        if (elementoInput1_1 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input1_1
            elementoInput1_1.textContent = input1_1;
        }
    
        if (elementoInput2_1 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input2_1
            elementoInput2_1.textContent = input2_1;
        }
    
        if (elementoInput3_1 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input3_1
            elementoInput3_1.textContent = input3_1;
        }
    
        if (elementoInput4_1 !== null) {
            // Atualizando o conteúdo do elemento com o valor de input4_1
            elementoInput4_1.textContent = input4_1;
        }



    // Comparação entre campos na mesma linha
    resultados_1[0].textContent = valores_1[0] === null || valores_1[1] === null ? '#N/D' : valores_1[0] === valores_1[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_1[1].textContent = valores_1[2] === null || valores_1[3] === null ? '#N/D' : valores_1[2] === valores_1[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_1[2].textContent = valores_1[0] === null || valores_1[2] === null ? '#N/D' : valores_1[0] === valores_1[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_1[3].textContent = valores_1[0] === null || valores_1[3] === null ? '#N/D' : valores_1[0] === valores_1[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_1[4].textContent = valores_1[1] === null || valores_1[2] === null ? '#N/D' : valores_1[1] === valores_1[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_1[5].textContent = valores_1[1] === null || valores_1[3] === null ? '#N/D' : valores_1[1] === valores_1[3] ? '0.5' : '0'; // Campo2 = Campo4

    
    // Soma 1
    soma1_1 = (resultados_1[2].textContent === '#N/D' || resultados_1[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_1[2].textContent) + parseFloat(resultados_1[3].textContent);
    document.querySelector('.soma1_1').textContent = soma1_1 === '#N/D' ? soma1_1 : soma1_1.toFixed(2);

    // Soma 2
    soma2_1 = (resultados_1[4].textContent === '#N/D' || resultados_1[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_1[4].textContent) + parseFloat(resultados_1[5].textContent);
    document.querySelector('.soma2_1').textContent = soma2_1 === '#N/D' ? soma2_1 : soma2_1.toFixed(2);

    // Soma 3
    soma3_1 = (soma1_1 === '#N/D' || soma2_1 === '#N/D') ? '#N/D' : soma1_1 + soma2_1;
    document.querySelector('.soma3_1').textContent = soma3_1 === '#N/D' ? soma3_1 : soma3_1.toFixed(2);

    // Determinar exclusao
    exclusao_1 = soma3_1 === '#N/D' ? '#N/D' : soma3_1 > 0 ? 1 : 0;
    document.querySelector('.exclusao_1').textContent = exclusao_1;

    // Soma Final
    somaFinal_1 = (resultados_1[0].textContent === '#N/D' || resultados_1[1].textContent === '#N/D' || soma1_1 === '#N/D' || soma2_1 === '#N/D') ? '#N/D' : parseFloat(resultados_1[0].textContent) + parseFloat(resultados_1[1].textContent) + soma1_1 + soma2_1;
    document.querySelector('.somaFinal_1').textContent = somaFinal_1 === '#N/D' ? somaFinal_1 : somaFinal_1.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_1 = (soma1_1 === '#N/D' || valores_1[0] === null || valores_1[1] === null) ? '#N/D' : soma1_1 > 0 ? getFrequencia1(valores_1[0]) : getFrequencia1(valores_1[1]);
    document.querySelector('.comparar1_1').textContent = comparar1_1 === '#N/D' ? comparar1_1 : comparar1_1.toFixed(3);

    const comparar2_1 = (soma2_1 === '#N/D' || valores_1[1] === null) ? '#N/D' : soma2_1 > 0 ? getFrequencia1(valores_1[1]) : '-';
    document.querySelector('.comparar2_1').textContent = comparar2_1;

    // Transportar 1
    let transportar1_1 = '#N/D';
    if (somaFinal_1 === '#N/D' || comparar1_1 === '#N/D' || comparar2_1 === '#N/D') {
        transportar1_1 = '#N/D';
    } else if (somaFinal_1 === 0.5) {
        transportar1_1 = 1 / (4 * comparar1_1);
    } else if (somaFinal_1 === 1.5) {
        transportar1_1 = 1 / (2 * comparar1_1);
    } else if (somaFinal_1 === 2) {
        transportar1_1 = 1 / (2 * comparar1_1);
    } else if (somaFinal_1 === 3.5) {
        transportar1_1 = 1 / comparar1_1;
    } else if (somaFinal_1 === 1) {
        transportar1_1 = (comparar1_1 + comparar2_1) / (4 * comparar1_1 * comparar2_1);
    } else {
        transportar1_1 = '-';
    }
    document.querySelector('.transportar1_1').textContent = transportar1_1 === '#N/D' ? transportar1_1 : transportar1_1.toFixed(6);

    // Transportar 2
    const transportar2_1 = exclusao_1 === '#N/D' || transportar1_1 === '-' ? '#N/D' : exclusao_1 > 0 ? transportar1_1 : 0;
    document.querySelector('.transportar2_1').textContent = transportar2_1 === '#N/D' ? transportar2_1 : transportar2_1.toFixed(6);

    // Índice
    const indice_1 = transportar2_1 === '#N/D' ? '#N/D' : transportar2_1 === 0 ? "Exclusão" : transportar2_1.toFixed(5);
    document.querySelector('.indice_1').textContent = indice_1;


    // Indice que sera gerado
    indiceResultado_1 = indice_1;
    //console.log("Valor de indice:Resultado_1", indiceResultado_1);


    const elementoIndice1 = document.querySelector('.indice1');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice1 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice1.textContent = indiceResultado_1;
    }


    // Transportar 3
    const transportar3_1 = transportar2_1 === '#N/D' ? '#N/D' : transportar2_1 > 0 ? transportar2_1 : 1;
    document.querySelector('.transportar3_1').textContent = transportar3_1 === '#N/D' ? transportar3_1 : transportar3_1.toFixed(6);
    //console.log("Valor de transportar3_1:", transportar3_1);

    // ÉNãoDisp
    const éNãoDisp_1 = transportar3_1 === '#N/D';
    document.querySelector('.éNãoDisp_1').textContent = éNãoDisp_1 ? "VERDADEIRO" : "FALSO";
    //console.log("Valor de éNãoDisp_1:", éNãoDisp_1);

    // Transportar Final
    const transportarFinal_1 = éNãoDisp_1 === false ? parseFloat(transportar3_1) : 1;
    document.querySelector('.transportarFinal_1').textContent = transportarFinal_1 === '#N/D' ? transportarFinal_1 : transportarFinal_1.toFixed(5);
    //console.log("Valor de transportarFinal_1:", transportarFinal_1);

    // IPA
    IPA_1 = transportarFinal_1;
    document.querySelector('.ipa_1').textContent = IPA_1 === '#N/D' ? IPA_1 : IPA_1.toFixed(5);
    //console.log("Valor de IPA_1:", IPA_1);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();

    //ATUALIZA A PORCENTAGEM FINAL
    atualizarPorcentagemIPAFinal()
}

inputs_1.forEach(input => {
    input.addEventListener('input', atualizarResultados_1);
});

atualizarResultados_1(); // Atualiza os resultados inicialmente




/////// LINHA 2 - D7S820 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 



const inputs_2 = document.querySelectorAll('.valor_2');
const resultados_2 = document.querySelectorAll('.resultado1_2, .resultado2_2, .resultado3_2, .resultado4_2, .resultado5_2, .resultado6_2');

let soma1_2 = 0;
let soma2_2 = 0;
let soma3_2 = 0;
let exclusao_2 = 0;
let somaFinal_2 = 0;
let IPA_2 = 0;

// Variaveis que serão geradas
var input1_2 = 0;
var input2_2 = 0;
var input3_2 = 0;
var input4_2 = 0;
var indiceResultado_2 = 0;


function getFrequencia2(value) {
    const frequencias = {
        7: 0.012,
        8: 0.162,
        9: 0.124,
        10: 0.259,
        11: 0.256,
        12: 0.163,
        13: 0.021,
        14: 0.003
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_2() {
    const valores_2 = Array.from(inputs_2).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);


    // Inputs que serão gerados
    input1_2 = valores_2[0];
    //console.log("Valor do input1_2", input1_2);
    input2_2 = valores_2[1];
    //console.log("Valor do input2_2", input2_2);
    input3_2 = valores_2[2];
    //console.log("Valor do input3_2", input3_2);
    input4_2 = valores_2[3];
    //console.log("Valor do input4_2", input4_2);


    const elementoInput1_2 = document.querySelector('.input1_2');
    const elementoInput2_2 = document.querySelector('.input2_2');
    const elementoInput3_2 = document.querySelector('.input3_2');
    const elementoInput4_2 = document.querySelector('.input4_2');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_2 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_2.textContent = input1_2;
    }

    if (elementoInput2_2 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_2.textContent = input2_2;
    }

    if (elementoInput3_2 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_2.textContent = input3_2;
    }

    if (elementoInput4_2 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_2.textContent = input4_2;
    }


    // Comparação entre campos na mesma linha
    resultados_2[0].textContent = valores_2[0] === null || valores_2[1] === null ? '#N/D' : valores_2[0] === valores_2[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_2[1].textContent = valores_2[2] === null || valores_2[3] === null ? '#N/D' : valores_2[2] === valores_2[3] ? '0.5' : '0'; // Campo3 = Campo4

    // Comparação entre campos em colunas diferentes
    resultados_2[2].textContent = valores_2[0] === null || valores_2[2] === null ? '#N/D' : valores_2[0] === valores_2[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_2[3].textContent = valores_2[0] === null || valores_2[3] === null ? '#N/D' : valores_2[0] === valores_2[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_2[4].textContent = valores_2[1] === null || valores_2[2] === null ? '#N/D' : valores_2[1] === valores_2[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_2[5].textContent = valores_2[1] === null || valores_2[3] === null ? '#N/D' : valores_2[1] === valores_2[3] ? '0.5' : '0'; // Campo2 = Campo4

    // Soma 1
    soma1_2 = (resultados_2[2].textContent === '#N/D' || resultados_2[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_2[2].textContent) + parseFloat(resultados_2[3].textContent);
    document.querySelector('.soma1_2').textContent = soma1_2 === '#N/D' ? soma1_2 : soma1_2.toFixed(2);

    // Soma 2
    soma2_2 = (resultados_2[4].textContent === '#N/D' || resultados_2[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_2[4].textContent) + parseFloat(resultados_2[5].textContent);
    document.querySelector('.soma2_2').textContent = soma2_2 === '#N/D' ? soma2_2 : soma2_2.toFixed(2);

    // Soma 3
    soma3_2 = (soma1_2 === '#N/D' || soma2_2 === '#N/D') ? '#N/D' : soma1_2 + soma2_2;
    document.querySelector('.soma3_2').textContent = soma3_2 === '#N/D' ? soma3_2 : soma3_2.toFixed(2);

    // Determinar exclusao
    exclusao_2 = soma3_2 === '#N/D' ? '#N/D' : soma3_2 > 0 ? 1 : 0;
    document.querySelector('.exclusao_2').textContent = exclusao_2;

    // Soma Final
    somaFinal_2 = (resultados_2[0].textContent === '#N/D' || resultados_2[1].textContent === '#N/D' || soma1_2 === '#N/D' || soma2_2 === '#N/D') ? '#N/D' : parseFloat(resultados_2[0].textContent) + parseFloat(resultados_2[1].textContent) + soma1_2 + soma2_2;
    document.querySelector('.somaFinal_2').textContent = somaFinal_2 === '#N/D' ? somaFinal_2 : somaFinal_2.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_2 = (soma1_2 === '#N/D' || valores_2[0] === null || valores_2[1] === null) ? '#N/D' : soma1_2 > 0 ? getFrequencia2(valores_2[0]) : getFrequencia2(valores_2[1]);
    document.querySelector('.comparar1_2').textContent = comparar1_2 === '#N/D' ? comparar1_2 : comparar1_2.toFixed(3);

    const comparar2_2 = (soma2_2 === '#N/D' || valores_2[1] === null) ? '#N/D' : soma2_2 > 0 ? getFrequencia2(valores_2[1]) : '-';
    document.querySelector('.comparar2_2').textContent = comparar2_2;

    // Transportar 1
    let transportar1_2 = '#N/D';
    if (somaFinal_2 === '#N/D' || comparar1_2 === '#N/D' || comparar2_2 === '#N/D') {
        transportar1_2 = '#N/D';
    } else if (somaFinal_2 === 0.5) {
        transportar1_2 = 1 / (4 * comparar1_2);
    } else if (somaFinal_2 === 1.5) {
        transportar1_2 = 1 / (2 * comparar1__2);
    } else if (somaFinal_2 === 2) {
        transportar1_2 = 1 / (2 * comparar1_2);
    } else if (somaFinal_2 === 3.5) {
        transportar1_2 = 1 / comparar1_2;
    } else if (somaFinal_2 === 1) {
        transportar1_2 = (comparar1_2 + comparar2_2) / (4 * comparar1_2 * comparar2_2);
    } else {
        transportar1_2 = '-';
    }
    document.querySelector('.transportar1_2').textContent = transportar1_2 === '#N/D' ? transportar1_2 : transportar1_2.toFixed(6);

    // Transportar 2
    const transportar2_2 = exclusao_2 === '#N/D' || transportar1_2 === '-' ? '#N/D' : exclusao_2 > 0 ? transportar1_2 : 0;
    document.querySelector('.transportar2_2').textContent = transportar2_2 === '#N/D' ? transportar2_2 : transportar2_2.toFixed(6);

    // Índice
    const indice_2 = transportar2_2 === '#N/D' ? '#N/D' : transportar2_2 === 0 ? "Exclusão" : transportar2_2.toFixed(5);
    document.querySelector('.indice_2').textContent = indice_2;

    // Índice que será gerado
    indiceResultado_2 = indice_2;
    //console.log("Valor de indice:Resultado_2", indiceResultado_2);


    
    const elementoIndice2 = document.querySelector('.indice2');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice2 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice2.textContent = indiceResultado_2;
    }

    // Transportar 3
    const transportar3_2 = transportar2_2 === '#N/D' ? '#N/D' : transportar2_2 > 0 ? transportar2_2 : 1;
    document.querySelector('.transportar3_2').textContent = transportar3_2 === '#N/D' ? transportar3_2 : transportar3_2.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_2 = transportar3_2 === '#N/D';
    document.querySelector('.éNãoDisp_2').textContent = éNãoDisp_2 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_2 = éNãoDisp_2 === false ? parseFloat(transportar3_2) : 1;
    document.querySelector('.transportarFinal_2').textContent = transportarFinal_2 === '#N/D' ? transportarFinal_2 : transportarFinal_2.toFixed(5);

    // IPA
    IPA_2 = transportarFinal_2;
    document.querySelector('.ipa_2').textContent = IPA_2 === '#N/D' ? IPA_2 : IPA_2.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();

    //ATUALIZA A PORCENTAGEM FINAL
    atualizarPorcentagemIPAFinal()

    
}

inputs_2.forEach(input => {
    input.addEventListener('input', atualizarResultados_2);
});

atualizarResultados_2(); // Atualiza os resultados inicialmente



/////// LINHA 3 - CSF1PO /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 



const inputs_3 = document.querySelectorAll('.valor_3');
const resultados_3 = document.querySelectorAll('.resultado1_3, .resultado2_3, .resultado3_3, .resultado4_3, .resultado5_3, .resultado6_3');

let soma1_3 = 0;
let soma2_3 = 0;
let soma3_3 = 0;
let exclusao_3 = 0;
let somaFinal_3 = 0;
let IPA_3 = 0;


// Variaveis que serão geradas
var input1_3 = 0;
var input2_3 = 0;
var input3_3 = 0;
var input4_3 = 0;
var indiceResultado_3 = 0;

function getFrequencia3(value) {
    const frequencias = {
        6: 0.003,
        7: 0.010,
        8: 0.012,
        9: 0.018,
        10: 0.263,
        11: 0.307,
        12: 0.326,
        13: 0.054,
        14: 0.007
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_3() {
    const valores_3 = Array.from(inputs_3).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_3 = valores_3[0];
    //console.log("Valor do input1_3", input1_3);
    input2_3 = valores_3[1];
    //console.log("Valor do input2_3", input2_3);
    input3_3 = valores_3[2];
    //console.log("Valor do input3_3", input3_3);
    input4_3 = valores_3[3];
    //console.log("Valor do input4_3", input4_3);


    const elementoInput1_3 = document.querySelector('.input1_3');
    const elementoInput2_3 = document.querySelector('.input2_3');
    const elementoInput3_3 = document.querySelector('.input3_3');
    const elementoInput4_3 = document.querySelector('.input4_3');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_3 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_3.textContent = input1_3;
    }

    if (elementoInput2_3 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_3.textContent = input2_3;
    }

    if (elementoInput3_3 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_3.textContent = input3_3;
    }

    if (elementoInput4_3 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_3.textContent = input4_3;
    }

    // Comparação entre campos na mesma linha
    resultados_3[0].textContent = valores_3[0] === null || valores_3[1] === null ? '#N/D' : valores_3[0] === valores_3[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_3[1].textContent = valores_3[2] === null || valores_3[3] === null ? '#N/D' : valores_3[2] === valores_3[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_3[2].textContent = valores_3[0] === null || valores_3[2] === null ? '#N/D' : valores_3[0] === valores_3[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_3[3].textContent = valores_3[0] === null || valores_3[3] === null ? '#N/D' : valores_3[0] === valores_3[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_3[4].textContent = valores_3[1] === null || valores_3[2] === null ? '#N/D' : valores_3[1] === valores_3[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_3[5].textContent = valores_3[1] === null || valores_3[3] === null ? '#N/D' : valores_3[1] === valores_3[3] ? '0.5' : '0'; // Campo2 = Campo4

    // Soma 1
    soma1_3 = (resultados_3[2].textContent === '#N/D' || resultados_3[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_3[2].textContent) + parseFloat(resultados_3[3].textContent);
    document.querySelector('.soma1_3').textContent = soma1_3 === '#N/D' ? soma1_3 : soma1_3.toFixed(2);

    // Soma 2
    soma2_3 = (resultados_3[4].textContent === '#N/D' || resultados_3[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_3[4].textContent) + parseFloat(resultados_3[5].textContent);
    document.querySelector('.soma2_3').textContent = soma2_3 === '#N/D' ? soma2_3 : soma2_3.toFixed(2);

    // Soma 3
    soma3_3 = (soma1_3 === '#N/D' || soma2_3 === '#N/D') ? '#N/D' : soma1_3 + soma2_3;
    document.querySelector('.soma3_3').textContent = soma3_3 === '#N/D' ? soma3_3 : soma3_3.toFixed(2);

    // Determinar exclusao
    exclusao_3 = soma3_3 === '#N/D' ? '#N/D' : soma3_3 > 0 ? 1 : 0;
    document.querySelector('.exclusao_3').textContent = exclusao_3;

    // Soma Final
    somaFinal_3 = (resultados_3[0].textContent === '#N/D' || resultados_3[1].textContent === '#N/D' || soma1_3 === '#N/D' || soma2_3 === '#N/D') ? '#N/D' : parseFloat(resultados_3[0].textContent) + parseFloat(resultados_3[1].textContent) + soma1_3 + soma2_3;
    document.querySelector('.somaFinal_3').textContent = somaFinal_3 === '#N/D' ? somaFinal_3 : somaFinal_3.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_3 = (soma1_3 === '#N/D' || valores_3[0] === null || valores_3[1] === null) ? '#N/D' : soma1_3 > 0 ? getFrequencia3(valores_3[0]) : getFrequencia3(valores_3[1]);
    document.querySelector('.comparar1_3').textContent = comparar1_3 === '#N/D' ? comparar1_3 : comparar1_3.toFixed(3);

    const comparar2_3 = (soma2_3 === '#N/D' || valores_3[1] === null) ? '#N/D' : soma2_3 > 0 ? getFrequencia3(valores_3[1]) : '-';
    document.querySelector('.comparar2_3').textContent = comparar2_3;

    // Transportar 1
    let transportar1_3 = '#N/D';
    if (somaFinal_3 === '#N/D' || comparar1_3 === '#N/D' || comparar2_3 === '#N/D') {
        transportar1_3 = '#N/D';
    } else if (somaFinal_3 === 0.5) {
        transportar1_3 = 1 / (4 * comparar1_3);
    } else if (somaFinal_3 === 1.5) {
        transportar1_3 = 1 / (2 * comparar1_3);
    } else if (somaFinal_3 === 2) {
        transportar1_3 = 1 / (2 * comparar1_3);
    } else if (somaFinal_3 === 3.5) {
        transportar1_3 = 1 / comparar1_3;
    } else if (somaFinal_3 === 1) {
        transportar1_3 = (comparar1_3 + comparar2_3) / (4 * comparar1_3 * comparar2_3);
    } else {
        transportar1_3 = '-';
    }
    document.querySelector('.transportar1_3').textContent = transportar1_3 === '#N/D' ? transportar1_3 : transportar1_3.toFixed(6);

    // Transportar 2
    const transportar2_3 = exclusao_3 === '#N/D' || transportar1_3 === '-' ? '#N/D' : exclusao_3 > 0 ? transportar1_3 : 0;
    document.querySelector('.transportar2_3').textContent = transportar2_3 === '#N/D' ? transportar2_3 : transportar2_3.toFixed(6);

    // Índice
    const indice_3 = transportar2_3 === '#N/D' ? '#N/D' : transportar2_3 === 0 ? "Exclusão" : transportar2_3.toFixed(5);
    document.querySelector('.indice_3').textContent = indice_3;

    // Índice que será gerado
    indiceResultado_3 = indice_3;
    //console.log("Valor de indice:Resultado_3", indiceResultado_3);




    const elementoIndice3 = document.querySelector('.indice3');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice3 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice3.textContent = indiceResultado_3;
    }

    // Transportar 3
    const transportar3_3 = transportar2_3 === '#N/D' ? '#N/D' : transportar2_3 > 0 ? transportar2_3 : 1;
    document.querySelector('.transportar3_3').textContent = transportar3_3 === '#N/D' ? transportar3_3 : transportar3_3.toFixed(6);
    //console.log("Valor de transportar3_3:", transportar3_3);

    // ÉNãoDisp
    const éNãoDisp_3 = transportar3_3 === '#N/D';
    document.querySelector('.éNãoDisp_3').textContent = éNãoDisp_3 ? "VERDADEIRO" : "FALSO";
    //console.log("Valor de éNãoDisp_3:", éNãoDisp_3);

    // Transportar Final
    const transportarFinal_3 = éNãoDisp_3 === false ? parseFloat(transportar3_3) : 1;
    document.querySelector('.transportarFinal_3').textContent = transportarFinal_3 === '#N/D' ? transportarFinal_3 : transportarFinal_3.toFixed(5);
    //console.log("Valor de transportarFinal_3:", transportarFinal_3);

    // IPA
    IPA_3 = transportarFinal_3;
    document.querySelector('.ipa_3').textContent = IPA_3 === '#N/D' ? IPA_3 : IPA_3.toFixed(5);
    //console.log("Valor de IPA_3:", IPA_3);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();

    //ATUALIZA A PORCENTAGEM FINAL
    atualizarPorcentagemIPAFinal()
}

inputs_3.forEach(input => {
    input.addEventListener('input', atualizarResultados_3);
});

atualizarResultados_3(); // Atualiza os resultados inicialmente




/////// Linha 4 - D3S1358 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 





const inputs_4 = document.querySelectorAll('.valor_4');
const resultados_4 = document.querySelectorAll('.resultado1_4, .resultado2_4, .resultado3_4, .resultado4_4, .resultado5_4, .resultado6_4');

let soma1_4 = 0;
let soma2_4 = 0;
let soma3_4 = 0;
let exclusao_4 = 0;
let somaFinal_4 = 0;
let IPA_4 = 0;

// Variaveis que serão geradas
var input1_4 = 0;
var input2_4 = 0;
var input3_4 = 0;
var input4_4 = 0;
var indiceResultado_4 = 0;

function getFrequencia4(value) {
    const frequencias = {
        11: 0.001,
        12: 0.003,
        14: 0.092,
        15: 0.292,
        16: 0.252,
        17: 0.218,
        18: 0.126,
        19: 0.011,
        20: 0.001,
        21: 0.001
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_4() {
    const valores_4 = Array.from(inputs_4).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);


    // Inputs que serão gerados
    input1_4 = valores_4[0];
    //console.log("Valor do input1_4", input1_4);
    input2_4 = valores_4[1];
    //console.log("Valor do input2_4", input2_4);
    input3_4 = valores_4[2];
    //console.log("Valor do input3_4", input3_4);
    input4_4 = valores_4[3];
    //console.log("Valor do input4_4", input4_4);


    const elementoInput1_4 = document.querySelector('.input1_4');
    const elementoInput2_4 = document.querySelector('.input2_4');
    const elementoInput3_4 = document.querySelector('.input3_4');
    const elementoInput4_4 = document.querySelector('.input4_4');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_4 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_4.textContent = input1_4;
    }

    if (elementoInput2_4 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_4.textContent = input2_4;
    }

    if (elementoInput3_4 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_4.textContent = input3_4;
    }

    if (elementoInput4_4 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_4.textContent = input4_4;
    }

    // Comparação entre campos na mesma linha
    resultados_4[0].textContent = valores_4[0] === null || valores_4[1] === null ? '#N/D' : valores_4[0] === valores_4[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_4[1].textContent = valores_4[2] === null || valores_4[3] === null ? '#N/D' : valores_4[2] === valores_4[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_4[2].textContent = valores_4[0] === null || valores_4[2] === null ? '#N/D' : valores_4[0] === valores_4[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_4[3].textContent = valores_4[0] === null || valores_4[3] === null ? '#N/D' : valores_4[0] === valores_4[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_4[4].textContent = valores_4[1] === null || valores_4[2] === null ? '#N/D' : valores_4[1] === valores_4[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_4[5].textContent = valores_4[1] === null || valores_4[3] === null ? '#N/D' : valores_4[1] === valores_4[3] ? '0.5' : '0'; // Campo2 = Campo4

    // Soma 1
    soma1_4 = (resultados_4[2].textContent === '#N/D' || resultados_4[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_4[2].textContent) + parseFloat(resultados_4[3].textContent);
    document.querySelector('.soma1_4').textContent = soma1_4 === '#N/D' ? soma1_4 : soma1_4.toFixed(2);

    // Soma 2
    soma2_4 = (resultados_4[4].textContent === '#N/D' || resultados_4[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_4[4].textContent) + parseFloat(resultados_4[5].textContent);
    document.querySelector('.soma2_4').textContent = soma2_4 === '#N/D' ? soma2_4 : soma2_4.toFixed(2);

    // Soma 3
    soma3_4 = (soma1_4 === '#N/D' || soma2_4 === '#N/D') ? '#N/D' : soma1_4 + soma2_4;
    document.querySelector('.soma3_4').textContent = soma3_4 === '#N/D' ? soma3_4 : soma3_4.toFixed(2);

    // Determinar exclusao
    exclusao_4 = soma3_4 === '#N/D' ? '#N/D' : soma3_4 > 0 ? 1 : 0;
    document.querySelector('.exclusao_4').textContent = exclusao_4;

    // Soma Final
    somaFinal_4 = (resultados_4[0].textContent === '#N/D' || resultados_4[1].textContent === '#N/D' || soma1_4 === '#N/D' || soma2_4 === '#N/D') ? '#N/D' : parseFloat(resultados_4[0].textContent) + parseFloat(resultados_4[1].textContent) + soma1_4 + soma2_4;
    document.querySelector('.somaFinal_4').textContent = somaFinal_4 === '#N/D' ? somaFinal_4 : somaFinal_4.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_4 = (soma1_4 === '#N/D' || valores_4[0] === null || valores_4[1] === null) ? '#N/D' : soma1_4 > 0 ? getFrequencia4(valores_4[0]) : getFrequencia4(valores_4[1]);
    document.querySelector('.comparar1_4').textContent = comparar1_4 === '#N/D' ? comparar1_4 : comparar1_4.toFixed(3);

    const comparar2_4 = (soma2_4 === '#N/D' || valores_4[1] === null) ? '#N/D' : soma2_4 > 0 ? getFrequencia4(valores_4[1]) : '-';
    document.querySelector('.comparar2_4').textContent = comparar2_4;

    // Transportar 1
    let transportar1_4 = '#N/D';
    if (somaFinal_4 === '#N/D' || comparar1_4 === '#N/D' || comparar2_4 === '#N/D') {
        transportar1_4 = '#N/D';
    } else if (somaFinal_4 === 0.5) {
        transportar1_4 = 1 / (4 * comparar1_4);
    } else if (somaFinal_4 === 1.5) {
        transportar1_4 = 1 / (2 * comparar1_4);
    } else if (somaFinal_4 === 2) {
        transportar1_4 = 1 / (2 * comparar1_4);
    } else if (somaFinal_4 === 3.5) {
        transportar1_4 = 1 / comparar1_4;
    } else if (somaFinal_4 === 1) {
        transportar1_4 = (comparar1_4 + comparar2_4) / (4 * comparar1_4 * comparar2_4);
    } else {
        transportar1_4 = '-';
    }
    document.querySelector('.transportar1_4').textContent = transportar1_4 === '#N/D' ? transportar1_4 : transportar1_4.toFixed(6);

    // Transportar 2
    const transportar2_4 = exclusao_4 === '#N/D' || transportar1_4 === '-' ? '#N/D' : exclusao_4 > 0 ? transportar1_4 : 0;
    document.querySelector('.transportar2_4').textContent = transportar2_4 === '#N/D' ? transportar2_4 : transportar2_4.toFixed(6);

    // Índice
    const indice_4 = transportar2_4 === '#N/D' ? '#N/D' : transportar2_4 === 0 ? "Exclusão" : transportar2_4.toFixed(5);
    document.querySelector('.indice_4').textContent = indice_4;

    // Índice que será gerado
    indiceResultado_4 = indice_4;
    //console.log("Valor de indice:Resultado_4", indiceResultado_4);

    const elementoIndice4 = document.querySelector('.indice4');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice4 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice4.textContent = indiceResultado_4;
    }

    // Transportar 3
    const transportar3_4 = transportar2_4 === '#N/D' ? '#N/D' : transportar2_4 > 0 ? transportar2_4 : 1;
    document.querySelector('.transportar3_4').textContent = transportar3_4 === '#N/D' ? transportar3_4 : transportar3_4.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_4 = transportar3_4 === '#N/D';
    document.querySelector('.éNãoDisp_4').textContent = éNãoDisp_4 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_4 = éNãoDisp_4 === false ? parseFloat(transportar3_4) : 1;
    document.querySelector('.transportarFinal_4').textContent = transportarFinal_4 === '#N/D' ? transportarFinal_4 : transportarFinal_4.toFixed(5);

    // IPA
    IPA_4 = transportarFinal_4;
    document.querySelector('.ipa_4').textContent = IPA_4 === '#N/D' ? IPA_4 : IPA_4.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();

    //ATUALIZA A PORCENTAGEM FINAL
    atualizarPorcentagemIPAFinal()
}

inputs_4.forEach(input => {
    input.addEventListener('input', atualizarResultados_4);
});

atualizarResultados_4(); // Atualiza os resultados inicialmente




///// LINHA 5 - THO1 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 




const inputs_5 = document.querySelectorAll('.valor_5');
const resultados_5 = document.querySelectorAll('.resultado1_5, .resultado2_5, .resultado3_5, .resultado4_5, .resultado5_5, .resultado6_5');

let soma1_5 = 0;
let soma2_5 = 0;
let soma3_5 = 0;
let exclusao_5 = 0;
let somaFinal_5 = 0;
let IPA_5 = 0;


// Variaveis que serão geradas
var input1_5 = 0;
var input2_5 = 0;
var input3_5 = 0;
var input4_5 = 0;
var indiceResultado_5 = 0;

function getFrequencia5(value) {
    const frequencias = {
        6: 0.206,
        7: 0.222,
        8: 0.124,
        9: 0.176,
        9.3: 0.258,
        10: 0.014
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_5() {
    const valores_5 = Array.from(inputs_5).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);


    // Inputs que serão gerados
    input1_5 = valores_5[0];
    //console.log("Valor do input1_5", input1_5);
    input2_5 = valores_5[1];
    //console.log("Valor do input2_5", input2_5);
    input3_5 = valores_5[2];
    //console.log("Valor do input3_5", input3_5);
    input4_5 = valores_5[3];
    //console.log("Valor do input4_5", input4_5);


    const elementoInput1_5 = document.querySelector('.input1_5');
    const elementoInput2_5 = document.querySelector('.input2_5');
    const elementoInput3_5 = document.querySelector('.input3_5');
    const elementoInput4_5 = document.querySelector('.input4_5');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_5 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_5.textContent = input1_5;
    }

    if (elementoInput2_5 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_5.textContent = input2_5;
    }

    if (elementoInput3_5 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_5.textContent = input3_5;
    }

    if (elementoInput4_5 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_5.textContent = input4_5;
    }


    // Comparação entre campos na mesma linha
    resultados_5[0].textContent = valores_5[0] === null || valores_5[1] === null ? '#N/D' : valores_5[0] === valores_5[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_5[1].textContent = valores_5[2] === null || valores_5[3] === null ? '#N/D' : valores_5[2] === valores_5[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_5[2].textContent = valores_5[0] === null || valores_5[2] === null ? '#N/D' : valores_5[0] === valores_5[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_5[3].textContent = valores_5[0] === null || valores_5[3] === null ? '#N/D' : valores_5[0] === valores_5[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_5[4].textContent = valores_5[1] === null || valores_5[2] === null ? '#N/D' : valores_5[1] === valores_5[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_5[5].textContent = valores_5[1] === null || valores_5[3] === null ? '#N/D' : valores_5[1] === valores_5[3] ? '0.5' : '0'; // Campo2 = Campo4

    // Soma 1
    soma1_5 = (resultados_5[2].textContent === '#N/D' || resultados_5[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_5[2].textContent) + parseFloat(resultados_5[3].textContent);
    document.querySelector('.soma1_5').textContent = soma1_5 === '#N/D' ? soma1_5 : soma1_5.toFixed(2);

    // Soma 2
    soma2_5 = (resultados_5[4].textContent === '#N/D' || resultados_5[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_5[4].textContent) + parseFloat(resultados_5[5].textContent);
    document.querySelector('.soma2_5').textContent = soma2_5 === '#N/D' ? soma2_5 : soma2_5.toFixed(2);

    // Soma 3
    soma3_5 = (soma1_5 === '#N/D' || soma2_5 === '#N/D') ? '#N/D' : soma1_5 + soma2_5;
    document.querySelector('.soma3_5').textContent = soma3_5 === '#N/D' ? soma3_5 : soma3_5.toFixed(2);

    // Determinar exclusao
    exclusao_5 = soma3_5 === '#N/D' ? '#N/D' : soma3_5 > 0 ? 1 : 0;
    document.querySelector('.exclusao_5').textContent = exclusao_5;

    // Soma Final
    somaFinal_5 = (resultados_5[0].textContent === '#N/D' || resultados_5[1].textContent === '#N/D' || soma1_5 === '#N/D' || soma2_5 === '#N/D') ? '#N/D' : parseFloat(resultados_5[0].textContent) + parseFloat(resultados_5[1].textContent) + soma1_5 + soma2_5;
    document.querySelector('.somaFinal_5').textContent = somaFinal_5 === '#N/D' ? somaFinal_5 : somaFinal_5.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_5 = (soma1_5 === '#N/D' || valores_5[0] === null || valores_5[1] === null) ? '#N/D' : soma1_5 > 0 ? getFrequencia5(valores_5[0]) : getFrequencia5(valores_5[1]);
    document.querySelector('.comparar1_5').textContent = comparar1_5 === '#N/D' ? comparar1_5 : comparar1_5.toFixed(3);

    const comparar2_5 = (soma2_5 === '#N/D' || valores_5[1] === null) ? '#N/D' : soma2_5 > 0 ? getFrequencia5(valores_5[1]) : '-';
    document.querySelector('.comparar2_5').textContent = comparar2_5;

    // Transportar 1
    let transportar1_5 = '#N/D';
    if (somaFinal_5 === '#N/D' || comparar1_5 === '#N/D' || comparar2_5 === '#N/D') {
        transportar1_5 = '#N/D';
    } else if (somaFinal_5 === 0.5) {
        transportar1_5 = 1 / (4 * comparar1_5);
    } else if (somaFinal_5 === 1.5) {
        transportar1_5 = 1 / (2 * comparar1_5);
    } else if (somaFinal_5 === 2) {
        transportar1_5 = 1 / (2 * comparar1_5);
    } else if (somaFinal_5 === 3.5) {
        transportar1_5 = 1 / comparar1_5;
    } else if (somaFinal_5 === 1) {
        transportar1_5 = (comparar1_5 + comparar2_5) / (4 * comparar1_5 * comparar2_5);
    } else {
        transportar1_5 = '-';
    }
    document.querySelector('.transportar1_5').textContent = transportar1_5 === '#N/D' ? transportar1_5 : transportar1_5.toFixed(6);

    // Transportar 2
    const transportar2_5 = exclusao_5 === '#N/D' || transportar1_5 === '-' ? '#N/D' : exclusao_5 > 0 ? transportar1_5 : 0;
    document.querySelector('.transportar2_5').textContent = transportar2_5 === '#N/D' ? transportar2_5 : transportar2_5.toFixed(6);

    // Índice
    const indice_5 = transportar2_5 === '#N/D' ? '#N/D' : transportar2_5 === 0 ? "Exclusão" : transportar2_5.toFixed(5);
    document.querySelector('.indice_5').textContent = indice_5;

    // Índice que será gerado
    indiceResultado_5 = indice_5;
    //console.log("Valor de indice:Resultado_5", indiceResultado_5);

    const elementoIndice5 = document.querySelector('.indice5');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice5 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice5.textContent = indiceResultado_5;
    }


    // Transportar 3
    const transportar3_5 = transportar2_5 === '#N/D' ? '#N/D' : transportar2_5 > 0 ? transportar2_5 : 1;
    document.querySelector('.transportar3_5').textContent = transportar3_5 === '#N/D' ? transportar3_5 : transportar3_5.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_5 = transportar3_5 === '#N/D';
    document.querySelector('.éNãoDisp_5').textContent = éNãoDisp_5 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_5 = éNãoDisp_5 === false ? parseFloat(transportar3_5) : 1;
    document.querySelector('.transportarFinal_5').textContent = transportarFinal_5 === '#N/D' ? transportarFinal_5 : transportarFinal_5.toFixed(5);

    // IPA
    IPA_5 = transportarFinal_5;
    document.querySelector('.ipa_5').textContent = IPA_5 === '#N/D' ? IPA_5 : IPA_5.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_5.forEach(input => {
    input.addEventListener('input', atualizarResultados_5);
});

atualizarResultados_5(); // Atualiza os resultados inicialmente



//////// LINHA 6 - D13S317 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 



const inputs_6 = document.querySelectorAll('.valor_6');
const resultados_6 = document.querySelectorAll('.resultado1_6, .resultado2_6, .resultado3_6, .resultado4_6, .resultado5_6, .resultado6_6');

let soma1_6 = 0;
let soma2_6 = 0;
let soma3_6 = 0;
let exclusao_6 = 0;
let somaFinal_6 = 0;
let IPA_6 = 0;

// Variaveis que serão geradas
var input1_6 = 0;
var input2_6 = 0;
var input3_6 = 0;
var input4_6 = 0;
var indiceResultado_6 = 0;

function getFrequencia6(value) {
    const frequencias = {
        8: 0.113,
        9: 0.095,
        10: 0.055,
        11: 0.298,
        12: 0.274,
        13: 0.114,
        14: 0.048,
        15: 0.003
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_6() {
    const valores_6 = Array.from(inputs_6).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_6 = valores_6[0];
    //console.log("Valor do input1_6", input1_6);
    input2_6 = valores_6[1];
    //console.log("Valor do input2_6", input2_6);
    input3_6 = valores_6[2];
    //console.log("Valor do input3_6", input3_6);
    input4_6 = valores_6[3];
    //console.log("Valor do input4_6", input4_6);

    const elementoInput1_6 = document.querySelector('.input1_6');
    const elementoInput2_6 = document.querySelector('.input2_6');
    const elementoInput3_6 = document.querySelector('.input3_6');
    const elementoInput4_6 = document.querySelector('.input4_6');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_6 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_6.textContent = input1_6;
    }

    if (elementoInput2_6 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_6.textContent = input2_6;
    }

    if (elementoInput3_6 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_6.textContent = input3_6;
    }

    if (elementoInput4_6 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_6.textContent = input4_6;
    }



    // Comparação entre campos na mesma linha
    resultados_6[0].textContent = valores_6[0] === null || valores_6[1] === null ? '#N/D' : valores_6[0] === valores_6[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_6[1].textContent = valores_6[2] === null || valores_6[3] === null ? '#N/D' : valores_6[2] === valores_6[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_6[2].textContent = valores_6[0] === null || valores_6[2] === null ? '#N/D' : valores_6[0] === valores_6[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_6[3].textContent = valores_6[0] === null || valores_6[3] === null ? '#N/D' : valores_6[0] === valores_6[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_6[4].textContent = valores_6[1] === null || valores_6[2] === null ? '#N/D' : valores_6[1] === valores_6[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_6[5].textContent = valores_6[1] === null || valores_6[3] === null ? '#N/D' : valores_6[1] === valores_6[3] ? '0.5' : '0'; // Campo2 = Campo4

    // Soma 1
    soma1_6 = (resultados_6[2].textContent === '#N/D' || resultados_6[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_6[2].textContent) + parseFloat(resultados_6[3].textContent);
    document.querySelector('.soma1_6').textContent = soma1_6 === '#N/D' ? soma1_6 : soma1_6.toFixed(2);

    // Soma 2
    soma2_6 = (resultados_6[4].textContent === '#N/D' || resultados_6[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_6[4].textContent) + parseFloat(resultados_6[5].textContent);
    document.querySelector('.soma2_6').textContent = soma2_6 === '#N/D' ? soma2_6 : soma2_6.toFixed(2);

    // Soma 3
    soma3_6 = (soma1_6 === '#N/D' || soma2_6 === '#N/D') ? '#N/D' : soma1_6 + soma2_6;
    document.querySelector('.soma3_6').textContent = soma3_6 === '#N/D' ? soma3_6 : soma3_6.toFixed(2);

    // Determinar exclusao
    exclusao_6 = soma3_6 === '#N/D' ? '#N/D' : soma3_6 > 0 ? 1 : 0;
    document.querySelector('.exclusao_6').textContent = exclusao_6;

    // Soma Final
    somaFinal_6 = (resultados_6[0].textContent === '#N/D' || resultados_6[1].textContent === '#N/D' || soma1_6 === '#N/D' || soma2_6 === '#N/D') ? '#N/D' : parseFloat(resultados_6[0].textContent) + parseFloat(resultados_6[1].textContent) + soma1_6 + soma2_6;
    document.querySelector('.somaFinal_6').textContent = somaFinal_6 === '#N/D' ? somaFinal_6 : somaFinal_6.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_6 = (soma1_6 === '#N/D' || valores_6[0] === null || valores_6[1] === null) ? '#N/D' : soma1_6 > 0 ? getFrequencia6(valores_6[0]) : getFrequencia6(valores_6[1]);
    document.querySelector('.comparar1_6').textContent = comparar1_6 === '#N/D' ? comparar1_6 : comparar1_6.toFixed(3);

    const comparar2_6 = (soma2_6 === '#N/D' || valores_6[1] === null) ? '#N/D' : soma2_6 > 0 ? getFrequencia6(valores_6[1]) : '-';
    document.querySelector('.comparar2_6').textContent = comparar2_6;

    // Transportar 1
    let transportar1_6 = '#N/D';
    if (somaFinal_6 === '#N/D' || comparar1_6 === '#N/D' || comparar2_6 === '#N/D') {
        transportar1_6 = '#N/D';
    } else if (somaFinal_6 === 0.5) {
        transportar1_6 = 1 / (4 * comparar1_6);
    } else if (somaFinal_6 === 1.5) {
        transportar1_6 = 1 / (2 * comparar1_6);
    } else if (somaFinal_6 === 2) {
        transportar1_6 = 1 / (2 * comparar1_6);
    } else if (somaFinal_6 === 3.5) {
        transportar1_6 = 1 / comparar1_6;
    } else if (somaFinal_6 === 1) {
        transportar1_6 = (comparar1_6 + comparar2_6) / (4 * comparar1_6 * comparar2_6);
    } else {
        transportar1_6 = '-';
    }
    document.querySelector('.transportar1_6').textContent = transportar1_6 === '#N/D' ? transportar1_6 : transportar1_6.toFixed(6);

    // Transportar 2
    const transportar2_6 = exclusao_6 === '#N/D' || transportar1_6 === '-' ? '#N/D' : exclusao_6 > 0 ? transportar1_6 : 0;
    document.querySelector('.transportar2_6').textContent = transportar2_6 === '#N/D' ? transportar2_6 : transportar2_6.toFixed(6);

    // Índice
    const indice_6 = transportar2_6 === '#N/D' ? '#N/D' : transportar2_6 === 0 ? "Exclusão" : transportar2_6.toFixed(5);
    document.querySelector('.indice_6').textContent = indice_6;

    // Índice que será gerado
    indiceResultado_6 = indice_6;
    //console.log("Valor de indice:Resultado_6", indiceResultado_6);


    const elementoIndice6 = document.querySelector('.indice6');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice6 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice6.textContent = indiceResultado_6;
    }

    // Transportar 3
    const transportar3_6 = transportar2_6 === '#N/D' ? '#N/D' : transportar2_6 > 0 ? transportar2_6 : 1;
    document.querySelector('.transportar3_6').textContent = transportar3_6 === '#N/D' ? transportar3_6 : transportar3_6.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_6 = transportar3_6 === '#N/D';
    document.querySelector('.éNãoDisp_6').textContent = éNãoDisp_6 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_6 = éNãoDisp_6 === false ? parseFloat(transportar3_6) : 1;
    document.querySelector('.transportarFinal_6').textContent = transportarFinal_6 === '#N/D' ? transportarFinal_6 : transportarFinal_6.toFixed(5);

    // IPA
    IPA_6 = transportarFinal_6;
    document.querySelector('.ipa_6').textContent = IPA_6 === '#N/D' ? IPA_6 : IPA_6.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_6.forEach(input => {
    input.addEventListener('input', atualizarResultados_6);
});

atualizarResultados_6(); // Atualiza os resultados inicialmente






//////// LINHA 7 - D16S539 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 




const inputs_7 = document.querySelectorAll('.valor_7');
const resultados_7 = document.querySelectorAll('.resultado1_7, .resultado2_7, .resultado3_7, .resultado4_7, .resultado5_7, .resultado6_7');

let soma1_7 = 0;
let soma2_7 = 0;
let soma3_7 = 0;
let exclusao_7 = 0;
let somaFinal_7 = 0;
let IPA_7 = 0;

// Variaveis que serão geradas
var input1_7 = 0;
var input2_7 = 0;
var input3_7 = 0;
var input4_7 = 0;
var indiceResultado_7 = 0;

function getFrequencia7(value) {
    const frequencias = {
        5: 0.001,
        8: 0.023,
        9: 0.159,
        10: 0.084,
        11: 0.295,
        12: 0.250,
        13: 0.156,
        14: 0.029,
        15: 0.003
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_7() {
    const valores_7 = Array.from(inputs_7).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_7 = valores_7[0];
    //console.log("Valor do input1_7", input1_7);
    input2_7 = valores_7[1];
    //console.log("Valor do input2_7", input2_7);
    input3_7 = valores_7[2];
    //console.log("Valor do input3_7", input3_7);
    input4_7 = valores_7[3];
    //console.log("Valor do input4_7", input4_7);


    const elementoInput1_7 = document.querySelector('.input1_7');
    const elementoInput2_7 = document.querySelector('.input2_7');
    const elementoInput3_7 = document.querySelector('.input3_7');
    const elementoInput4_7 = document.querySelector('.input4_7');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_7 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_7.textContent = input1_7;
    }

    if (elementoInput2_7 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_7.textContent = input2_7;
    }

    if (elementoInput3_7 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_7.textContent = input3_7;
    }

    if (elementoInput4_7 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_7.textContent = input4_7;
    }

    // Comparação entre campos na mesma linha
    resultados_7[0].textContent = valores_7[0] === null || valores_7[1] === null ? '#N/D' : valores_7[0] === valores_7[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_7[1].textContent = valores_7[2] === null || valores_7[3] === null ? '#N/D' : valores_7[2] === valores_7[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_7[2].textContent = valores_7[0] === null || valores_7[2] === null ? '#N/D' : valores_7[0] === valores_7[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_7[3].textContent = valores_7[0] === null || valores_7[3] === null ? '#N/D' : valores_7[0] === valores_7[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_7[4].textContent = valores_7[1] === null || valores_7[2] === null ? '#N/D' : valores_7[1] === valores_7[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_7[5].textContent = valores_7[1] === null || valores_7[3] === null ? '#N/D' : valores_7[1] === valores_7[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_7 = (resultados_7[2].textContent === '#N/D' || resultados_7[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_7[2].textContent) + parseFloat(resultados_7[3].textContent);
    document.querySelector('.soma1_7').textContent = soma1_7 === '#N/D' ? soma1_7 : soma1_7.toFixed(2);

    // Soma 2
    soma2_7 = (resultados_7[4].textContent === '#N/D' || resultados_7[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_7[4].textContent) + parseFloat(resultados_7[5].textContent);
    document.querySelector('.soma2_7').textContent = soma2_7 === '#N/D' ? soma2_7 : soma2_7.toFixed(2);

    // Soma 3
    soma3_7 = (soma1_7 === '#N/D' || soma2_7 === '#N/D') ? '#N/D' : soma1_7 + soma2_7;
    document.querySelector('.soma3_7').textContent = soma3_7 === '#N/D' ? soma3_7 : soma3_7.toFixed(2);

    // Determinar exclusao
    exclusao_7 = soma3_7 === '#N/D' ? '#N/D' : soma3_7 > 0 ? 1 : 0;
    document.querySelector('.exclusao_7').textContent = exclusao_7;

    // Soma Final
    somaFinal_7 = (resultados_7[0].textContent === '#N/D' || resultados_7[1].textContent === '#N/D' || soma1_7 === '#N/D' || soma2_7 === '#N/D') ? '#N/D' : parseFloat(resultados_7[0].textContent) + parseFloat(resultados_7[1].textContent) + soma1_7 + soma2_7;
    document.querySelector('.somaFinal_7').textContent = somaFinal_7 === '#N/D' ? somaFinal_7 : somaFinal_7.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_7 = (soma1_7 === '#N/D' || valores_7[0] === null || valores_7[1] === null) ? '#N/D' : soma1_7 > 0 ? getFrequencia7(valores_7[0]) : getFrequencia7(valores_7[1]);
    document.querySelector('.comparar1_7').textContent = comparar1_7 === '#N/D' ? comparar1_7 : comparar1_7.toFixed(3);

    const comparar2_7 = (soma2_7 === '#N/D' || valores_7[1] === null) ? '#N/D' : soma2_7 > 0 ? getFrequencia7(valores_7[1]) : '-';
    document.querySelector('.comparar2_7').textContent = comparar2_7;

    // Transportar 1
    let transportar1_7 = '#N/D';
    if (somaFinal_7 === '#N/D' || comparar1_7 === '#N/D' || comparar2_7 === '#N/D') {
        transportar1_7 = '#N/D';
    } else if (somaFinal_7 === 0.5) {
        transportar1_7 = 1 / (4 * comparar1_7);
    } else if (somaFinal_7 === 1.5) {
        transportar1_7 = 1 / (2 * comparar1_7);
    } else if (somaFinal_7 === 2) {
        transportar1_7 = 1 / (2 * comparar1_7);
    } else if (somaFinal_7 === 3.5) {
        transportar1_7 = 1 / comparar1_7;
    } else if (somaFinal_7 === 1) {
        transportar1_7 = (comparar1_7 + comparar2_7) / (4 * comparar1_7 * comparar2_7);
    } else {
        transportar1_7 = '-';
    }
    document.querySelector('.transportar1_7').textContent = transportar1_7 === '#N/D' ? transportar1_7 : transportar1_7.toFixed(6);

    // Transportar 2
    const transportar2_7 = exclusao_7 === '#N/D' || transportar1_7 === '-' ? '#N/D' : exclusao_7 > 0 ? transportar1_7 : 0;
    document.querySelector('.transportar2_7').textContent = transportar2_7 === '#N/D' ? transportar2_7 : transportar2_7.toFixed(6);

    // Índice
    const indice_7 = transportar2_7 === '#N/D' ? '#N/D' : transportar2_7 === 0 ? "Exclusão" : transportar2_7.toFixed(5);
    document.querySelector('.indice_7').textContent = indice_7;

    // Índice que será gerado
    indiceResultado_7 = indice_7;
    //console.log("Valor de indice:Resultado_7", indiceResultado_7);

    const elementoIndice7 = document.querySelector('.indice7');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice7 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice7.textContent = indiceResultado_7;
    }

    // Transportar 3
    const transportar3_7 = transportar2_7 === '#N/D' ? '#N/D' : transportar2_7 > 0 ? transportar2_7 : 1;
    document.querySelector('.transportar3_7').textContent = transportar3_7 === '#N/D' ? transportar3_7 : transportar3_7.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_7 = transportar3_7 === '#N/D';
    document.querySelector('.éNãoDisp_7').textContent = éNãoDisp_7 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_7 = éNãoDisp_7 === false ? parseFloat(transportar3_7) : 1;
    document.querySelector('.transportarFinal_7').textContent = transportarFinal_7 === '#N/D' ? transportarFinal_7 : transportarFinal_7.toFixed(5);

    // IPA
    IPA_7 = transportarFinal_7;
    document.querySelector('.ipa_7').textContent = IPA_7 === '#N/D' ? IPA_7 : IPA_7.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_7.forEach(input => {
    input.addEventListener('input', atualizarResultados_7);
});

atualizarResultados_7(); // Atualiza os resultados inicialmente






////////// LINHA 8 - D2S1338 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 






const inputs_8 = document.querySelectorAll('.valor_8');
const resultados_8 = document.querySelectorAll('.resultado1_8, .resultado2_8, .resultado3_8, .resultado4_8, .resultado5_8, .resultado6_8');

let soma1_8 = 0;
let soma2_8 = 0;
let soma3_8 = 0;
let exclusao_8 = 0;
let somaFinal_8 = 0;
let IPA_8 = 0;


// Variaveis que serão geradas
var input1_8 = 0;
var input2_8 = 0;
var input3_8 = 0;
var input4_8 = 0;
var indiceResultado_8 = 0;

function getFrequencia8(value) {
    const frequencias = {
        13: 0.0024,
        14: 0.0016,
        15: 0.0016,
        16: 0.045,
        17: 0.2077,
        18: 0.0742,
        19: 0.1224,
        20: 0.1367,
        21: 0.060,
        22: 0.0814,
        23: 0.1169,
        24: 0.0758,
        25: 0.0553,
        26: 0.0174,
        27: 0.0016
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_8() {
    const valores_8 = Array.from(inputs_8).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_8 = valores_8[0];
    //console.log("Valor do input1_8", input1_8);
    input2_8 = valores_8[1];
    //console.log("Valor do input2_8", input2_8);
    input3_8 = valores_8[2];
    //console.log("Valor do input3_8", input3_8);
    input4_8 = valores_8[3];
    //console.log("Valor do input4_8", input4_8);


    const elementoInput1_8 = document.querySelector('.input1_8');
    const elementoInput2_8 = document.querySelector('.input2_8');
    const elementoInput3_8 = document.querySelector('.input3_8');
    const elementoInput4_8 = document.querySelector('.input4_8');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_8 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_8.textContent = input1_8;
    }

    if (elementoInput2_8 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_8.textContent = input2_8;
    }

    if (elementoInput3_8 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_8.textContent = input3_8;
    }

    if (elementoInput4_8 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_8.textContent = input4_8;
    }

    // Comparação entre campos na mesma linha
    resultados_8[0].textContent = valores_8[0] === null || valores_8[1] === null ? '#N/D' : valores_8[0] === valores_8[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_8[1].textContent = valores_8[2] === null || valores_8[3] === null ? '#N/D' : valores_8[2] === valores_8[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_8[2].textContent = valores_8[0] === null || valores_8[2] === null ? '#N/D' : valores_8[0] === valores_8[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_8[3].textContent = valores_8[0] === null || valores_8[3] === null ? '#N/D' : valores_8[0] === valores_8[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_8[4].textContent = valores_8[1] === null || valores_8[2] === null ? '#N/D' : valores_8[1] === valores_8[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_8[5].textContent = valores_8[1] === null || valores_8[3] === null ? '#N/D' : valores_8[1] === valores_8[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_8 = (resultados_8[2].textContent === '#N/D' || resultados_8[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_8[2].textContent) + parseFloat(resultados_8[3].textContent);
    document.querySelector('.soma1_8').textContent = soma1_8 === '#N/D' ? soma1_8 : soma1_8.toFixed(2);

    // Soma 2
    soma2_8 = (resultados_8[4].textContent === '#N/D' || resultados_8[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_8[4].textContent) + parseFloat(resultados_8[5].textContent);
    document.querySelector('.soma2_8').textContent = soma2_8 === '#N/D' ? soma2_8 : soma2_8.toFixed(2);

    // Soma 3
    soma3_8 = (soma1_8 === '#N/D' || soma2_8 === '#N/D') ? '#N/D' : soma1_8 + soma2_8;
    document.querySelector('.soma3_8').textContent = soma3_8 === '#N/D' ? soma3_8 : soma3_8.toFixed(2);

    // Determinar exclusao
    exclusao_8 = soma3_8 === '#N/D' ? '#N/D' : soma3_8 > 0 ? 1 : 0;
    document.querySelector('.exclusao_8').textContent = exclusao_8;

    // Soma Final
    somaFinal_8 = (resultados_8[0].textContent === '#N/D' || resultados_8[1].textContent === '#N/D' || soma1_8 === '#N/D' || soma2_8 === '#N/D') ? '#N/D' : parseFloat(resultados_8[0].textContent) + parseFloat(resultados_8[1].textContent) + soma1_8 + soma2_8;
    document.querySelector('.somaFinal_8').textContent = somaFinal_8 === '#N/D' ? somaFinal_8 : somaFinal_8.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_8 = (soma1_8 === '#N/D' || valores_8[0] === null || valores_8[1] === null) ? '#N/D' : soma1_8 > 0 ? getFrequencia8(valores_8[0]) : getFrequencia8(valores_8[1]);
    document.querySelector('.comparar1_8').textContent = comparar1_8 === '#N/D' ? comparar1_8 : comparar1_8.toFixed(3);

    const comparar2_8 = (soma2_8 === '#N/D' || valores_8[1] === null) ? '#N/D' : soma2_8 > 0 ? getFrequencia8(valores_8[1]) : '-';
    document.querySelector('.comparar2_8').textContent = comparar2_8;

    // Transportar 1
    let transportar1_8 = '#N/D';
    if (somaFinal_8 === '#N/D' || comparar1_8 === '#N/D' || comparar2_8 === '#N/D') {
        transportar1_8 = '#N/D';
    } else if (somaFinal_8 === 0.5) {
        transportar1_8 = 1 / (4 * comparar1_8);
    } else if (somaFinal_8 === 1.5) {
        transportar1_8 = 1 / (2 * comparar1_8);
    } else if (somaFinal_8 === 2) {
        transportar1_8 = 1 / (2 * comparar1_8);
    } else if (somaFinal_8 === 3.5) {
        transportar1_8 = 1 / comparar1_8;
    } else if (somaFinal_8 === 1) {
        transportar1_8 = (comparar1_8 + comparar2_8) / (4 * comparar1_8 * comparar2_8);
    } else {
        transportar1_8 = '-';
    }
    document.querySelector('.transportar1_8').textContent = transportar1_8 === '#N/D' ? transportar1_8 : transportar1_8.toFixed(6);

    // Transportar 2
    const transportar2_8 = exclusao_8 === '#N/D' || transportar1_8 === '-' ? '#N/D' : exclusao_8 > 0 ? transportar1_8 : 0;
    document.querySelector('.transportar2_8').textContent = transportar2_8 === '#N/D' ? transportar2_8 : transportar2_8.toFixed(6);

    // Índice
    const indice_8 = transportar2_8 === '#N/D' ? '#N/D' : transportar2_8 === 0 ? "Exclusão" : transportar2_8.toFixed(5);
    document.querySelector('.indice_8').textContent = indice_8;

    // Índice que será gerado
    indiceResultado_8 = indice_8;
    //console.log("Valor de indice:Resultado_8", indiceResultado_8);


    const elementoIndice8 = document.querySelector('.indice8');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice8 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice8.textContent = indiceResultado_8;
    }

    // Transportar 3
    const transportar3_8 = transportar2_8 === '#N/D' ? '#N/D' : transportar2_8 > 0 ? transportar2_8 : 1;
    document.querySelector('.transportar3_8').textContent = transportar3_8 === '#N/D' ? transportar3_8 : transportar3_8.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_8 = transportar3_8 === '#N/D';
    document.querySelector('.éNãoDisp_8').textContent = éNãoDisp_8 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_8 = éNãoDisp_8 === false ? parseFloat(transportar3_8) : 1;
    document.querySelector('.transportarFinal_8').textContent = transportarFinal_8 === '#N/D' ? transportarFinal_8 : transportarFinal_8.toFixed(5);

    // IPA
    IPA_8 = transportarFinal_8;
    document.querySelector('.ipa_8').textContent = IPA_8 === '#N/D' ? IPA_8 : IPA_8.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_8.forEach(input => {
    input.addEventListener('input', atualizarResultados_8);
});

atualizarResultados_8(); // Atualiza os resultados inicialmente




///////// LINHA 9 - D19S433 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 




const inputs_9 = document.querySelectorAll('.valor_9');
const resultados_9 = document.querySelectorAll('.resultado1_9, .resultado2_9, .resultado3_9, .resultado4_9, .resultado5_9, .resultado6_9');

let soma1_9 = 0;
let soma2_9 = 0;
let soma3_9 = 0;
let exclusao_9 = 0;
let somaFinal_9 = 0;
let IPA_9 = 0;


// Variaveis que serão geradas
var input1_9 = 0;
var input2_9 = 0;
var input3_9 = 0;
var input4_9 = 0;
var indiceResultado_9 = 0;

function getFrequencia9(value) {
    const frequencias = {
        9: 0.0008,
        10: 0.0016,
        11: 0.0175,
        11.2: 0.0008,
        12: 0.101,
        12.2: 0.0095,
        13: 0.2369,
        13.2: 0.0326,
        14: 0.2941,
        14.2: 0.0318,
        15: 0.1518,
        15.2: 0.0588,
        16: 0.035,
        16.2: 0.0215,
        17: 0.004,
        17.2: 0.0016,
        18.2: 0.0008
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_9() {
    const valores_9 = Array.from(inputs_9).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_9 = valores_9[0];
    //console.log("Valor do input1_9", input1_9);
    input2_9 = valores_9[1];
    //console.log("Valor do input2_9", input2_9);
    input3_9 = valores_9[2];
    //console.log("Valor do input3_9", input3_9);
    input4_9 = valores_9[3];
    //console.log("Valor do input4_9", input4_9);


    const elementoInput1_9 = document.querySelector('.input1_9');
    const elementoInput2_9 = document.querySelector('.input2_9');
    const elementoInput3_9 = document.querySelector('.input3_9');
    const elementoInput4_9 = document.querySelector('.input4_9');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_9 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_9.textContent = input1_9;
    }

    if (elementoInput2_9 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_9.textContent = input2_9;
    }

    if (elementoInput3_9 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_9.textContent = input3_9;
    }

    if (elementoInput4_9 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_9.textContent = input4_9;
    }

    // Comparação entre campos na mesma linha
    resultados_9[0].textContent = valores_9[0] === null || valores_9[1] === null ? '#N/D' : valores_9[0] === valores_9[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_9[1].textContent = valores_9[2] === null || valores_9[3] === null ? '#N/D' : valores_9[2] === valores_9[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_9[2].textContent = valores_9[0] === null || valores_9[2] === null ? '#N/D' : valores_9[0] === valores_9[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_9[3].textContent = valores_9[0] === null || valores_9[3] === null ? '#N/D' : valores_9[0] === valores_9[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_9[4].textContent = valores_9[1] === null || valores_9[2] === null ? '#N/D' : valores_9[1] === valores_9[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_9[5].textContent = valores_9[1] === null || valores_9[3] === null ? '#N/D' : valores_9[1] === valores_9[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_9 = (resultados_9[2].textContent === '#N/D' || resultados_9[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_9[2].textContent) + parseFloat(resultados_9[3].textContent);
    document.querySelector('.soma1_9').textContent = soma1_9 === '#N/D' ? soma1_9 : soma1_9.toFixed(2);

    // Soma 2
    soma2_9 = (resultados_9[4].textContent === '#N/D' || resultados_9[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_9[4].textContent) + parseFloat(resultados_9[5].textContent);
    document.querySelector('.soma2_9').textContent = soma2_9 === '#N/D' ? soma2_9 : soma2_9.toFixed(2);

    // Soma 3
    soma3_9 = (soma1_9 === '#N/D' || soma2_9 === '#N/D') ? '#N/D' : soma1_9 + soma2_9;
    document.querySelector('.soma3_9').textContent = soma3_9 === '#N/D' ? soma3_9 : soma3_9.toFixed(2);

    // Determinar exclusao
    exclusao_9 = soma3_9 === '#N/D' ? '#N/D' : soma3_9 > 0 ? 1 : 0;
    document.querySelector('.exclusao_9').textContent = exclusao_9;

    // Soma Final
    somaFinal_9 = (resultados_9[0].textContent === '#N/D' || resultados_9[1].textContent === '#N/D' || soma1_9 === '#N/D' || soma2_9 === '#N/D') ? '#N/D' : parseFloat(resultados_9[0].textContent) + parseFloat(resultados_9[1].textContent) + soma1_9 + soma2_9;
    document.querySelector('.somaFinal_9').textContent = somaFinal_9 === '#N/D' ? somaFinal_9 : somaFinal_9.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_9 = (soma1_9 === '#N/D' || valores_9[0] === null || valores_9[1] === null) ? '#N/D' : soma1_9 > 0 ? getFrequencia9(valores_9[0]) : getFrequencia9(valores_9[1]);
    document.querySelector('.comparar1_9').textContent = comparar1_9 === '#N/D' ? comparar1_9 : comparar1_9.toFixed(3);

    const comparar2_9 = (soma2_9 === '#N/D' || valores_9[1] === null) ? '#N/D' : soma2_9 > 0 ? getFrequencia9(valores_9[1]) : '-';
    document.querySelector('.comparar2_9').textContent = comparar2_9;

    // Transportar 1
    let transportar1_9 = '#N/D';
    if (somaFinal_9 === '#N/D' || comparar1_9 === '#N/D' || comparar2_9 === '#N/D') {
        transportar1_9 = '#N/D';
    } else if (somaFinal_9 === 0.5) {
        transportar1_9 = 1 / (4 * comparar1_9);
    } else if (somaFinal_9 === 1.5) {
        transportar1_9 = 1 / (2 * comparar1_9);
    } else if (somaFinal_9 === 2) {
        transportar1_9 = 1 / (2 * comparar1_9);
    } else if (somaFinal_9 === 3.5) {
        transportar1_9 = 1 / comparar1_9;
    } else if (somaFinal_9 === 1) {
        transportar1_9 = (comparar1_9 + comparar2_9) / (4 * comparar1_9 * comparar2_9);
    } else {
        transportar1_9 = '-';
    }
    document.querySelector('.transportar1_9').textContent = transportar1_9 === '#N/D' ? transportar1_9 : transportar1_9.toFixed(6);

    // Transportar 2
    const transportar2_9 = exclusao_9 === '#N/D' || transportar1_9 === '-' ? '#N/D' : exclusao_9 > 0 ? transportar1_9 : 0;
    document.querySelector('.transportar2_9').textContent = transportar2_9 === '#N/D' ? transportar2_9 : transportar2_9.toFixed(6);

    // Índice
    const indice_9 = transportar2_9 === '#N/D' ? '#N/D' : transportar2_9 === 0 ? "Exclusão" : transportar2_9.toFixed(5);
    document.querySelector('.indice_9').textContent = indice_9;

    // Índice que será gerado
    indiceResultado_9 = indice_9;
    //console.log("Valor de indice:Resultado_9", indiceResultado_9);


    const elementoIndice9 = document.querySelector('.indice9');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice9 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice9.textContent = indiceResultado_9;
    }

    // Transportar 3
    const transportar3_9 = transportar2_9 === '#N/D' ? '#N/D' : transportar2_9 > 0 ? transportar2_9 : 1;
    document.querySelector('.transportar3_9').textContent = transportar3_9 === '#N/D' ? transportar3_9 : transportar3_9.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_9 = transportar3_9 === '#N/D';
    document.querySelector('.éNãoDisp_9').textContent = éNãoDisp_9 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_9 = éNãoDisp_9 === false ? parseFloat(transportar3_9) : 1;
    document.querySelector('.transportarFinal_9').textContent = transportarFinal_9 === '#N/D' ? transportarFinal_9 : transportarFinal_9.toFixed(5);

    // IPA
    IPA_9 = transportarFinal_9;
    document.querySelector('.ipa_9').textContent = IPA_9 === '#N/D' ? IPA_9 : IPA_9.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_9.forEach(input => {
    input.addEventListener('input', atualizarResultados_9);
});

atualizarResultados_9(); // Atualiza os resultados inicialmente





/////// LINHA 10 - VWA /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 





const inputs_10 = document.querySelectorAll('.valor_10');
const resultados_10 = document.querySelectorAll('.resultado1_10, .resultado2_10, .resultado3_10, .resultado4_10, .resultado5_10, .resultado6_10');

let soma1_10 = 0;
let soma2_10 = 0;
let soma3_10 = 0;
let exclusao_10 = 0;
let somaFinal_10 = 0;
let IPA_10 = 0;


// Variaveis que serão geradas
var input1_10 = 0;
var input2_10 = 0;
var input3_10 = 0;
var input4_10 = 0;
var indiceResultado_10 = 0;

function getFrequencia10(value) {
    const frequencias = {
        11: 0.002,
        13: 0.006,
        14: 0.084,
        15: 0.123,
        16: 0.246,
        17: 0.218,
        18: 0.184,
        19: 0.061,
        20: 0.019,
        21: 0.001
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_10() {
    const valores_10 = Array.from(inputs_10).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_10 = valores_10[0];
    //console.log("Valor do input1_10", input1_10);
    input2_10 = valores_10[1];
    //console.log("Valor do input2_10", input2_10);
    input3_10 = valores_10[2];
    //console.log("Valor do input3_10", input3_10);
    input4_10 = valores_10[3];
    //console.log("Valor do input4_10", input4_10);

    const elementoInput1_10 = document.querySelector('.input1_10');
    const elementoInput2_10 = document.querySelector('.input2_10');
    const elementoInput3_10 = document.querySelector('.input3_10');
    const elementoInput4_10 = document.querySelector('.input4_10');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_10 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_10.textContent = input1_10;
    }

    if (elementoInput2_10 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_10.textContent = input2_10;
    }

    if (elementoInput3_10 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_10.textContent = input3_10;
    }

    if (elementoInput4_10 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_10.textContent = input4_10;
    }


    // Comparação entre campos na mesma linha
    resultados_10[0].textContent = valores_10[0] === null || valores_10[1] === null ? '#N/D' : valores_10[0] === valores_10[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_10[1].textContent = valores_10[2] === null || valores_10[3] === null ? '#N/D' : valores_10[2] === valores_10[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_10[2].textContent = valores_10[0] === null || valores_10[2] === null ? '#N/D' : valores_10[0] === valores_10[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_10[3].textContent = valores_10[0] === null || valores_10[3] === null ? '#N/D' : valores_10[0] === valores_10[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_10[4].textContent = valores_10[1] === null || valores_10[2] === null ? '#N/D' : valores_10[1] === valores_10[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_10[5].textContent = valores_10[1] === null || valores_10[3] === null ? '#N/D' : valores_10[1] === valores_10[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_10 = (resultados_10[2].textContent === '#N/D' || resultados_10[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_10[2].textContent) + parseFloat(resultados_10[3].textContent);
    document.querySelector('.soma1_10').textContent = soma1_10 === '#N/D' ? soma1_10 : soma1_10.toFixed(2);

    // Soma 2
    soma2_10 = (resultados_10[4].textContent === '#N/D' || resultados_10[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_10[4].textContent) + parseFloat(resultados_10[5].textContent);
    document.querySelector('.soma2_10').textContent = soma2_10 === '#N/D' ? soma2_10 : soma2_10.toFixed(2);

    // Soma 3
    soma3_10 = (soma1_10 === '#N/D' || soma2_10 === '#N/D') ? '#N/D' : soma1_10 + soma2_10;
    document.querySelector('.soma3_10').textContent = soma3_10 === '#N/D' ? soma3_10 : soma3_10.toFixed(2);

    // Determinar exclusao
    exclusao_10 = soma3_10 === '#N/D' ? '#N/D' : soma3_10 > 0 ? 1 : 0;
    document.querySelector('.exclusao_10').textContent = exclusao_10;

    // Soma Final
    somaFinal_10 = (resultados_10[0].textContent === '#N/D' || resultados_10[1].textContent === '#N/D' || soma1_10 === '#N/D' || soma2_10 === '#N/D') ? '#N/D' : parseFloat(resultados_10[0].textContent) + parseFloat(resultados_10[1].textContent) + soma1_10 + soma2_10;
    document.querySelector('.somaFinal_10').textContent = somaFinal_10 === '#N/D' ? somaFinal_10 : somaFinal_10.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_10 = (soma1_10 === '#N/D' || valores_10[0] === null || valores_10[1] === null) ? '#N/D' : soma1_10 > 0 ? getFrequencia10(valores_10[0]) : getFrequencia10(valores_10[1]);
    document.querySelector('.comparar1_10').textContent = comparar1_10 === '#N/D' ? comparar1_10 : comparar1_10.toFixed(3);

    const comparar2_10 = (soma2_10 === '#N/D' || valores_10[1] === null) ? '#N/D' : soma2_10 > 0 ? getFrequencia10(valores_10[1]) : '-';
    document.querySelector('.comparar2_10').textContent = comparar2_10;

    // Transportar 1
    let transportar1_10 = '#N/D';
    if (somaFinal_10 === '#N/D' || comparar1_10 === '#N/D' || comparar2_10 === '#N/D') {
        transportar1_10 = '#N/D';
    } else if (somaFinal_10 === 0.5) {
        transportar1_10 = 1 / (4 * comparar1_10);
    } else if (somaFinal_10 === 1.5) {
        transportar1_10 = 1 / (2 * comparar1_10);
    } else if (somaFinal_10 === 2) {
        transportar1_10 = 1 / (2 * comparar1_10);
    } else if (somaFinal_10 === 3.5) {
        transportar1_10 = 1 / comparar1_10;
    } else if (somaFinal_10 === 1) {
        transportar1_10 = (comparar1_10 + comparar2_10) / (4 * comparar1_10 * comparar2_10);
    } else {
        transportar1_10 = '-';
    }
    document.querySelector('.transportar1_10').textContent = transportar1_10 === '#N/D' ? transportar1_10 : transportar1_10.toFixed(6);

    // Transportar 2
    const transportar2_10 = exclusao_10 === '#N/D' || transportar1_10 === '-' ? '#N/D' : exclusao_10 > 0 ? transportar1_10 : 0;
    document.querySelector('.transportar2_10').textContent = transportar2_10 === '#N/D' ? transportar2_10 : transportar2_10.toFixed(6);

    // Índice
    const indice_10 = transportar2_10 === '#N/D' ? '#N/D' : transportar2_10 === 0 ? "Exclusão" : transportar2_10.toFixed(5);
    document.querySelector('.indice_10').textContent = indice_10;

    // Índice que será gerado
    indiceResultado_10 = indice_10;
    //console.log("Valor de indice:Resultado_10", indiceResultado_10);


    const elementoIndice10 = document.querySelector('.indice10');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice10 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice10.textContent = indiceResultado_10;
    }

    // Transportar 3
    const transportar3_10 = transportar2_10 === '#N/D' ? '#N/D' : transportar2_10 > 0 ? transportar2_10 : 1;
    document.querySelector('.transportar3_10').textContent = transportar3_10 === '#N/D' ? transportar3_10 : transportar3_10.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_10 = transportar3_10 === '#N/D';
    document.querySelector('.éNãoDisp_10').textContent = éNãoDisp_10 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_10 = éNãoDisp_10 === false ? parseFloat(transportar3_10) : 1;
    document.querySelector('.transportarFinal_10').textContent = transportarFinal_10 === '#N/D' ? transportarFinal_10 : transportarFinal_10.toFixed(5);

    // IPA
    IPA_10 = transportarFinal_10;
    document.querySelector('.ipa_10').textContent = IPA_10 === '#N/D' ? IPA_10 : IPA_10.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_10.forEach(input => {
    input.addEventListener('input', atualizarResultados_10);
});

atualizarResultados_10(); // Atualiza os resultados inicialmente




//////// LINHA 11 - TPOX /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 




const inputs_11 = document.querySelectorAll('.valor_11');
const resultados_11 = document.querySelectorAll('.resultado1_11, .resultado2_11, .resultado3_11, .resultado4_11, .resultado5_11, .resultado6_11');

let soma1_11 = 0;
let soma2_11 = 0;
let soma3_11 = 0;
let exclusao_11 = 0;
let somaFinal_11 = 0;
let IPA_11 = 0;


// Variaveis que serão geradas
var input1_11 = 0;
var input2_11 = 0;
var input3_11 = 0;
var input4_11 = 0;
var indiceResultado_11 = 0;

function getFrequencia11(value) {
    const frequencias = {
        5: 0.001,
        6: 0.011,
        7: 0.003,
        8: 0.445,
        9: 0.126,
        10: 0.263,
        11: 0.307,
        12: 0.048,
        13: 0.001
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_11() {
    const valores_11 = Array.from(inputs_11).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_11 = valores_11[0];
    //console.log("Valor do input1_11", input1_11);
    input2_11 = valores_11[1];
    //console.log("Valor do input2_11", input2_11);
    input3_11 = valores_11[2];
    //console.log("Valor do input3_11", input3_11);
    input4_11 = valores_11[3];
    //console.log("Valor do input4_11", input4_11);



    const elementoInput1_11 = document.querySelector('.input1_11');
    const elementoInput2_11 = document.querySelector('.input2_11');
    const elementoInput3_11 = document.querySelector('.input3_11');
    const elementoInput4_11 = document.querySelector('.input4_11');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_11 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_11.textContent = input1_11;
    }

    if (elementoInput2_11 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_11.textContent = input2_11;
    }

    if (elementoInput3_11 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_11.textContent = input3_11;
    }

    if (elementoInput4_11 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_11.textContent = input4_11;
    }

    // Comparação entre campos na mesma linha
    resultados_11[0].textContent = valores_11[0] === null || valores_11[1] === null ? '#N/D' : valores_11[0] === valores_11[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_11[1].textContent = valores_11[2] === null || valores_11[3] === null ? '#N/D' : valores_11[2] === valores_11[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_11[2].textContent = valores_11[0] === null || valores_11[2] === null ? '#N/D' : valores_11[0] === valores_11[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_11[3].textContent = valores_11[0] === null || valores_11[3] === null ? '#N/D' : valores_11[0] === valores_11[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_11[4].textContent = valores_11[1] === null || valores_11[2] === null ? '#N/D' : valores_11[1] === valores_11[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_11[5].textContent = valores_11[1] === null || valores_11[3] === null ? '#N/D' : valores_11[1] === valores_11[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_11 = (resultados_11[2].textContent === '#N/D' || resultados_11[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_11[2].textContent) + parseFloat(resultados_11[3].textContent);
    document.querySelector('.soma1_11').textContent = soma1_11 === '#N/D' ? soma1_11 : soma1_11.toFixed(2);

    // Soma 2
    soma2_11 = (resultados_11[4].textContent === '#N/D' || resultados_11[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_11[4].textContent) + parseFloat(resultados_11[5].textContent);
    document.querySelector('.soma2_11').textContent = soma2_11 === '#N/D' ? soma2_11 : soma2_11.toFixed(2);

    // Soma 3
    soma3_11 = (soma1_11 === '#N/D' || soma2_11 === '#N/D') ? '#N/D' : soma1_11 + soma2_11;
    document.querySelector('.soma3_11').textContent = soma3_11 === '#N/D' ? soma3_11 : soma3_11.toFixed(2);

    // Determinar exclusao
    exclusao_11 = soma3_11 === '#N/D' ? '#N/D' : soma3_11 > 0 ? 1 : 0;
    document.querySelector('.exclusao_11').textContent = exclusao_11;

    // Soma Final
    somaFinal_11 = (resultados_11[0].textContent === '#N/D' || resultados_11[1].textContent === '#N/D' || soma1_11 === '#N/D' || soma2_11 === '#N/D') ? '#N/D' : parseFloat(resultados_11[0].textContent) + parseFloat(resultados_11[1].textContent) + soma1_11 + soma2_11;
    document.querySelector('.somaFinal_11').textContent = somaFinal_11 === '#N/D' ? somaFinal_11 : somaFinal_11.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_11 = (soma1_11 === '#N/D' || valores_11[0] === null || valores_11[1] === null) ? '#N/D' : soma1_11 > 0 ? getFrequencia11(valores_11[0]) : getFrequencia11(valores_11[1]);
    document.querySelector('.comparar1_11').textContent = comparar1_11 === '#N/D' ? comparar1_11 : comparar1_11.toFixed(3);

    const comparar2_11 = (soma2_11 === '#N/D' || valores_11[1] === null) ? '#N/D' : soma2_11 > 0 ? getFrequencia11(valores_11[1]) : '-';
    document.querySelector('.comparar2_11').textContent = comparar2_11;

    // Transportar 1
    let transportar1_11 = '#N/D';
    if (somaFinal_11 === '#N/D' || comparar1_11 === '#N/D' || comparar2_11 === '#N/D') {
        transportar1_11 = '#N/D';
    } else if (somaFinal_11 === 0.5) {
        transportar1_11 = 1 / (4 * comparar1_11);
    } else if (somaFinal_11 === 1.5) {
        transportar1_11 = 1 / (2 * comparar1_11);
    } else if (somaFinal_11 === 2) {
        transportar1_11 = 1 / (2 * comparar1_11);
    } else if (somaFinal_11 === 3.5) {
        transportar1_11 = 1 / comparar1_11;
    } else if (somaFinal_11 === 1) {
        transportar1_11 = (comparar1_11 + comparar2_11) / (4 * comparar1_11 * comparar2_11);
    } else {
        transportar1_11 = '-';
    }
    document.querySelector('.transportar1_11').textContent = transportar1_11 === '#N/D' ? transportar1_11 : transportar1_11.toFixed(6);

    // Transportar 2
    const transportar2_11 = exclusao_11 === '#N/D' || transportar1_11 === '-' ? '#N/D' : exclusao_11 > 0 ? transportar1_11 : 0;
    document.querySelector('.transportar2_11').textContent = transportar2_11 === '#N/D' ? transportar2_11 : transportar2_11.toFixed(6);

    // Índice
    const indice_11 = transportar2_11 === '#N/D' ? '#N/D' : transportar2_11 === 0 ? "Exclusão" : transportar2_11.toFixed(5);
    document.querySelector('.indice_11').textContent = indice_11;

    // Índice que será gerado
    indiceResultado_11 = indice_11;
    //console.log("Valor de indice:Resultado_11", indiceResultado_11);


    const elementoIndice11 = document.querySelector('.indice11');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice11 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice11.textContent = indiceResultado_11;
    }


    // Transportar 3
    const transportar3_11 = transportar2_11 === '#N/D' ? '#N/D' : transportar2_11 > 0 ? transportar2_11 : 1;
    document.querySelector('.transportar3_11').textContent = transportar3_11 === '#N/D' ? transportar3_11 : transportar3_11.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_11 = transportar3_11 === '#N/D';
    document.querySelector('.éNãoDisp_11').textContent = éNãoDisp_11 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_11 = éNãoDisp_11 === false ? parseFloat(transportar3_11) : 1;
    document.querySelector('.transportarFinal_11').textContent = transportarFinal_11 === '#N/D' ? transportarFinal_11 : transportarFinal_11.toFixed(5);

    // IPA
    IPA_11 = transportarFinal_11;
    document.querySelector('.ipa_11').textContent = IPA_11 === '#N/D' ? IPA_11 : IPA_11.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_11.forEach(input => {
    input.addEventListener('input', atualizarResultados_11);
});

atualizarResultados_11(); // Atualiza os resultados inicialmente






//////// LINHA 12 - D18S51 /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 


const inputs_12 = document.querySelectorAll('.valor_12');
const resultados_12 = document.querySelectorAll('.resultado1_12, .resultado2_12, .resultado3_12, .resultado4_12, .resultado5_12, .resultado6_12');

let soma1_12 = 0;
let soma2_12 = 0;
let soma3_12 = 0;
let exclusao_12 = 0;
let somaFinal_12 = 0;
let IPA_12 = 0;


// Variaveis que serão geradas
var input1_12 = 0;
var input2_12 = 0;
var input3_12 = 0;
var input4_12 = 0;
var indiceResultado_12 = 0;

function getFrequencia12(value) {
    const frequencias = {
        9: 0.001,
        10: 0.010,
        10.2: 0.001,
        11: 0.011,
        12: 0.134,
        13: 0.113,
        13.2: 0.001,
        14: 0.141,
        15: 0.139,
        16: 0.152,
        17: 0.137,
        18: 0.071,
        19: 0.046,
        20: 0.025,
        21: 0.011,
        22: 0.005,
        23: 0.001,
        24: 0.001
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_12() {
    const valores_12 = Array.from(inputs_12).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_12 = valores_12[0];
    //console.log("Valor do input1_12", input1_12);
    input2_12 = valores_12[1];
    //console.log("Valor do input2_12", input2_12);
    input3_12 = valores_12[2];
    //console.log("Valor do input3_12", input3_12);
    input4_12 = valores_12[3];
    //console.log("Valor do input4_12", input4_12);


    const elementoInput1_12 = document.querySelector('.input1_12');
    const elementoInput2_12 = document.querySelector('.input2_12');
    const elementoInput3_12 = document.querySelector('.input3_12');
    const elementoInput4_12 = document.querySelector('.input4_12');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_12 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_12.textContent = input1_12;
    }

    if (elementoInput2_12 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_12.textContent = input2_12;
    }

    if (elementoInput3_12 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_12.textContent = input3_12;
    }

    if (elementoInput4_12 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_12.textContent = input4_12;
    }

    // Comparação entre campos na mesma linha
    resultados_12[0].textContent = valores_12[0] === null || valores_12[1] === null ? '#N/D' : valores_12[0] === valores_12[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_12[1].textContent = valores_12[2] === null || valores_12[3] === null ? '#N/D' : valores_12[2] === valores_12[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_12[2].textContent = valores_12[0] === null || valores_12[2] === null ? '#N/D' : valores_12[0] === valores_12[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_12[3].textContent = valores_12[0] === null || valores_12[3] === null ? '#N/D' : valores_12[0] === valores_12[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_12[4].textContent = valores_12[1] === null || valores_12[2] === null ? '#N/D' : valores_12[1] === valores_12[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_12[5].textContent = valores_12[1] === null || valores_12[3] === null ? '#N/D' : valores_12[1] === valores_12[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_12 = (resultados_12[2].textContent === '#N/D' || resultados_12[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_12[2].textContent) + parseFloat(resultados_12[3].textContent);
    document.querySelector('.soma1_12').textContent = soma1_12 === '#N/D' ? soma1_12 : soma1_12.toFixed(2);

    // Soma 2
    soma2_12 = (resultados_12[4].textContent === '#N/D' || resultados_12[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_12[4].textContent) + parseFloat(resultados_12[5].textContent);
    document.querySelector('.soma2_12').textContent = soma2_12 === '#N/D' ? soma2_12 : soma2_12.toFixed(2);

    // Soma 3
    soma3_12 = (soma1_12 === '#N/D' || soma2_12 === '#N/D') ? '#N/D' : soma1_12 + soma2_12;
    document.querySelector('.soma3_12').textContent = soma3_12 === '#N/D' ? soma3_12 : soma3_12.toFixed(2);

    // Determinar exclusao
    exclusao_12 = soma3_12 === '#N/D' ? '#N/D' : soma3_12 > 0 ? 1 : 0;
    document.querySelector('.exclusao_12').textContent = exclusao_12;

    // Soma Final
    somaFinal_12 = (resultados_12[0].textContent === '#N/D' || resultados_12[1].textContent === '#N/D' || soma1_12 === '#N/D' || soma2_12 === '#N/D') ? '#N/D' : parseFloat(resultados_12[0].textContent) + parseFloat(resultados_12[1].textContent) + soma1_12 + soma2_12;
    document.querySelector('.somaFinal_12').textContent = somaFinal_12 === '#N/D' ? somaFinal_12 : somaFinal_12.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_12 = (soma1_12 === '#N/D' || valores_12[0] === null || valores_12[1] === null) ? '#N/D' : soma1_12 > 0 ? getFrequencia12(valores_12[0]) : getFrequencia12(valores_12[1]);
    document.querySelector('.comparar1_12').textContent = comparar1_12 === '#N/D' ? comparar1_12 : comparar1_12.toFixed(3);

    const comparar2_12 = (soma2_12 === '#N/D' || valores_12[1] === null) ? '#N/D' : soma2_12 > 0 ? getFrequencia12(valores_12[1]) : '-';
    document.querySelector('.comparar2_12').textContent = comparar2_12;

    // Transportar 1
    let transportar1_12 = '#N/D';
    if (somaFinal_12 === '#N/D' || comparar1_12 === '#N/D' || comparar2_12 === '#N/D') {
        transportar1_12 = '#N/D';
    } else if (somaFinal_12 === 0.5) {
        transportar1_12 = 1 / (4 * comparar1_12);
    } else if (somaFinal_12 === 1.5) {
        transportar1_12 = 1 / (2 * comparar1_12);
    } else if (somaFinal_12 === 2) {
        transportar1_12 = 1 / (2 * comparar1_12);
    } else if (somaFinal_12 === 3.5) {
        transportar1_12 = 1 / comparar1_12;
    } else if (somaFinal_12 === 1) {
        transportar1_12 = (comparar1_12 + comparar2_12) / (4 * comparar1_12 * comparar2_12);
    } else {
        transportar1_12 = '-';
    }
    document.querySelector('.transportar1_12').textContent = transportar1_12 === '#N/D' ? transportar1_12 : transportar1_12.toFixed(6);

    // Transportar 2
    const transportar2_12 = exclusao_12 === '#N/D' || transportar1_12 === '-' ? '#N/D' : exclusao_12 > 0 ? transportar1_12 : 0;
    document.querySelector('.transportar2_12').textContent = transportar2_12 === '#N/D' ? transportar2_12 : transportar2_12.toFixed(6);

    // Índice
    const indice_12 = transportar2_12 === '#N/D' ? '#N/D' : transportar2_12 === 0 ? "Exclusão" : transportar2_12.toFixed(5);
    document.querySelector('.indice_12').textContent = indice_12;

    // Índice que será gerado
    indiceResultado_12 = indice_12;
    //console.log("Valor de indice:Resultado_12", indiceResultado_12);


    const elementoIndice12 = document.querySelector('.indice12');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice12 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice12.textContent = indiceResultado_12;
    }


    // Transportar 3
    const transportar3_12 = transportar2_12 === '#N/D' ? '#N/D' : transportar2_12 > 0 ? transportar2_12 : 1;
    document.querySelector('.transportar3_12').textContent = transportar3_12 === '#N/D' ? transportar3_12 : transportar3_12.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_12 = transportar3_12 === '#N/D';
    document.querySelector('.éNãoDisp_12').textContent = éNãoDisp_12 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_12 = éNãoDisp_12 === false ? parseFloat(transportar3_12) : 1;
    document.querySelector('.transportarFinal_12').textContent = transportarFinal_12 === '#N/D' ? transportarFinal_12 : transportarFinal_12.toFixed(5);

    // IPA
    IPA_12 = transportarFinal_12;
    document.querySelector('.ipa_12').textContent = IPA_12 === '#N/D' ? IPA_12 : IPA_12.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_12.forEach(input => {
    input.addEventListener('input', atualizarResultados_12);
});

atualizarResultados_12(); // Atualiza os resultados inicialmente




/////// LINHA 13 - D5S818  /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 


const inputs_13 = document.querySelectorAll('.valor_13');
const resultados_13 = document.querySelectorAll('.resultado1_13, .resultado2_13, .resultado3_13, .resultado4_13, .resultado5_13, .resultado6_13');

let soma1_13 = 0;
let soma2_13 = 0;
let soma3_13 = 0;
let exclusao_13 = 0;
let somaFinal_13 = 0;
let IPA_13 = 0;


// Variaveis que serão geradas
var input1_13 = 0;
var input2_13 = 0;
var input3_13 = 0;
var input4_13 = 0;
var indiceResultado_13 = 0;

function getFrequencia13(value) {
    const frequencias = {
        7: 0.016,
        8: 0.012,
        9: 0.029,
        10: 0.063,
        11: 0.328,
        12: 0.368,
        13: 0.169,
        14: 0.013,
        15: 0.002
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_13() {
    const valores_13 = Array.from(inputs_13).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_13 = valores_13[0];
    //console.log("Valor do input1_13", input1_13);
    input2_13 = valores_13[1];
    //console.log("Valor do input2_13", input2_13);
    input3_13 = valores_13[2];
    //console.log("Valor do input3_13", input3_13);
    input4_13 = valores_13[3];
    //console.log("Valor do input4_13", input4_13);


    const elementoInput1_13 = document.querySelector('.input1_13');
    const elementoInput2_13 = document.querySelector('.input2_13');
    const elementoInput3_13 = document.querySelector('.input3_13');
    const elementoInput4_13 = document.querySelector('.input4_13');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_13 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_13.textContent = input1_13;
    }

    if (elementoInput2_13 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_13.textContent = input2_13;
    }

    if (elementoInput3_13 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_13.textContent = input3_13;
    }

    if (elementoInput4_13 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_13.textContent = input4_13;
    }

    // Comparação entre campos na mesma linha
    resultados_13[0].textContent = valores_13[0] === null || valores_13[1] === null ? '#N/D' : valores_13[0] === valores_13[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_13[1].textContent = valores_13[2] === null || valores_13[3] === null ? '#N/D' : valores_13[2] === valores_13[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_13[2].textContent = valores_13[0] === null || valores_13[2] === null ? '#N/D' : valores_13[0] === valores_13[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_13[3].textContent = valores_13[0] === null || valores_13[3] === null ? '#N/D' : valores_13[0] === valores_13[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_13[4].textContent = valores_13[1] === null || valores_13[2] === null ? '#N/D' : valores_13[1] === valores_13[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_13[5].textContent = valores_13[1] === null || valores_13[3] === null ? '#N/D' : valores_13[1] === valores_13[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_13 = (resultados_13[2].textContent === '#N/D' || resultados_13[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_13[2].textContent) + parseFloat(resultados_13[3].textContent);
    document.querySelector('.soma1_13').textContent = soma1_13 === '#N/D' ? soma1_13 : soma1_13.toFixed(2);

    // Soma 2
    soma2_13 = (resultados_13[4].textContent === '#N/D' || resultados_13[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_13[4].textContent) + parseFloat(resultados_13[5].textContent);
    document.querySelector('.soma2_13').textContent = soma2_13 === '#N/D' ? soma2_13 : soma2_13.toFixed(2);

    // Soma 3
    soma3_13 = (soma1_13 === '#N/D' || soma2_13 === '#N/D') ? '#N/D' : soma1_13 + soma2_13;
    document.querySelector('.soma3_13').textContent = soma3_13 === '#N/D' ? soma3_13 : soma3_13.toFixed(2);

    // Determinar exclusao
    exclusao_13 = soma3_13 === '#N/D' ? '#N/D' : soma3_13 > 0 ? 1 : 0;
    document.querySelector('.exclusao_13').textContent = exclusao_13;

    // Soma Final
    somaFinal_13 = (resultados_13[0].textContent === '#N/D' || resultados_13[1].textContent === '#N/D' || soma1_13 === '#N/D' || soma2_13 === '#N/D') ? '#N/D' : parseFloat(resultados_13[0].textContent) + parseFloat(resultados_13[1].textContent) + soma1_13 + soma2_13;
    document.querySelector('.somaFinal_13').textContent = somaFinal_13 === '#N/D' ? somaFinal_13 : somaFinal_13.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_13 = (soma1_13 === '#N/D' || valores_13[0] === null || valores_13[1] === null) ? '#N/D' : soma1_13 > 0 ? getFrequencia13(valores_13[0]) : getFrequencia13(valores_13[1]);
    document.querySelector('.comparar1_13').textContent = comparar1_13 === '#N/D' ? comparar1_13 : comparar1_13.toFixed(3);

    const comparar2_13 = (soma2_13 === '#N/D' || valores_13[1] === null) ? '#N/D' : soma2_13 > 0 ? getFrequencia13(valores_13[1]) : '-';
    document.querySelector('.comparar2_13').textContent = comparar2_13;

    // Transportar 1
    let transportar1_13 = '#N/D';
    if (somaFinal_13 === '#N/D' || comparar1_13 === '#N/D' || comparar2_13 === '#N/D') {
        transportar1_13 = '#N/D';
    } else if (somaFinal_13 === 0.5) {
        transportar1_13 = 1 / (4 * comparar1_13);
    } else if (somaFinal_13 === 1.5) {
        transportar1_13 = 1 / (2 * comparar1_13);
    } else if (somaFinal_13 === 2) {
        transportar1_13 = 1 / (2 * comparar1_13);
    } else if (somaFinal_13 === 3.5) {
        transportar1_13 = 1 / comparar1_13;
    } else if (somaFinal_13 === 1) {
        transportar1_13 = (comparar1_13 + comparar2_13) / (4 * comparar1_13 * comparar2_13);
    } else {
        transportar1_13 = '-';
    }
    document.querySelector('.transportar1_13').textContent = transportar1_13 === '#N/D' ? transportar1_13 : transportar1_13.toFixed(6);

    // Transportar 2
    const transportar2_13 = exclusao_13 === '#N/D' || transportar1_13 === '-' ? '#N/D' : exclusao_13 > 0 ? transportar1_13 : 0;
    document.querySelector('.transportar2_13').textContent = transportar2_13 === '#N/D' ? transportar2_13 : transportar2_13.toFixed(6);

    // Índice
    const indice_13 = transportar2_13 === '#N/D' ? '#N/D' : transportar2_13 === 0 ? "Exclusão" : transportar2_13.toFixed(5);
    document.querySelector('.indice_13').textContent = indice_13;

    // Índice que será gerado
    indiceResultado_13 = indice_13;
    //console.log("Valor de indice:Resultado_13", indiceResultado_13);


    const elementoIndice13 = document.querySelector('.indice13');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice13 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice13.textContent = indiceResultado_13;
    }

    // Transportar 3
    const transportar3_13 = transportar2_13 === '#N/D' ? '#N/D' : transportar2_13 > 0 ? transportar2_13 : 1;
    document.querySelector('.transportar3_13').textContent = transportar3_13 === '#N/D' ? transportar3_13 : transportar3_13.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_13 = transportar3_13 === '#N/D';
    document.querySelector('.éNãoDisp_13').textContent = éNãoDisp_13 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_13 = éNãoDisp_13 === false ? parseFloat(transportar3_13) : 1;
    document.querySelector('.transportarFinal_13').textContent = transportarFinal_13 === '#N/D' ? transportarFinal_13 : transportarFinal_13.toFixed(5);

    // IPA
    IPA_13 = transportarFinal_13;
    document.querySelector('.ipa_13').textContent = IPA_13 === '#N/D' ? IPA_13 : IPA_13.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();
}

inputs_13.forEach(input => {
    input.addEventListener('input', atualizarResultados_13);
});

atualizarResultados_13(); // Atualiza os resultados inicialmente




/////// LINHA 14 - FGA /////// /////// /////// /////// /////// /////// /////// /////// /////// /////// ///////  ///////  /////// 



const inputs_14 = document.querySelectorAll('.valor_14');
const resultados_14 = document.querySelectorAll('.resultado1_14, .resultado2_14, .resultado3_14, .resultado4_14, .resultado5_14, .resultado6_14');

let soma1_14 = 0;
let soma2_14 = 0;
let soma3_14 = 0;
let exclusao_14 = 0;
let somaFinal_14 = 0;
let IPA_14 = 0;

// Variaveis que serão geradas
var input1_14 = 0;
var input2_14 = 0;
var input3_14 = 0;
var input4_14 = 0;
var indiceResultado_14 = 0;

function getFrequencia14(value) {
    const frequencias = {
        18: 0.007,
        19: 0.063,
        20: 0.112,
        21: 0.168,
        22: 0.177,
        22.2: 0.002,
        23: 0.143,
        24: 0.150,
        25: 0.110,
        26: 0.044,
        27: 0.015,
        28: 0.004,
        29: 0.001,
        30: 0.002,
        30.2: 0.001,
        32: 0.001
    };

    return frequencias[value] || '#N/D';
}

function atualizarResultados_14() {
    const valores_14 = Array.from(inputs_14).map(input => input.value.trim() === '' ? null : parseFloat(input.value) || 0);

    // Inputs que serão gerados
    input1_14 = valores_14[0];
    //console.log("Valor do input1_14", input1_14);
    input2_14 = valores_14[1];
    //console.log("Valor do input2_14", input2_14);
    input3_14 = valores_14[2];
    //console.log("Valor do input3_14", input3_14);
    input4_14 = valores_14[3];
    //console.log("Valor do input4_14", input4_14);

    const elementoInput1_14 = document.querySelector('.input1_14');
    const elementoInput2_14 = document.querySelector('.input2_14');
    const elementoInput3_14 = document.querySelector('.input3_14');
    const elementoInput4_14 = document.querySelector('.input4_14');

    // Verificando se os elementos foram encontrados antes de tentar acessar suas propriedades textContent
    if (elementoInput1_14 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input1_1
        elementoInput1_14.textContent = input1_14;
    }

    if (elementoInput2_14 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input2_1
        elementoInput2_14.textContent = input2_14;
    }

    if (elementoInput3_14 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input3_1
        elementoInput3_14.textContent = input3_14;
    }

    if (elementoInput4_14 !== null) {
        // Atualizando o conteúdo do elemento com o valor de input4_1
        elementoInput4_14.textContent = input4_14;
    }

    // Comparação entre campos na mesma linha
    resultados_14[0].textContent = valores_14[0] === null || valores_14[1] === null ? '#N/D' : valores_14[0] === valores_14[1] ? '1' : '0'; // Campo1 = Campo2
    resultados_14[1].textContent = valores_14[2] === null || valores_14[3] === null ? '#N/D' : valores_14[2] === valores_14[3] ? '0.5' : '0'; // Campo3 = Campo4
    
    // Comparação entre campos em colunas diferentes
    resultados_14[2].textContent = valores_14[0] === null || valores_14[2] === null ? '#N/D' : valores_14[0] === valores_14[2] ? '0.5' : '0'; // Campo1 = Campo3
    resultados_14[3].textContent = valores_14[0] === null || valores_14[3] === null ? '#N/D' : valores_14[0] === valores_14[3] ? '0.5' : '0'; // Campo1 = Campo4
    resultados_14[4].textContent = valores_14[1] === null || valores_14[2] === null ? '#N/D' : valores_14[1] === valores_14[2] ? '0.5' : '0'; // Campo2 = Campo3
    resultados_14[5].textContent = valores_14[1] === null || valores_14[3] === null ? '#N/D' : valores_14[1] === valores_14[3] ? '0.5' : '0'; // Campo2 = Campo4
    
    // Soma 1
    soma1_14 = (resultados_14[2].textContent === '#N/D' || resultados_14[3].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_14[2].textContent) + parseFloat(resultados_14[3].textContent);
    document.querySelector('.soma1_14').textContent = soma1_14 === '#N/D' ? soma1_14 : soma1_14.toFixed(2);

    // Soma 2
    soma2_14 = (resultados_14[4].textContent === '#N/D' || resultados_14[5].textContent === '#N/D') ? '#N/D' : parseFloat(resultados_14[4].textContent) + parseFloat(resultados_14[5].textContent);
    document.querySelector('.soma2_14').textContent = soma2_14 === '#N/D' ? soma2_14 : soma2_14.toFixed(2);

    // Soma 3
    soma3_14 = (soma1_14 === '#N/D' || soma2_14 === '#N/D') ? '#N/D' : soma1_14 + soma2_14;
    document.querySelector('.soma3_14').textContent = soma3_14 === '#N/D' ? soma3_14 : soma3_14.toFixed(2);

    // Determinar exclusao
    exclusao_14 = soma3_14 === '#N/D' ? '#N/D' : soma3_14 > 0 ? 1 : 0;
    document.querySelector('.exclusao_14').textContent = exclusao_14;

    // Soma Final
    somaFinal_14 = (resultados_14[0].textContent === '#N/D' || resultados_14[1].textContent === '#N/D' || soma1_14 === '#N/D' || soma2_14 === '#N/D') ? '#N/D' : parseFloat(resultados_14[0].textContent) + parseFloat(resultados_14[1].textContent) + soma1_14 + soma2_14;
    document.querySelector('.somaFinal_14').textContent = somaFinal_14 === '#N/D' ? somaFinal_14 : somaFinal_14.toFixed(2);

    // Comparar 1 e Comparar 2
    const comparar1_14 = (soma1_14 === '#N/D' || valores_14[0] === null || valores_14[1] === null) ? '#N/D' : soma1_14 > 0 ? getFrequencia14(valores_14[0]) : getFrequencia14(valores_14[1]);
    document.querySelector('.comparar1_14').textContent = comparar1_14 === '#N/D' ? comparar1_14 : comparar1_14.toFixed(3);

    const comparar2_14 = (soma2_14 === '#N/D' || valores_14[1] === null) ? '#N/D' : soma2_14 > 0 ? getFrequencia14(valores_14[1]) : '-';
    document.querySelector('.comparar2_14').textContent = comparar2_14;

    // Transportar 1
    let transportar1_14 = '#N/D';
    if (somaFinal_14 === '#N/D' || comparar1_14 === '#N/D' || comparar2_14 === '#N/D') {
        transportar1_14 = '#N/D';
    } else if (somaFinal_14 === 0.5) {
        transportar1_14 = 1 / (4 * comparar1_14);
    } else if (somaFinal_14 === 1.5) {
        transportar1_14 = 1 / (2 * comparar1_14);
    } else if (somaFinal_14 === 2) {
        transportar1_14 = 1 / (2 * comparar1_14);
    } else if (somaFinal_14 === 3.5) {
        transportar1_14 = 1 / comparar1_14;
    } else if (somaFinal_14 === 1) {
        transportar1_14 = (comparar1_14 + comparar2_14) / (4 * comparar1_14 * comparar2_14);
    } else {
        transportar1_14 = '-';
    }
    document.querySelector('.transportar1_14').textContent = transportar1_14 === '#N/D' ? transportar1_14 : transportar1_14.toFixed(6);

    // Transportar 2
    const transportar2_14 = exclusao_14 === '#N/D' || transportar1_14 === '-' ? '#N/D' : exclusao_14 > 0 ? transportar1_14 : 0;
    document.querySelector('.transportar2_14').textContent = transportar2_14 === '#N/D' ? transportar2_14 : transportar2_14.toFixed(6);

    // Índice
    const indice_14 = transportar2_14 === '#N/D' ? '#N/D' : transportar2_14 === 0 ? "Exclusão" : transportar2_14.toFixed(5);
    document.querySelector('.indice_14').textContent = indice_14;

    // Índice que será gerado
    indiceResultado_14 = indice_14;
    //console.log("Valor de indice:Resultado_14", indiceResultado_14);


    
    const elementoIndice14 = document.querySelector('.indice14');

    // Verificando se o elemento foi encontrado antes de tentar acessar sua propriedade textContent
    if (elementoIndice14 !== null) {
        // Atualizando o conteúdo do elemento com o valor do índice
        elementoIndice14.textContent = indiceResultado_14;
    }

    // Transportar 3
    const transportar3_14 = transportar2_14 === '#N/D' ? '#N/D' : transportar2_14 > 0 ? transportar2_14 : 1;
    document.querySelector('.transportar3_14').textContent = transportar3_14 === '#N/D' ? transportar3_14 : transportar3_14.toFixed(6);

    // ÉNãoDisp
    const éNãoDisp_14 = transportar3_14 === '#N/D';
    document.querySelector('.éNãoDisp_14').textContent = éNãoDisp_14 ? "VERDADEIRO" : "FALSO";

    // Transportar Final
    const transportarFinal_14 = éNãoDisp_14 === false ? parseFloat(transportar3_14) : 1;
    document.querySelector('.transportarFinal_14').textContent = transportarFinal_14 === '#N/D' ? transportarFinal_14 : transportarFinal_14.toFixed(5);

    // IPA
    IPA_14 = transportarFinal_14;
    document.querySelector('.ipa_14').textContent = IPA_14 === '#N/D' ? IPA_14 : IPA_14.toFixed(5);

    // CALCULAR O IPA_FINAL
    calcularIPAFinal();

    //ATUALIZA A PORCENTAGEM FINAL
    atualizarPorcentagemIPAFinal()
}

inputs_14.forEach(input => {
    input.addEventListener('input', atualizarResultados_14);
});

atualizarResultados_14(); // Atualiza os resultados inicialmente




atualizarPorcentagemIPAFinal();

// Todas as suas funções e variáveis existentes

});




