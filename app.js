const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const friends = [{ fname: "Enid", lname: "Blyton" }, { fname: "Charles", lname: "Dickens" }, { fname: "Aloe", lname: "Black" }]
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.get('/', (req, res) => {
    const name = req.cookies.username

    if (name) {

    } else {
        res.redirect('/hello');
    }
    res.render('index', { name });




});
app.get('/cards', (req, res) => {
    res.render("card", {
        prompt: "Who is buried in Grant's tomb?",
        hint: "Think about who's tomb!"

    });
});
app.get('/hello', (req, res) => {

    res.render("hello");


});
app.post('/hello', (req, res) => {
    console.log(req);
    res.cookie('username', req.body.username);
    res.redirect('/');

});
//Sandboxfrom the other sidefrom the other side
app.get('/friends', (req, res) => {
    res.render("friends", { "friends": friends });
});
app.listen(3013, () => {
    console.log("The application is running on localhost:3013");
});