const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./queries');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
  })
);

/*app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});*/

app.get('/eateries', db.getEateries);
app.get('/eateries/:id', db.getEateryById);
app.get('/search', db.searchReviews); 
app.post('/eateries', db.createEatery);
app.put('/eateries/:id', db.updateEatery);
app.delete('/eateries/:id', db.deleteEatery);

app.get('/reviews', db.getReviews);
app.get('/reviews/:id', db.getReviewById);
app.post('/reviews', db.createReview);
app.put('/reviews/:id', db.updateReview);
app.delete('/reviews/:id', db.deleteReview);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
