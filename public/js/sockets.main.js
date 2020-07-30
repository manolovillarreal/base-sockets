var socket = io();

//Listeners

socket.on("connect", function () {
  console.log("Conexión websocket exitosa");
});
socket.on("welcomeMessage", function (resp) {
  console.log("Server :", resp.message);
});
socket.on("broadcastEmit", function (resp) {
  console.log("Server :", resp.message);
});
socket.on("userConnection", function (resp) {
  console.log("Server :", resp.message);
});
socket.on("userDisconnect", function (resp) {
  console.log("Server: ", resp.message);
});

function broadcastEmit(message) {
  console.log("click");
  socket.emit("broadcastEmit", { message: message }, function (resp) {
    if (!resp.err) console.log("Server: " + resp.message);
  });
}
