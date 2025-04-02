const { Server } = require("socket.io");

const io = new Server(3001, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  setInterval(() => {
    socket.emit("cryptoPrice", { name: "Bitcoin", price: (45000 + Math.random() * 100).toFixed(2) });
  }, 3000);

  socket.on("disconnect", () => console.log("Client disconnected"));
});
