// lib/config/routes.ts
import { Request, Response } from "express";
import { NodesController } from "../controllers/nodes.controller";

export class Routes {
    public nodesController: NodesController = new NodesController();

    public routes(app): void {
        app.route("/").get(this.nodesController.index);


        app.route("/nodes").get(this.nodesController.index);
    }
}
