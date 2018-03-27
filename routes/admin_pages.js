var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', {
		title: 'admin title'
		});
});

router.get('/test', function(req, res) {
	res.send('admin stuff');
});


//Exports
module.exports = router;