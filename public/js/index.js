let socket = io();
socket.on('connect', () => {
  console.log('connected to the server');
});

socket.on('disconnect', () => {
  console.log('Disconected from server');
});

socket.on('newMessage', (message) => {
  console.log('newMessage', message);
  let li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', (e) => {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, () => {
    
  })
});