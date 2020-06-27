const socket = io('http://localhost:3000')

const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input')

socket.on('chat-message', data => {
    console.log(data)
})

messageForm.addEventListener('submit', e => {
    //to prevent the page from reloading on submit
    e.preventDefault()
    const message = messageInput.value 
    socket.emit('send-chat-message', message)
    //empty textbox after sending  message
    messageInput.value = '';
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
}