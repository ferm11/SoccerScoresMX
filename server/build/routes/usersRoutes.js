"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', usersControllers_1.usersController.list);
        this.router.get('/:userId', usersControllers_1.usersController.getUser);
        this.router.post('/', usersControllers_1.usersController.create);
        this.router.delete('/:userId', usersControllers_1.usersController.delete);
        this.router.put('/:userId', usersControllers_1.usersController.update);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
