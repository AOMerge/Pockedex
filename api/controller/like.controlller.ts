// like controller
// lbrary
import { Request, Response } from "express";
// models
import { Likes } from "../models/likes.model";
import { SavesLikes } from "../models/saveLike.model";
import { Saves } from "../models/save.model";
// interface
import { ILike } from "../src/interfaces/useImodels";

export class LikeController {
  // models Public
  public async save(req: Request, res: Response): Promise<Response<ILike>> {
    try {
      return this.getSave(req, res);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  public async delate(req: Request, res: Response): Promise<Response<ILike>> {
    try {
      return this.getDelate(req, res);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  // models Private
  private async getSave(req: Request, res: Response): Promise<Response<ILike>> {
    try {
      // require
      const body = req.body;
      // save
      const like = await Likes.create()
      const savelike = await SavesLikes.create()
      const save = await Saves.create()
      // response
      return res.status(200).json("h")
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  private async getDelate(
    req: Request,
    res: Response
  ): Promise<Response<ILike>> {
    try {
      // requiere
      const body = req.body;
      // delete
      const save = await Saves.destroy();
      const savelike = await SavesLikes.destroy();
      const like = await Likes.destroy();
      // response
      return res.status(200).json("test");
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
