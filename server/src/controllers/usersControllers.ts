import { Request, Response } from "express";
import pool from "../database";

class UsersController {
    public async list(req : Request, resp : Response) {
        const users = await pool.query('SELECT * FROM user');
        resp.json(users);
    }
    public async getUser(req : Request, resp : Response) : Promise<any> {
        const {userId} = req.params;
        const user = await pool.query('SELECT * FROM user WHERE userId = ?', [userId]);
        if (user.length > 0) {
            return resp.json(user[0]);
        }
        resp.status(404).json({Text : 'El usuario no existe'});
    }
    public async create(req : Request, resp : Response) : Promise<void> {
        await pool.query('INSERT INTO user set?', [req.body]);
        resp.json({message:'Usuario agregado'});
    }
    public async delete(req : Request, resp : Response) : Promise<any> {
        const {userId} = req.params;
        await pool.query('DELETE FROM user WHERE userId = ?', [userId]);
        resp.json({message : 'Usuario eliminado'});
    }

    public async update(req : Request, resp : Response) : Promise<any> {
        const {userId} = req.params;
        await pool.query('UPDATE user SET ? WHERE userId = ?', [req.body, userId]);
        resp.json({message : 'Usuario actualizado'});
    }
}
export const usersController = new UsersController();
export default usersController;