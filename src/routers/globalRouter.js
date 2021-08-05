import express from "express";
import {
  home,
  getLotto,
  postLotto,
  getPension,
  postPension,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.route("/lotto").get(getLotto).post(postLotto);
globalRouter.route("/pension").get(getPension).post(postPension);

export default globalRouter;
