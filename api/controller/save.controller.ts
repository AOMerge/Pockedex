// save controller
// library
import { Response, Request } from "express";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// models
import { DataUser } from "../models/dataUser.model";
import { Saves } from "../models/save.model";
// interface
import { ISave } from "../src/interfaces/useImodels";
// middelwere
import {
  SaveDto,
  delateSaveDto,
} from "../src/middlewere/validation/save.middlewere";
const JWT_SECRET = process.env.JWT_SECRET || "";

export class SaveController {
  // models Public
  public async save(req: Request, res: Response): Promise<Response<ISave>> {
    try {
      return this.getSaves(req, res);
    } catch (error) {
      return res.status(400).json(error) as Response<any, Record<string, any>>;
    }
  }
  public async delate(req: Request, res: Response): Promise<Response<ISave>> {
    try {
      return this.getDelates(req, res);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public async update(req: Request, res: Response): Promise<Response<ISave>> {
    try {
      return this.getUpdates(req, res);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public async all(req: Request, res: Response): Promise<Response<ISave>> {
    try {
      return this.getAll(req, res);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public async allId(req: Request, res: Response): Promise<Response<ISave>> {
    try {
      return this.getAllId(req, res);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  // models Private
  private async getSaves(
    req: Request,
    res: Response
  ): Promise<Response<ISave>> {
    try {
      //  request
      const body: ISave | any = req.body as ISave;
      const params = req.params;
      const createSaveDto = plainToClass(SaveDto, body);
      const errors = await validate(createSaveDto);
      // validation Errors
      if (errors.length > 0) {
        return res.status(400).json(errors);
      }
      // decode token
      const decode = Jwt.verify(params.token, JWT_SECRET);
      // validate decode
      if (!decode) return res.status(400).json("error");
      // save
      const save = await Saves.create(body);
      // response
      return res.status(200).json(save);
    } catch (error) {
      // response
      return res.status(400).json(error);
    }
  }

  private async getDelates(
    req: Request,
    res: Response
  ): Promise<Response<ISave>> {
    try {
      // request
      const body: ISave | any = req.body;
      const createUserDto = plainToClass(delateSaveDto, body);
      const errors = await validate(createUserDto);
      // validation Errors
      if (errors.length > 0) {
        //console.log(errors);
        throw new Error("Error de validacion");
      }
      // delate
      const dataUser = await Saves.destroy({ where: { id: body.id } });
      // response
      return await res.status(200).json(dataUser);
    } catch (error) {
      // response
      return res.status(400).json(error);
    }
  }

  private async getUpdates(
    req: Request,
    res: Response
  ): Promise<Response<ISave>> {
    try {
      // request
      const body: ISave | any = req.body;
      // update
      const dataUser = await Saves.update(body, {
        where: { description: body.description, title: body.title },
      });
      // response
      return res.status(200).json(dataUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getAll(req: Request, res: Response): Promise<Response<ISave>> {
    try {
      const dataUser = await Saves.findAll();
      return res.status(200).json(dataUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getAllId(
    req: Request,
    res: Response
  ): Promise<Response<ISave>> {
    try {
      const dataUser = await Saves.findAll({ where: { id: req.params.id } });
      return res.status(200).json(dataUser);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
