const Course = require('./models/Course');
const { mongoosetoOject } = require('../../until/mongoose');

class CourseController {

  //[GET] /courses/:slug
  show(req, res, next) {
    
    Course.findOne({slug: req.params.slug})
      .then(course => 
        //res.json({course})
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

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit',{
        course: mongoosetoOject(course)
      }))
      .catch(next)
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next)
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new CourseController();
