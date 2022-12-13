const socket = io();

const messageForm = document.getElementById('messageForm');
const productInput = document.getElementById('productInput');
const priceInput = document.getElementById('priceInput');
const linkInput = document.getElementById('linkInput');
const articlesPools = document.getElementById('articlesPools');

//sendMessage se ejecuta cuando se hace click en Submit del Form.
const sendMessage = (messageInfo) => {

    socket.emit("client:message", messageInfo);

};

//renderMessage renderiza el arreglo.
const renderMessage = (messagesData) => {

    const html = messagesData
    .map(messageInfo =>{
        return(`
        <div>
        <strong>${messageInfo.name}</strong>
        <p>${messageInfo.price}</p>
        <img src="${messagInfo.thumbnail}"/>
        
        </div>
        `)
    })
    .join(" ");

    articlesPools.innerHTML = html;
};

//submitHandler recibe la solicitud y la procesa. prevent Default hace que el listado no se resetee

const submitHandler = (event) => {
    event.preventDefault();

    const messageInfo = {
        name: productInput.value,
        price: priceInput.value,
    };

    sendMessage(messageInfo);
    productInput.value = "";
    priceInput.value = "";    //readonly es para no poder modificar el campo una vez completado
    linkInput.value = "";

};

messageForm.addEventListener("submit", submitHandler);

socket.on("server:message", renderMessage);
