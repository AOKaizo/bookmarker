const express = require('express');
const app = express();

app.use("/", require('./router'))

app.get('/', (req, res) => {
    res.redirect('/bookmarks')
})