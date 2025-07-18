let emailInput = document.getElementById('email');
let senhaInput = document.getElementById('senha');
let botao = document.getElementById('botao');

botao.addEventListener('click',function() {
    let senha = senhaInput.value;
    let nome = emailInput.value

    if (senha != nome + 123){
        senhaInput.classList.add('outline-2', 'outline-red-600')
    }else {
        window.location.href = "../html/index.html";
    }
})

