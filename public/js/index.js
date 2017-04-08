let socket = io();
socket.on('connect', () => {
  console.log('connected to the server');
});

socket.on('disconnect', () => {
  console.log('Disconected from server');
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
});