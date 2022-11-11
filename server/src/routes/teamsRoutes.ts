import { Router } from "express";
import { teamsController } from '../controllers/teamsControllers';

class TeamsRoutes{
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/', teamsController.list);
        this.router.get('/:teamId', teamsController.getTeam);
        this.router.post('/', teamsController.create);
        this.router.delete('/:teamId', teamsController.delete);
        this.router.put('/:teamId', teamsController.update);
    }
}

const teamsRoutes = new TeamsRoutes();
export default teamsRoutes.router;