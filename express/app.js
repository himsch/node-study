import express from "express";
import fs from "node:fs";
import fsAsync from "node:fs/promises";

const app = express();

app.use(express.json());

app
  .route("/posts")
  .get((req, res, next) => {
    res.status(201).send("GET: /posts");
  })
  .post(() => {
    res.status(201).send("POST: /posts");
  });

app
  .route("/posts/:id")
  .put((req, res) => {
    res.status(201).send("PUT: /posts/:id");
  })
  .delete((req, res) => {
    res.status(201).send("DELETE: /posts/:id");
  });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "something went wrong" });
});
app.listen(8080);
