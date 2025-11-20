// Exemplo simples: Alerta ao clicar em "Comprar"
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Funcionalidade de compra ainda não implementada. Use uma plataforma como Shopify para dropshipping real!');
    });
});

// Validação básica do formulário
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada! (Simulação)');
});