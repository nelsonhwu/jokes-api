const { response } = require('express');
const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000, () => console.log("Run yo shit on 8000"));