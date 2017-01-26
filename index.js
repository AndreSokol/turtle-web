var express = require('express'),
	app = express(),
    http = require('http').Server(app),
    path = require('path');


app.set('port', process.env.PORT);

//ejs settings
//app.engine('html', ejs);
//app.engine('ejs', ejs);
app.set('views', 'views');
app.set('view engine', 'ejs');

//Initialization directory with static files
app.use('/st', express.static(path.join(__dirname, '../public')));

http.listen(app.get('port'), function() {
	console.log("Server has started at port " + app.get('port'));

    app.get("*", function (req, res) {
        res.send("HELLO WORLD!");
    });
});
