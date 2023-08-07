//Validação do formulario

function login() {
    var $email = document.querySelector('#iemail').value
    var $senha = document.querySelector('#isenha').value

    if ( $email === '' || $senha === '') {
        alert ('Preencha todos os campos para realizar o login')
    }
}

function cadastrar() {

    var $info = document.querySelectorAll('.form-cadastro').value

    if ( $info === '') {
        alert('Necessario preencher todos os campos para seguir')
    }

}