const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middlewares/logger');

const app = express();

// connection to db
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(db => console.log('db connected...'))
  .catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);
app.use(logger);
app.use(express.json()); //Used to parse JSON bodies

// routes
const taskRoutes = require('./src/routes/tasks');
app.use('/tasks', taskRoutes);

app.listen(app.get('port'), () => {
  console.log(`server started on port ${app.get('port')}...`);
});