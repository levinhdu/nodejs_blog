const Course = require('./models/Course');
const { mongoosetoOject } = require('../../until/mongoose');

class CourseController {

  //[GET] /courses/:slug
  show(req, res, next) {
    
    Course.findOne({slug: req.params.slug})
      .then(course => 
        res.render('courses/show',{ course: mongoosetoOject(course) })
      )
      .catch(next)
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create')
   
  }

  //[POST] /courses/create
  store(req, res, next) {
    const fromData = req.body;
    fromData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(fromData);
    course.save()
      .then(() => res.redirect('/'))
      .catch(error => {

      })
  }
}

module.exports = new CourseController();
