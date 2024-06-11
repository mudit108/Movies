const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/assets')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

const PORT =  3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
