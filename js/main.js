let nameAcc = document.getElementById('nameRg');
let email = document.getElementById('emailRg');
let password = document.getElementById('passwordRg');
let emailLogin = document.getElementById('emailLog');
let passwordLogin = document.getElementById('passwordLog');
let notCorrect = document.querySelector('#emaiOrPasswordNotCorrect');
let empty = document.querySelector('#emptyFields');
let correct = document.querySelector('#correctData')
let welcome = document.querySelector('#welcome');
let accounts;
let currentName;

if (localStorage.getItem('DataAccounts') != null) {
    accounts = JSON.parse(localStorage.getItem('DataAccounts'))
}
else{
    accounts = [];
}


function register() {
        if (nameAcc.value == '' || email.value == '' || password.value == '') {
            empty.classList.replace('d-none', 'd-block')
            correct.classList.replace('d-block', 'd-none')
        }
        else{
            let container = {
                accountName : nameAcc.value,
                accountEmail : email.value,
                accountPassword : password.value
            }
            accounts.push(container);
            localStorage.setItem('DataAccounts', JSON.stringify(accounts))
            empty.classList.replace('d-block', 'd-none')
            correct.classList.replace('d-none', 'd-block')
        }

}

function login() {
    checkData();
    for (let i = 0; i < accounts.length; i++) {
            if (emailLogin.value == accounts[i].accountEmail && passwordLogin.value == accounts[i].accountPassword) {
                currentName = accounts[i].accountName;
                localStorage.setItem('Name', `${currentName}`)
                clearAlerts()

                window.location.href = "home.html";
                welcome.innerHTML = 'Welcome' + JSON.parse(localStorage.getItem('Name'))[i];
                return;
            }
    }
}

function checkData() {

    if (emailLogin.value == '' || passwordLogin.value == '') {
        empty.classList.replace('d-none', 'd-block')
        notCorrect.classList.replace('d-block', 'd-none')

    }
    else{
        notCorrect.classList.replace('d-none', 'd-block')
        empty.classList.replace('d-block', 'd-none')
    }
}

function clearAlerts() {
    empty.classList.replace('d-block', 'd-none')
    notCorrect.classList.replace('d-block', 'd-none')
}

