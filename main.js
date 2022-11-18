const form = document.getElementById('form-exercicio');

function removeelement(element){
    setTimeout (function(){
        element.remove();
    },2000);
    }

form.addEventListener('submit', function(e){
    var formEvalido = true;
    e.preventDefault();

    const primeiroNumero = parseFloat(document.getElementById('numero1').value);
    const segundoNumero = parseFloat(document.getElementById('numero2').value);
    const mensagemSucesso = ('Os valores ' + primeiroNumero.value + ' e ' + segundoNumero.value + ' foram Salvos');
    const mensagemerror = ('O segundo numero tem que ser maior que o primeiro');

    if(primeiroNumero.value < segundoNumero.value){
        alert(mensagemSucesso)

        primeiroNumero.value = '';
        segundoNumero.value = '';

    }else{
        alert(mensagemerror)
    }})