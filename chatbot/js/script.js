
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
    "oi": "Olá! Como posso ajudar?",
    "qual é o seu nome?": "Eu sou um chatbot simples.",
    "como você está?": "Estou apenas um código, mas obrigado por perguntar!",
    "tchau": "Até logo! Se cuide.",
    "quem te criou?": "Quem me desenvolveu foi o @caducrs!!",
};

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Rola para baixo
}

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        addMessage('Você', userMessage);
        userInput.value = '';

        const botResponse = responses[userMessage] || "Desculpe, não entendi.";
        addMessage('Bot', botResponse);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});




