const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// routes
const createInviteRouter = require('./routes/create-invite');
const invitesListRouter = require('./routes/invites-list');
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

app.use(createInviteRouter);
app.use(invitesListRouter);
app.use(userRouter);

app.use(errorController.get404);

app.listen(3000);