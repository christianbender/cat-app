var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})
app.get('/src/module.js', function (req, res) {
    res.sendFile(__dirname + "/" + "src/module.js");
})
app.get('/src/style.css', function (req,res) {
    res.sendFile(__dirname + "/" + "src/style.css");
});
app.get('/ajax/data.json', function (req,res) {
    res.sendFile(__dirname + "/" + "ajax/data.json");
});

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:%s/index.html", port);

})