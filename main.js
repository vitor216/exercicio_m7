const form = document.getElementById('form-exercicio');

form.addEventListener('submit', function(e){
    var formEvalido = false;
    e.preventDefault();

    const primeiroNumero = document.getElementById('numero1');
    const segundoNumero = document.getElementById('numero2');
    const mensagemSucesso = ('Os valores ' + primeiroNumero.value + ' e ' + segundoNumero.value + ' foram Salvos');
    const mensagemerror = ('O segundo numero tem que ser maior que o primeiro');
    
    if(primeiroNumero.value < segundoNumero.value){
        const containermensagemsucesso = document.querySelector('.sucess-mensage');
        containermensagemsucesso.innerHTML = mensagemSucesso;
        containermensagemsucesso.style.display='block'
        
        primeiroNumero.value = '';
        segundoNumero.value = '';
    }else{
        const containermensagemerror = document.querySelector('.error-mensage');
        containermensagemerror.innerHTML = mensagemerror;
        containermensagemerror.style.display='block'
    }})