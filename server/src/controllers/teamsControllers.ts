import { Request, Response } from "express";
import pool from "../database";

class TeamsController {
    public async list(req : Request, resp : Response) {
        const teams = await pool.query('SELECT * FROM team');
        resp.json(teams);
    }
    public async getTeam(req : Request, resp : Response) : Promise<any> {
        const {teamId} = req.params;
        const team = await pool.query('SELECT * FROM team WHERE teamId = ?', [teamId]);
        if (team.length > 0) {
            return resp.json(team[0]);
        }
        resp.status(404).json({Text : 'El equipo no existe'});
    }
    public async create(req : Request, resp : Response) : Promise<void> {
        await pool.query('INSERT INTO team set?', [req.body]);
        resp.json({message:'Equipo agregado'});
    }
    public async delete(req : Request, resp : Response) : Promise<any> {
        const {teamId} = req.params;
        await pool.query('DELETE FROM team WHERE teamId = ?', [teamId]);
        resp.json({message : 'Equipo eliminado'});
    }

    public async update(req : Request, resp : Response) : Promise<any> {
        const {teamId} = req.params;
        await pool.query('UPDATE team SET ? WHERE teamId = ?', [req.body, teamId]);
        resp.json({message : 'Equipo actualizado'});
    }

}
export const teamsController = new TeamsController();
export default teamsController;