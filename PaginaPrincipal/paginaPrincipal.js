function mostrarCarta(personagem) {
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(carta => {
        carta.classList.remove('visivel');
        carta.style.display = 'none';
    });

    const cartaSelecionada = document.getElementById(`carta-${personagem}`);
    if (cartaSelecionada) {
        cartaSelecionada.style.display = 'block';
        setTimeout(() => cartaSelecionada.classList.add('visivel'), 10);
    }
}
