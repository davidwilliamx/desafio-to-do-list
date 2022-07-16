var adiconaTarefa = document.getElementById('tarefa__btn');
var concluiTarefa = document.querySelector('ul');


// ADD NOVA TAREFA

adiconaTarefa.addEventListener('click', function (ev) {
    ev.preventDefault();

    //console.log(textoTarefa.value);
    var linha = document.createElement("li");
    //Pega o conteudo do input 
    var textoTarefa = document.getElementById('tarefa__text').value;
    //O valor de textoTarefa é atribuido em texto
    var texto = document.createTextNode(textoTarefa);
    //na variável linha adiciona o filho texto
    linha.appendChild(texto);

    if (textoTarefa === '') {
        alert('Você precisa escrever algo!');
    } else {
        document.getElementById("lista").appendChild(linha);
    }
    //zera o valor dentro do input textoTarefa
    document.getElementById('tarefa__text').value = "";
});

concluiTarefa.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completo');
    }
}, false);
