const Course = require('../models/Course');
const {mutipleMongooesToObject} = require('../../util/sovlehbs');

class Mecontroller {
    //[GET] /me/stored/courses
    storedCourses(req, res,next) {
        // res.render('me/stored-courses')
        Course.find({})
            .then(Course => {
                res.render('me/stored-courses', { Course: mutipleMongooesToObject(Course) });

            })
            .catch(next)

    }
}

module.exports = new Mecontroller();