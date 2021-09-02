import {Sequelize} from "sequelize";

export const database = new Sequelize({
    database: "twitter_clone",
    dialect: "sqlite",
    storage:":memory:"
})
