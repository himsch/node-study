import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.post("/users", [
  body("name").isLength({ min: 2, max: 10 }).withMessage("이름은 두글자 이상!"),
  body("age").notEmpty().isInt().withMessage("숫자를 입력해야해"),
  body("email").isEmail().withMessage("이메일 포맷"),
  body("job.name").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    console.log(req.body);
    res.sendStatus(201);
  },
]);

app.get(
  "/:email",
  param("email").isEmail().withMessage("이메일 포맷"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.send("💌");
  }
);

app.listen(8080);
