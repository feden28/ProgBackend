const socket = io();
const messageForm = document.getElementById("messageForm");
const usernameInput = document.getElementById("usernameInput");
const messageInput = document.getElementById("messageInput");
const messagesPool = document.getElementById("messagesPool");

// Definimos la funcion que envia mensajes
const sendMessage = (messageInfo) => {
  // Emitiendo el evento "client:message" para mandar la informacion del mensaje al back a traves de websocket
  socket.emit("client:message", messageInfo);
};

const renderMessage = (messagesData) => {
   
  const html = messagesData
  .map((messageInfo) => {
    return (`<div style="display: flex;"> 
            <strong style="color: blue">${messageInfo.username}: </strong> 
            <p style="font-family: italic; color: green;">${messageInfo.message}</p> 
            </div>
           `)
  })
  .join(" ");


  messagesPool.innerHTML = html;
};

// Definimos la funcion submit handler, se ejecuta cuando se dispara el evento submit del form, prevent default evita que el formulario reinicie
const submitHandler = (event) => {
  event.preventDefault();

  const messageInfo = {
    username: usernameInput.value,
    message: messageInput.value,
  };

  // sendMessage envia el mensaje al back pasandole como parametro la informacion del mensaje
  sendMessage(messageInfo);

  // Vaciamos el message
  messageInput.value = "";
  //usernameInput.readOnly = true; // esto es para que el usuario quede "bloqueado" despues de mandar el primer mensaje.
};

messageForm.addEventListener("submit", submitHandler);

socket.on("server:message", renderMessage);