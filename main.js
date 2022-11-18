const form = document.getElementById('form-exercicio');

function removeelement(element){
    setTimeout (function(){
        element.remove();
    },2000);
    }

form.addEventListener('submit', function(e){
    var formEvalido = false;
    e.preventDefault();

    const primeiroNumero = parseInt(document.getElementById('numero1').value);
    const segundoNumero = parseInt(document.getElementById('numero2').value);
    const mensagemSucesso = ('Os valores ' + primeiroNumero + ' e ' + segundoNumero + ' foram Salvos');
    const mensagemerror = ('O segundo numero tem que ser maior que o primeiro');

    if(primeiroNumero < segundoNumero){
        alert(mensagemSucesso);

        numero1.value = '';
        numero2.value = '';

    }else{
        alert(mensagemerror);
    }})