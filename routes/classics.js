var express = require('express');
var router = express.Router();

/* GET classic workouts */
router.get('/', function(req, res, next) {
	res.render('page', { title: 'Classic Workouts' });
});

module.exports = router;
