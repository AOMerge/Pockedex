// database.js
import { Sequelize } from "sequelize-typescript";
import { DataUser } from "./dataUser.model";
import { User } from "./user.model";
import { Saves } from "./save.model";
import { Likes } from "./likes.model";
import { SavesLikes } from "./saveLike.model";
import * as dotenv from "dotenv";
dotenv.config();


// Export the sequelize instance to be used in models and wherever else needed
export const sequelize = new Sequelize({
  database: process.env.DATABASETEST,
  username: process.env.USERNAMETEST,
  password: process.env.PASSWORDTEST,
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  models: [User, DataUser, Saves, SavesLikes,Likes],
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: console.log
});

