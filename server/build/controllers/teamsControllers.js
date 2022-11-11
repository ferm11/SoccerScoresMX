"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsController = void 0;
const database_1 = __importDefault(require("../database"));
class TeamsController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const teams = yield database_1.default.query('SELECT * FROM team');
            resp.json(teams);
        });
    }
    getTeam(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { teamId } = req.params;
            const team = yield database_1.default.query('SELECT * FROM team WHERE teamId = ?', [teamId]);
            if (team.length > 0) {
                return resp.json(team[0]);
            }
            resp.status(404).json({ Text: 'El equipo no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO team set?', [req.body]);
            resp.json({ message: 'Equipo agregado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { teamId } = req.params;
            yield database_1.default.query('DELETE FROM team WHERE teamId = ?', [teamId]);
            resp.json({ message: 'Equipo eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { teamId } = req.params;
            yield database_1.default.query('UPDATE team SET ? WHERE teamId = ?', [req.body, teamId]);
            resp.json({ message: 'Equipo actualizado' });
        });
    }
}
exports.teamsController = new TeamsController();
exports.default = exports.teamsController;
