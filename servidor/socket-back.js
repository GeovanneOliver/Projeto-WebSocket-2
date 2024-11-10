import registrarEventosCadastros from "./registrarEventos/cadastros.js";
import registrarEventosDocumento from "./registrarEventos/documento.js"
import registrarEventosinicio from "./registrarEventos/inicio.js"
import io from "./servidor.js";

io.on("connection", (socket) => {
  
  registrarEventosinicio(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosCadastros(socket, io);
});
