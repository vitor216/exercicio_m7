const form = document.getElementById('form-exercicio');

function validNumero (numero1,numero2){
    if(numero2 > numero1){
        const maiornumero = numero2;
        return maiornumero;
    }
}

form.addEventListener('submit', function(e){
    var formEvalido = false;
    e.preventDefault();

    const primeironumero = document.getElementById('numero1');
    const segundonumero = document.getElementById('numero2');
    const mensagemsucesso = 'Os numeros: ' + primeironumero.value+ 'e ' +segundonumero.value+ ' foram gravados com sucesso';
    const mensagemerror ='O valor do 2º Numero deve ser maior que o do 1º';

    formEvalido = validNumero (segundonumero.value);
    if(formEvalido){
        const containermensagemsucesso = document.querySelector('.sucess-mensage');
        containermensagemsucesso.innerHTML = mensagemsucesso;
        containermensagemsucesso.style.display='block';

        primeironumero.value='';
        segundonumero.value='';

    }else{
        const containermensagemerror = document.querySelector('.error-mensage');
        containermensagemerror.innerHTML = mensagemerror;
        containermensagemerror.style.display='block';
    }
})