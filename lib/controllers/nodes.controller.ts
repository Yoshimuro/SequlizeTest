// lib/controllers/nodes.controller.ts
import { Request, Response } from "express";
import { Node } from "../models/node.models";

export class NodesController {
    public index(req: Request, res: Response) {
        Node.findAll<Node>({})
            .then((nodes: Array<Node>) => res.json(nodes))
            .catch((err: Error) => res.status(500).json(err));
    }
}

