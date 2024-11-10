import "dotenv/config";

import registrarEventosCadastros from "./registrarEventos/cadastros.js";
import registrarEventosDocumento from "./registrarEventos/documento.js"
import registrarEventosinicio from "./registrarEventos/inicio.js"
import registrarEventosLogin from "./registrarEventos/login.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosCadastros(socket, io);
  registrarEventosLogin(socket, io);
  registrarEventosinicio(socket, io);
  registrarEventosDocumento(socket, io);  
});
