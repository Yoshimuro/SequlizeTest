import {Request, Response} from "express";
import {Link, LinkInterface} from "../models/links.model";
import {DestroyOptions, UpdateOptions} from "sequelize";


export class LinksController{
    public index(_req: Request, res: Response) {
        Link.findAll<Link>({})
            .then((links: Array<Link>)=> res.json(links))
            .catch((err:Error) => res.status(500).json(err))
    }
    public create(req: Request, res: Response){
        const params: LinkInterface = req.body;

        Link.create<Link>(params)
            .then((link: Link) => res.status(201).json(link))
            .catch((err:Error) => res.status(500).json(err))
    }
    public show(req:Request, res: Response){
        const linkId: number = parseInt(req.params.id);

        Link.findByPk<Link>(linkId)
            .then((link: Link | null) => {
                if (link) {
                    res.json(link)
                } else {
                    res.status(404).json({errors: ["Link not found"]})
                }
            })
    }
    public update(req: Request, res: Response){
        const linkId: number = parseInt(req.params.id);
        const params: LinkInterface = req.body

        const options: UpdateOptions = {
            where: {id: linkId},
            limit: 1
        };

        Link.update(params,options)
            .then(() => res.status(202).json({data: "update success"}))
            .catch((err: Error)=> res.status(500).json(err))
    }
    public delete(req: Request, res: Response){
        //@ts-ignore
        const linkId: number = req.params.id;

        const options: DestroyOptions= {
            where: {id: linkId},
            limit: 1
        }
        Link.destroy(options)
            .then(()=> res.status(202).json({data: "delete success"}))
            .catch((err: Error) => res.status(500).json(err))
    }
}