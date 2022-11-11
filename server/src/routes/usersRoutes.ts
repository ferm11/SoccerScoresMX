import { Router } from "express";
import { usersController } from '../controllers/usersControllers';

class UsersRoutes{
    public router : Router = Router();

    constructor() {
        this.config();
    }

    config() : void {
        this.router.get('/', usersController.list);
        this.router.get('/:userId', usersController.getUser);
        this.router.post('/', usersController.create);
        this.router.delete('/:userId', usersController.delete);
        this.router.put('/:userId', usersController.update);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;