const button = document.getElementById('submit');
const email = document.getElementById('email');
const error = document.getElementById('error');

const reg = /^\S+@\S+\.\S+$/;

const checkEmail = () => {
    error.style.display = 'none';
    if (!reg.test(email.value)) {
        error.style.display = 'block';
    }
}

button.addEventListener('click', checkEmail);