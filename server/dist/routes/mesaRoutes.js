"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mesaController_1 = require("../controllers/mesaController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const roleMiddleware_1 = require("../middlewares/roleMiddleware");
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.verificarToken, mesaController_1.getMesas); // Se usa cuando hacen el GET
router.post('/', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)("administrador"), mesaController_1.crearMesa); // Se usa cuando hacen el POST
router.put('/:id_mesa', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)("administrador", "cajero"), mesaController_1.actualizarMesa);
router.delete('/:id_mesa', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)("administrador"), mesaController_1.eliminarMesa);
exports.default = router;
