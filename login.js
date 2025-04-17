const btn = document.getElementById('btn');

btn.addEventListener('click', function (entrar){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if(console.log(email.endsWith('@sesisp.org.br'))&&(senha == 1234)){
        window.location.href = "/index2.html";
    }else{
        alert('email errado');
    }
})