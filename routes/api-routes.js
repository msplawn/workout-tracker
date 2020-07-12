const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/workouts", (req, res) => {
    db.Workout.find({})
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
      });
})

router.post("/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.put("/workouts:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,
        {
          $push: { exercises: req.body },
        },
        { useFindAndModify: false }
      )
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({}).sort({ day: -1 }).limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    }).catch((err) => {
        res.json(err);
    })
})

module.exports = router;