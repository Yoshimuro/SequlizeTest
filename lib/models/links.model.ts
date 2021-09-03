import {DataTypes, Model} from "sequelize";
import {database} from "../config/database";

export class Link extends Model{
    public id!:number;
    public fromId!:number;
    public toId!:number;
    public readonly  createdAt!: Date;
    public readonly  updatedAt!: Date;
}
export interface LinkInterface{
    name: string;
    fromID:number;
    toID: number;
}
Link.init(
    {
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement:true,
            primaryKey:true
        },
        fromId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false
        },
        toId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false
        }
    },
    {
        tableName:"links",
        sequelize:database
    }
);

Link.sync({force:true}).then(()=> console.log("links Table created"))