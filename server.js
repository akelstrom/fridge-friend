const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//const helpers = require('./utils/helpers');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Shh its a secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//might need to refactor this
app.use(routes);


/* app.use(require('./controllers/')); */

// Turn on connection to the db and server
// STOPPED HERE
// Not synching the Category/Inventory Models for some reason
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening!'));
});