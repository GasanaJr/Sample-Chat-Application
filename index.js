const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {cors: {origin: "*"}});
const routes = require('./routes')
const models = require('./database/models');
const { chat } = require('./controllers/chat')
const socketAuth = require('./middlewares/socketAuth')


app.use(express.json())
app.set('view engine', 'ejs');
app.get('/home', (req,res) => {
    res.render('home'); 
});
app.get('/user', (req,res) => {
    res.render('user'); 
});

app.use('/api', routes);

server.listen(3000, () => {
    console.log("Server running at 3000");
});

io.use(socketAuth).on("connection", chat);



