// By Kagio™

const form = document.querySelector('#formulario')

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    
    const inputUsername = evento.target.querySelector('#Username');
    const inputPassword = evento.target.querySelector('#password');

    const username = inputUsername.value;
    const password = inputPassword.value;

    const login = `${username}  `;

    if (!inputUsername.value) return;
    if (!inputPassword.value) return;

    setResult(login);

    location.href="site.html";
});


function setResult(msg) {
    const loginSet = [];

    loginSet.push(msg);

    const loginJSON = JSON.stringify(loginSet);
    localStorage.setItem('login', loginJSON);

    console.log(loginSet);
}
