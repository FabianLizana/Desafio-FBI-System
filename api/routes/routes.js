import { Router } from "express";
import { renderHome } from "../controllers/home.controller.js";
import { login } from "../controllers/login.controller.js";
import { renderPrivate } from "../controllers/private.controller.js";

const router = Router();

router.get("/", renderHome);
// 1. Crear una ruta que autentique a un agente basado en sus credenciales y genere un token con sus datos. (3 Puntos)
// ---PASO 1 PUNTO 1---He creado la siguiente ruta que cumple con lo solicitado:
router.post("/login", login);

// 3. Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado, 
// en caso contrario devolver un estado HTTP que indique que el usuario no está autorizado y 
// un mensaje que menciona la descripción del error. (3 Puntos)
// ---PASO 1 PUNTO 3---He creado la siguiente ruta restringida:
router.get("/private", renderPrivate);

export default router;
