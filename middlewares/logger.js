const moment = require('moment');
const logger = (req, res, next) => {
  console.log(`${moment()} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};

module.exports = logger;

// Put below 2 lines in index.json to use this logger:

// const logger = require('./middlewares/logger');
// app.use(logger);