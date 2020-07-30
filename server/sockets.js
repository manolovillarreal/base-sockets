const { io } = require("./server");

io.on("connection", (client) => {
  console.log("Usuario Conectado");

  client.emit("welcomeMessage", {
    message: "Bienvendio al servidor-websocktes",
  });
  client.broadcast.emit("userConnection", {
    message: "Se ha conectado un usuario",
  });

  //Listeners
  client.on("broadcastEmit", (data, callback) => {
    console.log("Cliente:", data);
    client.broadcast.emit("broadcastEmit", data);
    callback({ message: "la data fue recibida correctamente" });
  });
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
    client.broadcast.emit("userDisconnect", {
      message: "Se ha desconectado un usuario",
    });
  });
});
