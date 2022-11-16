const form = document.getElementById('form-exercicio');

function removeelement(element){
    setTimeout (function(){
        element.remove();
    },2000);
    }

form.addEventListener('submit', function(e){
    var formEvalido = false;
    e.preventDefault();

    const primeiroNumero = document.getElementById('numero1');
    const segundoNumero = document.getElementById('numero2');
    const mensagemSucesso = ('Os valores ' + primeiroNumero.value + ' e ' + segundoNumero.value + ' foram Salvos');
    const mensagemerror = ('O segundo numero tem que ser maior que o primeiro');

    if(segundoNumero.value < primeiroNumero.value){
        alert(mensagemSucesso)

        primeiroNumero.value = '';
        segundoNumero.value = '';

    }else if(segundoNumero.value >= primeiroNumero.value){
        alert(mensagemerror)
    }else{
        alert(mensagemerror)
    }})