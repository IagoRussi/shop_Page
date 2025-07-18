let contador = 0;
const precoUnitario = 250.00;

// Seleciona todos os elementos que vão ser atualizados
const contadorSpan = document.getElementById('contador');
const subtotalSpan = document.getElementById('subtotal');
const cartCountSpan = document.getElementById('cart-count'); // <- AQUI ESTAVA FALTANDO

// Seleciona todos os botões que dizem "Comprar"
const buyButtons = document.querySelectorAll('button');

buyButtons.forEach((button) => {
    if (button.textContent.trim().toLowerCase() === "comprar") {
        button.addEventListener('click', () => {
            contador++;

            // Atualiza os textos
            contadorSpan.textContent = `${contador} Itens`;
            cartCountSpan.textContent = contador; // <- ATUALIZA O BADGE AQUI
            const subtotal = contador * precoUnitario;
            subtotalSpan.textContent = `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        });
    }
});
