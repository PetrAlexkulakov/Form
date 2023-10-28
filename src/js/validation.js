import sendData from "../utils/ajax";

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    const serverMessage = document.querySelector('.server-message');
    let isValid = true;

    if (name === '') {
        nameError.innerText = 'Name is required';
        document.getElementById('name').classList.add('error');
        isValid = false;
    } else {
        nameError.innerText = '';
        document.getElementById('name').classList.remove('error');
    }

    if (email === '') {
        emailError.innerText = 'Email is required';
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerText = 'Invalid email format';
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else {
        emailError.innerText = '';
        document.getElementById('email').classList.remove('error');
    }

    if (phone === '') {
        phoneError.innerText = 'Phone number is required';
        document.getElementById('phone').classList.add('error');
        isValid = false;
    } else {
        phoneError.innerText = '';
        document.getElementById('phone').classList.remove('error');
    }

    if (message === '') {
        messageError.innerText = 'Message is required';
        document.getElementById('message').classList.add('error');
        isValid = false;
    } else {
        messageError.innerText = '';
        document.getElementById('message').classList.remove('error');
    }

    if (isValid) {
        const formData = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };
    
        sendData(formData)
            .then(response => {
                if (response.status === 'success') {
                    serverMessage.innerText = response.message
                    serverMessage.classList.remove('error');

                    document.getElementById('name').value  = '';
                    document.getElementById('email').value  = '';
                    document.getElementById('phone').value  = '';
                    document.getElementById('message').value  = '';
                } else if (response.status === 'error') {
                    serverMessage.innerText = response.message
                    serverMessage.classList.add('error');
                }
            })
            .catch(error => {
                serverMessage.innerText = error
                serverMessage.classList.add('error');
            });
    }
});