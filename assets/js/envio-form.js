document.getElementById("contato").addEventListener("input", function(event) {
    var contatoInput = event.target;
    var formattedContato = formatContato(contatoInput.value);
    contatoInput.value = formattedContato;
});

function formatContato(contato) {
    contato = contato.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    var formattedContato = contato;

    if (contato.length > 2) {
        formattedContato = "(" + contato.substring(0, 2) + ") ";

        if (contato.length > 6) {
            formattedContato += contato.substring(2, 6) + "-" + contato.substring(6, 10);
        } else {
            formattedContato += contato.substring(2);
        }
    }

    return formattedContato;
}

document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os dados do formulário
    var nome = document.getElementById("nome").value;
    var contato = document.getElementById("contato").value;
    var mensagem = document.getElementById("message").value;

    // Formata a mensagem para enviar via WhatsApp
    var whatsappMessage = "Olá! Meu nome é " + nome + " . " + mensagem + ". Meu contato é: " + contato;

    // Redireciona para o WhatsApp com a mensagem preenchida
    window.location.href = "https://api.whatsapp.com/send?phone=559184097797&text=" + encodeURIComponent(whatsappMessage);
});