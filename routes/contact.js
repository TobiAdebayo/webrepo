var express = require('express');
var router = express.Router();

/* GET home page. */
router.use((req, res, next) => {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
