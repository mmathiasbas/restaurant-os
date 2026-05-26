"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const roleMiddleware_1 = require("../middlewares/roleMiddleware");
const router = (0, express_1.Router)();
router.post('/reset-demo', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)('administrador'), adminController_1.resetDemo);
exports.default = router;
