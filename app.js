const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const eventsData = require('./routes/add-event');
const eventListRouter = require('./routes/event-list');
const rootDir = require('./util/path');

const app = express();

// Setting EJS as template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// parsing the form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use(eventsData.router);
app.use(eventListRouter);

app.listen(3000);