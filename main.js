const form = document.getElementById('form-atividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji festejando"/>`;
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji triste"/>`;
let linhas = '';
const atividades = [];
const notas = [];
const spamAprovado = `<spam class="resultado aprovado">Aprovado</spam>`;
const spamReprovado = `<spam class="resultado reprovado">Reprovado</spam>`;
const notaMinima = parseFloat(prompt('Digite a nota minima: '));

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAtividade.value)){
        alert(`Essa atividade ja foi inserida!`);
    }else{
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));
        let linha = `<tr>`;
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculoMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado; 
}
    

function calculoMediaFinal(){
    let somaNotas = 0;

    for(let i=0;i<notas.length;i++){
        somaNotas += notas[i];
    }

    return somaNotas/notas.length;
}
