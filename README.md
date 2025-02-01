# Recrutamento - Guilda

## 📌 Sobre o Projeto
Este projeto é um **formulário de recrutamento** para jogadores interessados em entrar na **Guilda** no Free Fire. O site permite que os jogadores enviem seus dados diretamente para o WhatsApp da administração da guilda.

## 🚀 Tecnologias Utilizadas
- **HTML** → Estrutura do site
- **CSS** → Estilização com design inspirado no Free Fire
- **JavaScript** → Validação do formulário e envio dos dados via API do CallMeBot
- **CallMeBot API** → Envio automático dos dados para o WhatsApp

## 🔧 Como Usar
1. **Preencha o formulário** com Nome, Nick, ID do Free Fire e Contato (WhatsApp).
2. **Aceite as regras** para poder enviar.
3. **Clique no botão** "Enviar Cadastro".
4. **Os dados serão enviados automaticamente** para o WhatsApp da administração.
5. **Aguarde o contato** para a próxima etapa do recrutamento!

## 📩 Configuração da API do WhatsApp
O envio dos dados do formulário é feito via **CallMeBot API**. O código JavaScript já está configurado para enviar os dados para o número oficial da guilda.

### 🔗 URL da API Utilizada:
```
https://api.callmebot.com/whatsapp.php?phone=+5500000000000&text=<mensagem>&apikey=0000000
```

### 🛠 Personalização
Caso precise alterar o número de WhatsApp ou API Key, modifique esta parte do código em `script.js`:
```js
let apiUrl = `https://api.callmebot.com/whatsapp.php?phone=+5500000000000&text=${encodeURIComponent(mensagem)}&apikey=0000000`;
```

## 🎨 Estilo do Site
O site foi projetado com **um tema escuro**, utilizando **tons de preto, dourado e vermelho**, seguindo a estética do Free Fire.

## 📌 Funcionalidades
✅ Formulário estilizado e responsivo<br>
✅ Validação de campos (ID Free Fire e Contato aceitam apenas números)<br>
✅ Aviso obrigatório para aceitar as regras antes do envio<br>
✅ Envio automático para o WhatsApp da guilda via CallMeBot API<br>
✅ Alerta estilo Free Fire ao enviar os dados<br>

## 📜 Licença
[Clique Aqui](LICENSE)

---
🔗 [Instagram Oficial da Guilda](https://www.instagram.com/)

