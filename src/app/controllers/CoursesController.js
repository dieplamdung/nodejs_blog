const Course = require("../models/Course");

const { MongooseToObject, mutipleMongooseToObject } = require("../../util/mongoose");

class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("../../resources/views/courses/show", {
          course: MongooseToObject(course),
        });
      })
      .catch(next);
  }
  // [GET] /courses/create
  create(req, res, next) {
    res.render("../../resources/views/courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    //   res.json(req.body)
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((err) => {});
  }

  // [GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("../../resources/views/courses/edit", {
          course : MongooseToObject(course)
        })
      )
      .catch(next);
  }


  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({_id:req.params.id},req.body)
    .then(()=> res.redirect("/me/stored/courses"))
    .catch(next)
  }
}

module.exports = new CourseController();
