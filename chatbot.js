
const questionBank = [
    { keywords: ["salut", "buna", "hei"], response: "Salutare! Cu ce te pot ajuta astăzi?" },
    { keywords: ["proiecte", "portofoliu", "aplicatii"], response: "Am lucrat la aplicații în C++, sisteme de baze de date SQL și proiecte Web. Le poți vedea pe pagina de Proiecte!" },
    { keywords: ["educatie", "facultate", "studii"], response: "Sunt student la Informatică în cadrul Universității de Vest din Timișoara, din anul 2025." },
    { keywords: ["skills", "abilitati", "programare"], response: "Cunosc limbaje precum JavaScript, C/C++, Java și lucrez cu instrumente ca Git și Figma." },
    { keywords: ["contact", "email"], response: "Mă poți contacta folosind formularul de pe pagina de Contact sau prin email la razvan.mocioi03@e-uvt.ro." }
];


const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const userText = userInput.value.trim();
    if (userText === '') return;
    appendMessage(userText, 'user-message');

    userInput.value = ''; 

    setTimeout(() => {
        const botResponse = getBotResponse(userText);
        appendMessage(botResponse, 'bot-message');
    }, 500);
});

function getBotResponse(text) {
    const cleanText = text.toLowerCase();
    
    for (let item of questionBank) {
        for (let keyword of item.keywords) {
            if (cleanText.includes(keyword)) {
                return item.response;
            }
        }
    }
    return "Ne pare rău, nu am înțeles întrebarea. Încearcă să folosești cuvinte cheie ca: proiecte, educatie, skills sau contact.";
}

function appendMessage(text, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = text;
    
    chatBox.appendChild(messageElement);
    
    chatBox.scrollTop = chatBox.scrollHeight;
}