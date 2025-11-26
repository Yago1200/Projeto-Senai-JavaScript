// Requisito 3: Formulário deve mostrar um alerta com a mensagem “Enviado”, ao clicar no botão “Enviar”.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o formulário pelo seu ID
    const form = document.getElementById('contactForm');

    // 2. Adiciona um "ouvinte de evento" para o envio do formulário
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário
        event.preventDefault(); 
        
        // 3. Mostra a mensagem de alerta
        alert('Enviado');

        // Opcional: Limpar o formulário após o envio
        form.reset();
    });
});