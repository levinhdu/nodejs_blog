const Course = require('../controllers/models/Course');
const { mutipleMongooseToOject } = require('../../until/mongoose');

class SiteController {
  //[GET] /
  index(req, res, next) {
    // Course.find({}, function(err, courses){
    //   if(!err) {
    //     res.json(courses);
    //   } else{
    //     next(err);
    //   }
    // });
      Course.find({})
          .then(courses => {
              res.render('home',{ 
                courses : mutipleMongooseToOject(courses)
              });
          })
          .catch(next);  
    
    //res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
