var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/users/login', { title: 'Skráðu þig í röðina' });
});


/* GET home page. */
router.get('/waiting', function(req, res, next) {
  res.render('pages/users/waiting', { title: 'Skráðu þig í röðina' });
});


/* GET home page. */
router.get('/not-open', function(req, res, next) {
  res.render('pages/users/not-open', { title: 'Skráðu þig í röðina' });
});



router.get('/display', function(req, res, next) {
  res.render('pages/backend/display', { title: 'Skráðu þig í röðina' });
});


router.get('/register', function(req, res, next) {
  res.render('pages/backend/register', { title: 'Skráðu þig í röðina' });
});

module.exports = router;
