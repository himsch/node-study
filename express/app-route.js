import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";

const app = express();

app.use(express.json()); // REST API, Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
const options = {};
app.use(express.static("public", options));

app.use("/posts", postRouter);
app.use("/users", userRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "something went wrong" });
});
app.listen(8080);
