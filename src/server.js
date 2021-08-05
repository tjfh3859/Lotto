import express from "express";
import globalRouter from "./routers/globalRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

app.use("/", globalRouter);

export default app;
