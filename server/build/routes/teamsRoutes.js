"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamsControllers_1 = require("../controllers/teamsControllers");
class TeamsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', teamsControllers_1.teamsController.list);
        this.router.get('/:teamId', teamsControllers_1.teamsController.getTeam);
        this.router.post('/', teamsControllers_1.teamsController.create);
        this.router.delete('/:teamId', teamsControllers_1.teamsController.delete);
        this.router.put('/:teamId', teamsControllers_1.teamsController.update);
    }
}
const teamsRoutes = new TeamsRoutes();
exports.default = teamsRoutes.router;
