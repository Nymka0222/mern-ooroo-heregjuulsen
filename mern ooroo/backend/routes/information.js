const router = require("express").Router();
const Information = require("../models/Exercise.model");
let Information = require("../models/Exercise.model");

router.route("/").get((req, res) => {
  //medee uzex heseeg
  Information.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/medeeOruulah").post((req, res) => {
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.parse(req.body.date);

  const newExercise = new Information({
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("medeelel amjilttai orloo!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;