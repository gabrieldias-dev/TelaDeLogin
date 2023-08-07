//Validação do formulario

function login() {
    var $email = document.querySelector('#iemail').value
    var $senha = document.querySelector('#isenha').value

    if ( $email === '' || $senha === '') {
        alert ('Preencha todos os campos para realizar o login')
    }
}

function cadastrar() {

    var $nome = document.querySelector('#inome').value
    var $email = document.querySelector('#iemail').value
    var $numero = document.querySelector('#inumero').value
    var $apelido = document.querySelector('#iapelido').value
    var $senha = document.querySelector('#isenha').value

    if ( $nome === '' || $email === '' || $numero === '' || $apelido === '' || $senha === '') {
        alert('Necessario preencher todos os campos para seguir')
    }

}