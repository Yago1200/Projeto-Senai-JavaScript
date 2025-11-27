// script.js — comportamento simples (alert "Enviado")
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            // aqui poderia enviar via fetch/AJAX — por enquanto mostra apenas o alert solicitado
            alert('Enviado');
            form.reset();
        });
    }
});
