"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventaController_1 = require("../controllers/ventaController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const roleMiddleware_1 = require("../middlewares/roleMiddleware");
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)('administrador'), ventaController_1.getVentas);
exports.default = router;
