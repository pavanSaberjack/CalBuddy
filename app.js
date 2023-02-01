const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// routes
const createEventRouter = require('./routes/create-event');
const eventsListRouter = require('./routes/events-list');
const userRouter = require('./routes/user-detail');

const rootDir = require('./util/path');

//controllers
const errorController = require('./controllers/error');

const app = express();

// Setting EJS as template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// parsing the form data
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
app.use(methodOverride('_method'));

app.delete('/delete/:id', (request, response) => {
    // Handle the delete action and remove the object with the specified ID
    console.log(request.url);
    console.log("hereeeee");
});

app.use(createEventRouter);
app.use(eventsListRouter);
app.use(userRouter);

app.use(errorController.get404);

app.listen(3000);