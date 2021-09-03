import {Request, Response} from "express";
import {Node} from "../models/node.models";
import {Link} from "../models/links.model";


export class GrapthController{
    public mermaid(req: Request, res: Response){
        const getMermaid = new Promise<string>((resolve,reject) =>{
            let graphDefinition = "graph TD;\r\n";
            Node.findAll({})
                .then((nodes: Array<Node>) => {
                    nodes.forEach((node:Node) => {
                        graphDefinition += `${node.id}[${node.name}];\r\n`
                    })
                })

            .then(()=> Link.findAll())
            .then((links: Array<Link>)=> {
                links.forEach((link:Link) => {
                    graphDefinition += `${link.fromId}--> ${link.toId}; \r\n`
                })
                resolve(graphDefinition);
            })
                .catch((err:Error) => reject(err))
        })
        getMermaid
            .then((graph: string)=> res.send(graph))
            .catch((err:Error)=> res.status(500).json(err))
    }
}