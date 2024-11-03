document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const errorMessages = [];
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '') {
        errorMessages.push('Por favor, ingrese su nombre.');
    }

    if (email === '') {
        errorMessages.push('Por favor, ingrese su correo electrónico.');
    } else if (!isValidEmail(email)) {
        errorMessages.push('Por favor, ingrese un correo electrónico válido.');
    }

    if (mensaje === '') {
        errorMessages.push('Por favor, ingrese su mensaje.');
    }

    const errorMessagesElement = document.getElementById('errorMessages');
    const successMessageElement = document.getElementById('successMessage');

    if (errorMessages.length > 0) {
        errorMessagesElement.innerHTML = errorMessages.join('<br>');
        successMessageElement.innerHTML = '';
    } else {
        errorMessagesElement.innerHTML = '';
        
        // Almacenar los datos en localStorage
        const contactData = {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fecha: new Date().toISOString()
        };
        
        let storedData = JSON.parse(localStorage.getItem('contactFormData')) || [];
        storedData.push(contactData);
        localStorage.setItem('contactFormData', JSON.stringify(storedData));

        successMessageElement.innerHTML = '¡Mensaje enviado con éxito!';
        this.reset();
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}