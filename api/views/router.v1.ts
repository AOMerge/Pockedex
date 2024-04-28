// - Date: 19/12/2023
// UserController.ts
import { Router } from "express";
import { UserController } from "../controller/user.Controller";
import { LikeController } from "../controller/like.controlller";
import { SaveController } from "../controller/save.controller";
const router = Router();
// create controller
const user = new UserController();
const like = new LikeController();
const save = new SaveController();

// user routes
// get
router.get("/", (req, res) => user.geTest(req, res));
router.get("/register/auth/", (req, res) => user.saveCheck(req, res));
router.get("/google/login",(req, res)=> user.authGoogle(req, res));
router.get("/google/callback",(req, res)=> user.authGoogle(req, res));
router.get("/update/emial/check", (req, res)=>user.update(req, res));
// post 
router.post("/register", (req, res) => user.save(req, res));
router.post("/login", (req, res) => user.login(req, res));
// put
router.put("/user/update",(req, res)=> user.update(req, res));
// patch
router.patch("/user/update/email",(req, res)=> user.updateEmail(req, res));
router.patch("/user/update/email/auth",(req, res)=> user.updateEmailCheck(req, res));
router.patch("/user/update/password",(req, res)=> user.updatePassword(req, res));
// delete
router.delete("/user/delete",(req, res)=> user.delete(req, res));
router.delete("/user/delete/auth",(req, res)=> user.deleteCheck(req, res));

// save router
// get
router.get("/saves",(req, res)=> save.all(req, res));
router.get("/save",(req, res)=> save.allId(req, res));
// get
router.post("/save/update",(req, res)=> save.update(req, res));
router.post("/save/create", (req, res)=>save.save(req, res));
// delete
router.delete("/save/delete", (req, res)=>save.delate(req, res));

// like router
router.get("/like",(req, res)=> like.save(req, res));
router.get("/dislike",(req, res)=> like.delate(req, res));

export default router;
