const path = require('path');

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

require('./db/server');
const categoriesRoutes = require('./routes/categories');
const itemsRoutes = require('./routes/items');
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
	res.render('home', {
		// pageMessage: 'Home Page',
		pageTitle: 'Home',
		path: '/home',
	});
});

app.use(categoriesRoutes);
app.use(itemsRoutes);

app.listen(port, () => {
	console.log(`Server up on port ${port}`);
});
