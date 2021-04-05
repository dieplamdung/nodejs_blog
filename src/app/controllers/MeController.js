const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] / me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletecount]) =>
                res.render('../../resources/me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                    deletecount,
                }),
            )
            .catch(next);
    }
    //     Course.countDocumentsDeleted()
    //     .then((deletecount) => {
    //       console.log(deletecount)
    //     })
    //     .catch(()=>{})

    //     Course.find({})
    //     .then(courses => res.render('../../resources/me/stored-courses',{
    //       courses:mutipleMongooseToObject(courses)
    //     }))
    //     .catch(next);
    //   }

    // [GET] / me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('../../resources/me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
