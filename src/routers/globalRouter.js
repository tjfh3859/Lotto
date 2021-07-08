import express from "express";
import {
  home,
  pension,
  getLotto,
  postLotto,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/lotto").get(getLotto).post(postLotto);
globalRouter.get("/pension", pension);

export default globalRouter;
