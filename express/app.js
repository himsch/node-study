import express from "express";
const app = express();

app.get("/sky/:id", (req, res, next) => {
  // console.log(req.path);
  // console.log(req.headers);
  console.log(req.params);
  console.log(req.query);

  // res.json({ name: "song" });
  // res.sendStatus(400);
  res.setHeader("key", "value").status(201).send("created");
});

app.listen(8080);
