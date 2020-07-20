import express from 'express';
<<<<<<< HEAD
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('build'))
const PORT = 3001;

app.get('/api/ping', (_req, res) => {
=======
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
>>>>>>> 3922b2d... part 9.8
  console.log('someone pinged here');
  res.send('Hello kissa');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});