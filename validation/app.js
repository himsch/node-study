import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0] });
};

app.post("/users", [
  body("name")
    .trim()
    .isLength({ min: 2, max: 10 })
    .withMessage("이름은 두글자 이상!"),
  body("age").notEmpty().isInt().withMessage("숫자를 입력해야해"),
  body("email").isEmail().withMessage("이메일 포맷").normalizeEmail(),
  body("job.name").notEmpty(),
  validate,
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  },
]);

app.get(
  "/:email",
  param("email").isEmail().withMessage("이메일 포맷"),
  validate,
  (req, res, next) => {
    res.send("💌");
  }
);

app.listen(8080);
