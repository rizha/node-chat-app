let socket = io();
socket.on('connect', () => {
  console.log('connected to the server');

  socket.emit('createMessage', {
    from: 'rizha',
    text: 'Yup, that works for me.'
  });
});

socket.on('disconnect', () => {
  console.log('Disconected from server');
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
});