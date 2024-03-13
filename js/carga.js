document.querySelectorAll('.loginPersona').forEach(function (button) {
    button.addEventListener('click', function () {
        // Mostrar pantalla de carga
        document.getElementById('loaderContainer').style.display = 'flex'; // Muestra la pantalla de carga

        // Simular carga durante 2 segundos
        setTimeout(function () {
            // Redirigir a login_persona.html
            window.location.href = 'login_persona.html';
        }, 1000); // 2000 milisegundos = 2 segundos
    });
});

document.querySelectorAll('.loginEmpresa').forEach(function (button) {
    button.addEventListener('click', function () {
        // Mostrar pantalla de carga
        document.getElementById('loaderContainer').style.display = 'flex'; // Muestra la pantalla de carga

        // Simular carga durante 2 segundos
        setTimeout(function () {
            // Redirigir a Login_empresa.html
            window.location.href = 'Login_empresa.html';
        }, 1000); // 2000 milisegundos = 2 segundos
    });
});

document.querySelectorAll('.RegistroEmpresa').forEach(function (button) {
    button.addEventListener('click', function () {
        // Mostrar pantalla de carga
        document.getElementById('loaderContainer').style.display = 'flex'; // Muestra la pantalla de carga

        // Simular carga durante 2 segundos
        setTimeout(function () {
            // Redirigir a Registrar_empresa.html
            window.location.href = 'Registrar_empresa.html';
        }, 1000); // 2000 milisegundos = 2 segundos
    });
});

document.querySelectorAll('.RegistroPersona').forEach(function (button) {
    button.addEventListener('click', function () {
        // Mostrar pantalla de carga
        document.getElementById('loaderContainer').style.display = 'flex'; // Muestra la pantalla de carga

        // Simular carga durante 2 segundos
        setTimeout(function () {
            // Redirigir a Registrar_persona.html
            window.location.href = 'Registrar_persona.html';
        }, 1000); // 2000 milisegundos = 2 segundos
    });
});

document.getElementById('logo').addEventListener('click', function () {
    // Mostrar pantalla de carga
    document.getElementById('loaderContainer').style.display = 'flex'; // Muestra la pantalla de carga

    // Simular carga durante 2 segundos
    setTimeout(function () {
        // Redirigir a Inicio.html
        window.location.href = 'Inicio.html';
    }, 1000); // 2000 milisegundos = 2 segundos
});

document.querySelectorAll('.contraseña_olvidada').forEach(function (button) {
    button.addEventListener('click', function () {
        // Mostrar pantalla de carga
        document.getElementById('loaderContainer').style.display = 'flex'; // Muestra la pantalla de carga

        // Simular carga durante 2 segundos
        setTimeout(function () {
            // Redirigir a Registrar_persona.html
            window.location.href = 'contraseña_olvidada.html';
        }, 1000); // 2000 milisegundos = 2 segundos
    });
});


