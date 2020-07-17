import express from 'express';
import bmiCalculator from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
    const weight: number = Number(_req.query.weight)
    const height: number = Number(_req.query.height)
    if (isNaN(weight) || isNaN(height)){
        res.status(400).send({ error: `malformatted parameters` })
    }
    const message: String = bmiCalculator(weight, height)
    res.send({ weight: weight, height: height, bmi: message })
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});