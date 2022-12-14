// by Kagera™

const login = document.querySelector('.setResultado')

function criaLogin(textoInput) {
    login.innerHTML = textoInput;
}

function adicionaLogin() {
    const login = localStorage.getItem('login');
    const loginSet = JSON.parse(login);
    for (let login of loginSet) {
        criaLogin(login);
    }
}
adicionaLogin();
