var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', {
		title: 'the title'
		});
});

router.get('/test', function(req, res) {
	res.send('some stuff');
});


//Exports
module.exports = router;