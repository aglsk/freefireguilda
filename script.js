// Função para fechar o aviso
function fecharAviso() {
    document.getElementById("overlayAviso").style.display = "none";
}

// Função para fechar o diálogo de sucesso
function fecharDialogo() {
    document.getElementById("dialogo").style.display = "none";
}

// Manipulando o envio do formulário
document.getElementById("recrutamentoForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Verifica se as regras foram aceitas
    if (!document.getElementById("aceitarRegras").checked) {
        alert("⚠️ Você deve aceitar as regras antes de enviar!");
        return;
    }

    // Obtendo valores do formulário
    let nome = document.getElementById("nome").value.trim();
    let nick = document.getElementById("nick").value.trim();
    let id = document.getElementById("id").value.trim();
    let contato = document.getElementById("contato").value.trim();
    let botaoEnviar = document.querySelector("#recrutamentoForm button[type='submit']");

    // Verifica se algum campo está vazio
    if (!nome || !nick || !id || !contato) {
        alert("⚠️ Todos os campos são obrigatórios!");
        return;
    }

    // Formata a mensagem para envio
    let mensagem = `🔥 Pedido de Recrutamento 🔥\n\n` +
                   `👤 Nome: ${nome}\n` +
                   `🎮 Nick: ${nick}\n` +
                   `🆔 ID Free Fire: ${id}\n` +
                   `📱 Contato: ${contato}\n\n` +
                   `💀 Enviado via Formulário da Guilda!`;

    let apiUrl = `https://api.callmebot.com/whatsapp.php?phone=5500000000000&text=${encodeURIComponent(mensagem)}&apikey=0000000`;

    try {
        // Desativa o botão enquanto envia
        botaoEnviar.disabled = true;
        botaoEnviar.innerText = "Enviando...";

        let response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Erro ao conectar com a API.");
        }

        // Exibe a mensagem de sucesso e limpa o formulário
        document.getElementById("dialogo").style.display = "block";
        document.getElementById("recrutamentoForm").reset();

    } catch (error) {
        alert("❌ Erro ao enviar o recrutamento. Tente novamente mais tarde.");
    } finally {
        // Reativa o botão após a tentativa de envio
        botaoEnviar.disabled = false;
        botaoEnviar.innerText = "Enviar";
    }
});
