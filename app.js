const path = require('path');

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

require('./db/server');
const itemRouter = require('./routers/item');
const categoryRouter = require('./routers/category');
const branchRouter = require('./routers/branch');
const errorController = require('./controllers/error');
const app = express();

const port = process.env.PORT || 4000;
app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//GET HOMEPAGE
app.get('/', (req, res) => {
	res.redirect('/home');
});

app.get('/home', (req, res) => {
	res.render('index', {
		pageTitle: 'Home',
	});
});
//ROUTES
app.use(itemRouter);
app.use(categoryRouter);
app.use(branchRouter);

app.use(errorController.get404);

app.listen(port, () => {
	console.log(`Server up on port ${port}`);
});
