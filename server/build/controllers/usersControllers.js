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
exports.usersController = void 0;
const database_1 = __importDefault(require("../database"));
class UsersController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM user');
            resp.json(users);
        });
    }
    getUser(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            const user = yield database_1.default.query('SELECT * FROM user WHERE userId = ?', [userId]);
            if (user.length > 0) {
                return resp.json(user[0]);
            }
            resp.status(404).json({ Text: 'El usuario no existe' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO user set?', [req.body]);
            resp.json({ message: 'Usuario agregado' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            yield database_1.default.query('DELETE FROM user WHERE userId = ?', [userId]);
            resp.json({ message: 'Usuario eliminado' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.params;
            yield database_1.default.query('UPDATE user SET ? WHERE userId = ?', [req.body, userId]);
            resp.json({ message: 'Usuario actualizado' });
        });
    }
}
exports.usersController = new UsersController();
exports.default = exports.usersController;
