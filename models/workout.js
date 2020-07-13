const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, require: true, default: Date.now() },
    exercises: [
        {
            type: { type: String, required: true },
            name: { type: String, required: true },
            totalDuration: { type: Number, required: true },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        },
    ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;