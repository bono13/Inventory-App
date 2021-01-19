const path = require('path');

const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 4000;
app.use(helmet());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/', (req, res) => {
	res.json('testing..');
});

app.listen(port, () => {
	console.log(`Server up on port ${port}`);
});
