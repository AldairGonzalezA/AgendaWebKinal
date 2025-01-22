document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const usuario = {
                correo: username,
                contra: password
            };
            console.log(usuario);
            localStorage.setItem('Usuario', JSON.stringify(usuario));

            window.location.href = 'Contactos.html';
        });
    } else {
        console.error("Formulario no encontrado");
    }

    const user = JSON.parse(localStorage.getItem('Usuario'));
    if (user) {
        document.getElementById('emailLabel').innerHTML = `${user.correo}`;
        document.getElementById('passwordLabel').innerHTML = `${user.contra}`;
    }
});
