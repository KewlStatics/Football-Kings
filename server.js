'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + 'Index.html'));

http.listen(process.env.PORT || 3000, () => {
        console.log("This app is now running");
}
