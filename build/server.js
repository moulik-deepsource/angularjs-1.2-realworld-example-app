var express     = require('express');
var PORT        = 4567;
var application = express();

application.use(express.static('../src'));
application.use('/scripts', express.static(__dirname + '/../node_modules'));
application.listen(PORT, function() {
    console.log("Server started on port : " + PORT)
});
