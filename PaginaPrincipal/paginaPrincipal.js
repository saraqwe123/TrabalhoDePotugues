function mostrarCarta(personagem) {
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(carta => {
        carta.classList.remove('visivel');
        carta.style.display = 'none'; // Garante que todas as cartas sejam ocultas
    });

    const cartaSelecionada = document.getElementById(`carta-${personagem}`);
    if (cartaSelecionada) {
        cartaSelecionada.style.display = 'block'; // Exibe a carta
        setTimeout(() => cartaSelecionada.classList.add('visivel'), 10); // Aplica a animação
    }
}
