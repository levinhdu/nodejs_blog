const Course = require('./models/Course');
const { mutipleMongooseToOject } = require('../../until/mongoose');

class MeController {
  //[GET] /
  storedCourses(req, res, next) {
      Course.find({})
          .then(courses => {
              res.render('me/stored-Courses',{ 
                courses : mutipleMongooseToOject(courses)
              });
          })
          .catch(next);  
    
  }
}

module.exports = new MeController();
