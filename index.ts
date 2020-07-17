import express from 'express';
import bmiCalculator from './bmiCalculator';
import { ExerciseRequest } from './data/ExerciseRequest';
const app = express();
import bodyParser from 'body-parser';
import { exerciseCalculate } from './exerciseCalculator';
app.use(bodyParser.json())


app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
    const weight = Number(_req.query.weight);
    const height = Number(_req.query.height);
    if (isNaN(weight) || isNaN(height)) {
        res.status(400).send({ error: `malformatted parameters` });
    }
    const message: string = bmiCalculator(weight, height);
    res.send({ weight: weight, height: height, bmi: message });
});

app.post('/exercises', (_req, res) => {
    if (_req.body.target === undefined || _req.body.daily_exercises === undefined) {
        res.status(400).send({ error: `parameter missing` });
    }
    console.log(_req.body)
    const exercise: ExerciseRequest = _req.body
    if (!Number(exercise.daily_exercises) || isNaN(exercise.target)) {
        res.status(400).send({ error: `malformatted parameters` });
    }
    const responseBody = exerciseCalculate(exercise.daily_exercises, exercise.target)
    res.send(responseBody)
})
const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});