const express = require("express");
const infoSchema = require("../schema/info");

const router = express.Router();

router.post("/one", (req, res) => {
  const info = infoSchema(req.body);
  info
    .save()
    .then((data) => res.send("info created"))
    .catch((err) => res.send(err));
});

router.get("/all", (req, res) => {
  infoSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err));
});

router.put("/:id", (req, res) => {
  infoSchema
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.send("info updated"))
    .catch((err) => res.send(err));
});

router.delete("/:id", (req, res) => {
    infoSchema
      .findByIdAndDelete(req.params.id)
      .then((data) => res.send("info deleted"))
      .catch((err) => res.send(err));
  });

module.exports = router;
