document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const errorMessages = [];
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const estadoCivil = document.querySelector('input[name="estadoCivil"]:checked');
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;
    const profesion = document.getElementById('profesion').value;

    if (nombre === '') {
        errorMessages.push('Por favor, ingrese su nombre completo.');
    }

    if (email === '') {
        errorMessages.push('Por favor, ingrese su correo electrónico.');
    } else if (!isValidEmail(email)) {
        errorMessages.push('Por favor, ingrese un correo electrónico válido.');
    }

    if (password === '') {
        errorMessages.push('Por favor, ingrese una contraseña.');
    } else if (password.length < 8) {
        errorMessages.push('La contraseña debe tener al menos 8 caracteres.');
    }

    if (!estadoCivil) {
        errorMessages.push('Por favor, seleccione su estado civil.');
    }

    if (edad === '') {
        errorMessages.push('Por favor, ingrese su edad.');
    } else if (parseInt(edad) < 18 || parseInt(edad) > 120) {
        errorMessages.push('Por favor, ingrese una edad válida entre 18 y 120 años.');
    }

    if (ciudad === '') {
        errorMessages.push('Por favor, seleccione una ciudad.');
    }

    if (profesion === '') {
        errorMessages.push('Por favor, seleccione una profesión.');
    }

    const errorMessagesElement = document.getElementById('errorMessages');
    if (errorMessages.length > 0) {
        errorMessagesElement.innerHTML = errorMessages.join('<br>');
    } else {
        errorMessagesElement.innerHTML = '';
        alert('Formulario enviado con éxito!');
        this.reset();
        window.location.href = 'index.html';
        
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}