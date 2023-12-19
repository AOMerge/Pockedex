// - Date: 15/12/2023
// UserController.js
// library
import { Request, Response } from "express";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import passport, { Passport } from "passport";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// interface
import { IUser } from "../src/interfaces/useInterface.v1";
import {
  ILogin,
  IcheckEmail,
  IdelateUser,
  IdelateCheckUser,
  IUpdateUser
} from "../src/interfaces/useImodels";
// models
import { DataUser } from "../models/dataUser.model";
import { User } from "../models/user.model";
// middleware
import {
  UserDto,
  checkEmailDto,
  deleteDto,
  checkpassDto,
  UserUpdateDto,
} from "../src/middlewere/validation/user.middlewere";
import { checkEmail } from "../src/middlewere/email/checkemail.middlewere";
import { debbugMiddlewere } from "../src/middlewere/debbug/debbug.middlewere";

// .env
const JWT_SECRET = process.env.JWT_SECRET || "";

/** UserController is
 * a contoller for the user routes of the API.
 */
export class UserController {
  // public methods
  public async getAll(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public async geTest(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      return this.gettest(req, res);
    } catch (error: any ) {
      return error;
    }
  }
  /**
   * generates a token and sends an email to the user to verify their email.
   *
   * @param req  - The request object.
   * @param res  - The response object.
   * @returns A promise that resolves to the response containing the saved user.
   */
  public async save(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      return this?.getsave(req, res);
    } catch (error: any) {
      return error;
    }
  }
  /**
   * Verifies the token and saves the user and generates a token.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the saved user.
   */
  public async saveCheck(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      return this.getSaveCheck(req, res);
    } catch (error: any) {
      return error;
    }
  }
  /**
   * Logs in a user.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the user data.
   */
  public async login(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      return this.getlogin(req, res);
    } catch (error: any) {
      return error;
    }
  }
  /**
   * Updates a user.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the updated user.
   */
  public async update(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      return this.getupdate(req, res);
    } catch (error: Error | any) {
      return error;
    }
  }
  /**
   * Deletes a user.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the deleted user.
   */
  public async delete(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      return this.getdelete(req, res);
    } catch (error: Error | any) {
      return error;
    }
  }
  /**
   * Deletes a check.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the deleted user.
   */
  public async deleteCheck(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      return this.getdeletecheck(req, res);
    } catch (error: Error | any) {
      return error;
    }
  }
  /**
   * Authenticates the user using Google OAuth.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the authenticated user.
   */
  public async authGoogle(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      return this.getAuthGoogle(req, res);
    } catch (error: Error | any) {
      return error;
    }
  }
  /**
   * Handles the callback from Google authentication.
   * 
   * @param req - The request object.
   * @param res - The response object.
   * @returns A promise that resolves to the response containing the authenticated user.
   */
  public async authGoogleCallback(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      return this.getAuthGoogleCallback(req, res);
    } catch (error: Error | any) {
      return error;
    }
  }

  // private methods
  private gettest(req: Request, res: Response) {
    try {
      return res.status(200).json("test");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getsave(req: Request, res: Response): Promise<Response<IUser>> {
    try {
      //  request
      const body: IUser | any = req.body as IUser;
      const createUserDto = plainToClass(UserDto, body);
      const errors = await validate(createUserDto);
      console.log(body);
      // validate
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      // validate email
      const dataUser = await DataUser.findOne({
        where: {
          email: body.email,
        },
      });
      await debbugMiddlewere.ifError(dataUser, "El usuario ya existe");
      // token
      const token = Jwt.sign(body, JWT_SECRET, {
        expiresIn: "15m",
      });

      /*// send email
      const email = await checkEmail(body.email, token).catch((err) => {
        return res.status(400).json({err, error: "error"});
      }); */

      // response
      return res
        .status(200)
        .json([
          { status: 200, messenge: "Mensaje de confirmación enviado", token },
        ]);
    } catch (error: Error | any) {
      return res.status(400).json([{ status: 400, message: error.message }]);
    }
  }
  private async getSaveCheck(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      ////  request
      const params: IcheckEmail | any = req.query as unknown as IcheckEmail;
      const createUserDto = plainToClass(checkEmailDto, params);
      const errors = await validate(createUserDto);
      // debbug errors
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }

      //// auth token
      // decode token
      const decode: IUser | Jwt.JwtPayload = (await Jwt.verify(
        params.token,
        JWT_SECRET
      )) as Jwt.JwtPayload;
      // debbug decode
      await debbugMiddlewere.ifError(!decode, "error");

      //// auth email
      // find email
      const dataUserAuth = await DataUser.findOne({
        where: {
          email: decode.email,
        },
      });
      // debbug dataUserAuth
      await debbugMiddlewere.ifError(dataUserAuth, "El usuario ya existe");

      //// encriptin password
      const password = await bcrypt.hash(decode.password, 10);

      //// save
      // save dataUser
      const dataUser = await DataUser.create({
        email: decode.email,
        password: password,
      } as DataUser);
      // debbug dataUser
      await debbugMiddlewere.ifError(!dataUser, {
        messenge: "Ocurrio un error al crear el usuario, intenta de nuevo",
      });
      // save user
      const user = await User.create({
        firstName: decode.firstName,
        lastName: decode.lastName,
        username: decode.firstName + decode.lastName,
        dataUserId: dataUser.id,
      } as User);
      // debbug user
      await debbugMiddlewere.ifError(!user, {
        messenge: "Ocurrio un error al crear el usuario, intenta de nuevo",
      });

      ////  Token
      const token = Jwt.sign(
        {
          userId: user.id,
          username: user.username,
          email: dataUser.email,
          dataUserId: user.dataUserId,
        },
        JWT_SECRET,
        {
          expiresIn: "15d",
        }
      );
      // debbug token
      await debbugMiddlewere.ifError(!token, {
        messenge: "Ocurrio un error al crear el token",
      });

      //// response
      return res.status(200).json([
        {
          status: 200,
          messenge: "Usuario creado correctamente",
          dataUser: [
            {
              id: user.id,
              fistname: user.firstName,
              lastname: user.lastName,
              username: user.username,
              datauser: {
                id: dataUser.id,
                email: dataUser.email,
                password: dataUser.password,
              },
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            },
          ],
          token: token,
        },
      ]);
    } catch (error: Error | any) {
      return res.status(400).json([{ status: 400, message: error.message }]);
    }
  }
  private async getlogin(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      // request
      const body: ILogin = req.body as ILogin;
      const createUserDto = plainToClass(UserDto, body);
      const errors = await validate(createUserDto);
      // debbug Errors
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      // consult user
      const dataUser = await DataUser.findOne({
        where: {
          email: body.email,
        },
      });
      // debbug dataUser
      await debbugMiddlewere.ifError(!dataUser, "El usuario no existe");

      // compare password
      await bcrypt
        .compare(body.password, dataUser?.password ?? "")
        .then((result) => {
          return debbugMiddlewere.ifError(!result, "Contraseña incorrecta");
        });

      // generate token
      const token = Jwt.sign(body, JWT_SECRET, {
        expiresIn: "20d",
      });
      // send email
      /* await checkEmail(body.email, token).catch((err) => {
        return res.status(400).json(err);
      }); */
      // response
      return res.status(200).json([{ status: 200, message: "Usuario loggiado correctamente", token }]);
    } catch (error: Error | any) {
      return res.status(400).json([{ status: 400, message: error.message }]);
    }
  }
  private async getupdate(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      //  request
      const body: IUpdateUser | any = req.body as IUpdateUser;
      const Autentication : IUpdateUser | any = req.headers.authorization;
      const createUserDto = plainToClass(UserUpdateDto, body);
      const createUserDto2 = plainToClass(UserUpdateDto, Autentication);
      const errors = await validate(createUserDto);
      // validate
      if (errors.length > 0) {
        return res.status(400).json([req.body, errors]);
      }
      // token
      const decode: any = Jwt.decode(Autentication);
      await debbugMiddlewere.ifError(!decode, "El Token es invalido");
      // find user
      const userFind = await User.findOne({
        where: {
          id: decode.id,
        },
      });
      await debbugMiddlewere.ifError(!userFind, "El usuario no existe");

      // update
      const userUpdt = await User.update({ lastName: body.lastName, firstName: body.firstName, username: body.username }, body);
      // response
      return res.status(200).json("user");
    } catch (error : Error | any) {
      return res.status(400).json([{ status: 400, message: error.message }]);
    }
  }
  private async getUpdateEmail(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      // request
      const body = req.body;
      const createUserDto = plainToClass(checkpassDto, body);
      const errors = await validate(createUserDto);
      // validate
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      if (!body.email) {
        // tokend
        const token = Jwt.sign(body.email, JWT_SECRET, {
          expiresIn: "15m",
        });
        // send email
        await checkEmail(body.email, token).catch((err) => {
          return res.status(400).json(err);
        });
        return res
          .status(200)
          .json(
            "Enviamos un correo electronico necestamos que nos verfiques tu nuevo correo"
          );
      }
      // token
      const decode = Jwt.decode(body.token);
      if (!decode) return res.status(400).json("Error");

      // update email
      await DataUser.update({ email: "" }, body);

      // response
      return res.status(200).json("h");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getUpdateEmailCheck(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      // request
      const params = req.body;
      const createUserDto = plainToClass(checkpassDto, params);
      const errors = await validate(createUserDto);
      // validate
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      // token
      const decode = Jwt.decode(params.token);
      if (!decode) return res.status(400).json("Error");



      // update email
      await DataUser.update({ email: "" }, params);

      // response
      return res.status(200).json("h");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getUpdatePassword( req: Request, res: Response): Promise<Response<IUser>> {
    try {
      // request
      const params = req.body;
      const createUserDto = plainToClass(checkpassDto, params);
      const errors = await validate(createUserDto);
      // validate
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      // token
      const decode = Jwt.decode(params.token);
      if (!decode) return res.status(400).json("Error");

      // update password
      await DataUser.update({ password: "" }, params);

      // response
      return res.status(200).json("h");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getdeletecheck(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      //  request
      const params: IdelateCheckUser | any =
        req.params as unknown as IdelateCheckUser;
      const createUserDto = plainToClass(checkpassDto, params);
      const errors = await validate(createUserDto);
      // validate
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      // token
      const decode = Jwt.decode(params.token);
      if (!decode) return res.status(400).json("Error");
      // delete user
      await User.destroy();
      // validate decode
      if (!decode) return res.status(400).json(decode);

      return res.status(200).json("test");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getdelete(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      //  request
      const body: IdelateUser | any = req.body as IdelateUser;
      const createUserDto = plainToClass(deleteDto, body);
      const errors = await validate(createUserDto);
      // validate
      if (errors.length > 0) {
        return res.status(400).json([req.body, errors]);
      }
      // find
      const user = await User.findAll({
        where: {
          id: body.id,
        },
      });
      if (!user) return res.status(200).json("usuario no identificado");

      // token
      const token = Jwt.sign(body.id, JWT_SECRET, {
        expiresIn: "30m",
      });

      // send email
      await checkEmail(body.email, token).catch((err) => {
        return res.status(400).json(err);
      });

      // response
      return res.status(200).json(["Send Mail", token]);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getAuthGoogle(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      // request
      const body: IUser | any = req.body as IUser;
      passport.authenticate("google", { scope: ["profile", "email"] });

      return res.status(200).json(body);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getAuthGoogleCallback(
    req: Request,
    res: Response
  ): Promise<Response<IUser>> {
    try {
      // passport
      passport.authenticate("google", { failureRedirect: "/login" });

      // google validation
      (req: Request, res: Response) => {
        // Usuario autenticado correctamente, generar y enviar JWT
        const token = Jwt.sign(req.user as object, JWT_SECRET, {
          expiresIn: "1h",
        });
        res.send(`Token: ${token}`);
      };

      // response
      return res.status(200).json("test");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
