import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('MyDiarium, where memory lives!'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The app is running on port ${port}!`));

export default app;
