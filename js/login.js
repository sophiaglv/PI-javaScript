const btn = document.getElementById('btn');

btn.addEventListener('click', function entrar(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if(email.endsWith('@sesisp.org.br')&&(senha == '0987654321')){
        window.location.href = "/index2.html";
    }else if(email.endsWith('@portalsesisp.org.br')&&(senha == '1234567890')){
        window.location.href = "/index.html";
    }
    else{
        const msg = document.getElementById('msg');
        msg.textContent = 'Email ou senha incorretos';
    }
})
