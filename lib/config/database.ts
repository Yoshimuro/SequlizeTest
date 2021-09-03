import {Sequelize} from "sequelize";

export const database = new Sequelize({
    database: "db",
    host: 'localhost',
    dialect: "sqlite",
    storage:"./db.sqlite"
})
