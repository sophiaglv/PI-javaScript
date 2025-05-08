const btn = document.getElementById('btn');

btn.addEventListener('click', function (cadastro) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const serie = document.getElementById('serie').value;
    const senha = document.getElementById('senha').value;

    let valid = true;

    if (nome === "") {
        const msg = document.getElementById('campo');
        msg.textContent = 'Campo vazio';
        valid = false;
    }

    if (email === "") {
        const msg = document.getElementById('campo2');
        msg.textContent = 'Campo vazio';
        valid = false;
    } else if (email.endsWith("@sesisp.org.br") || (email.endsWith("@portalsesisp.org.br"))) {
    } else {
        const msg = document.getElementById('campo2');
        msg.textContent = 'Email incorreto';
        valid = false;
    }

    if (serie === "Série") {
        const msg = document.getElementById('campo3');
        msg.textContent = 'Campo vazio';
        valid = false;
    }

    if (senha === "") {
        const msg = document.getElementById('campo4');
        msg.textContent = 'Campo vazio';
        valid = false;
    } else if (senha.length <= 8) {
        const msg = document.getElementById('campo4');
        msg.textContent = 'A senha deve ter pelo menos 8 caracteres.';
        valid = false;
    }

    if (valid) {
        window.location.href = "/login.html";
    }
})

