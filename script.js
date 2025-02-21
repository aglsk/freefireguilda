// Função para fechar o aviso
function fecharAviso() {
    document.getElementById("overlayAviso").style.display = "none";
}

// Função para fechar o diálogo de sucesso
function fecharDialogo() {
    document.getElementById("dialogo").style.display = "none";
}

// Manipulando o envio do formulário
document.getElementById("recrutamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!document.getElementById("aceitarRegras").checked) {
        alert("⚠️ Você deve aceitar as regras antes de enviar!");
        return;
    }

    let nome = document.getElementById("nome").value;
    let nick = document.getElementById("nick").value;
    let id = document.getElementById("id").value;
    let contato = document.getElementById("contato").value;

    let mensagem = `🔥 Pedido de Recrutamento 🔥\n\n` +
                   `👤 Nome: ${nome}\n` +
                   `🎮 Nick: ${nick}\n` +
                   `🆔 ID Free Fire: ${id}\n` +
                   `📱 Contato: ${contato}\n\n` +
                   `💀 Enviado via Formulário da Guilda!`;

    let apiUrl = `https://api.callmebot.com/whatsapp.php?phone=5521976402296&text=${encodeURIComponent(mensagem)}&apikey=2202603`;

    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                document.getElementById("dialogo").style.display = "block";
            } else {
                alert("❌ Erro ao enviar o recrutamento. Tente novamente mais tarde.");
            }
        })
        .catch(error => {
            alert("❌ Falha na conexão com o servidor.");
        });
});
