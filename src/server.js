import express from "express";
import globalRouter from "./routers/globalRouter";

const app = express();

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", "src/views");

app.use("/", globalRouter);

const handleListening = () => {
  console.log(`Server listening on port ${PORT}`);
};

app.listen(PORT, handleListening);
