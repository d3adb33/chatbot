const socket = io();

const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value;
  socket.emit('chat message', message);
  input.value = '';
});

socket.on('chat message', (message) => {
  const li = document.createElement('li');
  li.textContent = message;
  messages.appendChild(li);
});

