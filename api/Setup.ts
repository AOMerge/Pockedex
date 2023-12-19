// server.js
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./views/router.v1";
import errorMiddleware  from "./src/middlewere/errorMiddlewere.v1";
import { sequelize } from "./models/useModel";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config();

// .env
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const PORT_SERVER = process.env.PORT_SERVER;

// passport
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
      callbackURL: "/auth/google/callback",
    },
    (accessToken: any, refreshToken: any, profile: any, cb: any) => {
      // Aquí, normalmente verificarías el perfil contra tu base de datos
      // y crearías o buscarías el usuario en la base de datos.

      return cb(null, profile);
    }
  )
);

const app = express();
const port = PORT_SERVER || 4000;

app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", userRoutes);
app.use(errorMiddleware);

// development  
/* sequelize.sync({ force: false, alter: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log("Database & tables created!");
    });
  })
  .catch((error: any) => {
    console.error("Failed to sync database:", error);
  }); */

/** production */
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });