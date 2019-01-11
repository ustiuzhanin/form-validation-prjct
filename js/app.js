/* 
    variables
*/

const sendBtn = document.querySelector('#sendBtn');
const inputEmail = document.querySelector('#email');
const inputSubject = document.querySelector('#subject');
const inputMessage = document.querySelector('#message');
const resetBtn = document.querySelector('#resetBtn');
const form = document.querySelector('#email-form');

/* 
    event listeners
*/

document.addEventListener('DOMContentLoaded', onDomLoad);
inputEmail.addEventListener('blur', onFormInputBlur);
inputSubject.addEventListener('blur', onFormInputBlur);
inputMessage.addEventListener('blur', onFormInputBlur);
resetBtn.addEventListener('click', onResetBtnClick);
form.addEventListener('submit', onFormSubmit);

/* 
    functions
*/

function onDomLoad() {
    sendBtn.disabled = true;
}

function onFormInputBlur(evt) {
    let errors;
    const field = evt.target;

    validateLength(field);

    if (field.type === 'email') {
        validateEmail(field);
    }

    errors = document.querySelectorAll('.error');

    if (inputEmail.value !== '' && inputSubject.value !== '' && inputMessage.value !== '' && errors.length === 0) {
        sendBtn.disabled = false;
    }
}

function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(email) {
    if (email.value.indexOf('@') !== -1) {
        email.style.borderBottomColor = 'green';
        email.classList.remove('error');
    } else {
        email.style.borderBottomColor = 'red';
        email.classList.add('error');
    }
}

function onResetBtnClick() {
    form.reset();
}

function onFormSubmit(evt) {
    evt.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    const emailSpinner = document.createElement('img');
    emailSpinner.src = 'img/mail.gif';
    emailSpinner.style.display = 'block';

    setTimeout(function () {
        spinner.style.display = 'none';

        document.querySelector('#loaders').appendChild(emailSpinner);

        setTimeout(function () {
            form.reset();
            emailSpinner.remove();
        }, 3000);
    }, 3000);

}