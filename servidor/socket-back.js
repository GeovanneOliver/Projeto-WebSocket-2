import "dotenv/config";

import registrarEventosCadastros from "./registrarEventos/cadastros.js";
import registrarEventosDocumento from "./registrarEventos/documento.js"
import registrarEventosinicio from "./registrarEventos/inicio.js"
import registrarEventosLogin from "./registrarEventos/login.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuarios.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket)=>{
  registrarEventosinicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);  
});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastros(socket, io);
  registrarEventosLogin(socket, io);
});
