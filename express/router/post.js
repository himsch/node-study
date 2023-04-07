import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("GET");
});
router.post("/:id", (req, res) => {
  res.status(201).send("POST");
});
router.put("/:id", (req, res) => {
  res.status(201).send("PUT");
});
router.delete("/:id", (req, res) => {
  res.status(201).send("DELETE");
});

export default router;
