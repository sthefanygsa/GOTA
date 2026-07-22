document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form') || document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const btnEnviar = contactForm.querySelector('.btn-submit') || contactForm.querySelector('button[type="submit"]');
            const textoOriginal = btnEnviar ? btnEnviar.textContent : "Enviar Mensagem";

            if (btnEnviar) {
                btnEnviar.textContent = "Enviando...";
                btnEnviar.disabled = true;
            }

            const formData = new FormData(contactForm);
            
            const emailDestino = "sthefanygsa@gmail.com"; 

            fetch(`https://formsubmit.co/ajax/${emailDestino}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true" || data.success === true) {
                    alert("Mensagem enviada com sucesso!");
                    contactForm.reset(); 
                } else {
                    alert("Ops! Ocorreu um problema no servidor de envio.");
                }
            })
            .catch(error => {
                console.error("Erro no envio:", error);
                alert("Erro de conexão ao tentar enviar a mensagem.");
            })
            .finally(() => {
                if (btnEnviar) {
                    btnEnviar.textContent = textoOriginal;
                    btnEnviar.disabled = false;
                }
            });
        });
    }
});