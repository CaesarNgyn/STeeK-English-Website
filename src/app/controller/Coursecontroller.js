const Course = require('../models/Course');
const {mongooesToObject} = require('../../util/sovlehbs')



class Coursecontroller {
    
    //[GET] /Course/:slug
    showCourse(req,res,next){
        // res.send('Course Detail !!!' + req.params.slug);
        

        Course.findOne({slug: req.params.slug})
            .then(course =>{
                res.render('courses/show',{course: mongooesToObject(course)})
            })
            .catch(next);
    }

    //[PUT] /courses/:id
    updateCourse(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored-courses'))
            .catch(next);
        // res.json(req.body);
    }
    //[DELETE] /courses/:id
    destroyCourse(req,res,next){
        
        Course.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }

    //[GET] /courses/:id/edit
    editCourse(req,res,next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooesToObject(course)
            }))
            .catch(next)
        
    }

    //[GET] /courses/create
    createCourse(req,res){
        res.render('courses/create')
    }

    //[POST] /course/store
    storeCourse(req,res,next){
        // res.json(req.body);
        // Course.create(res.json(req.body))
        //     .catch(error =>{})
        const formData = req.body;
        // formData.image = `https://img.youtube.com/vi/${req.body.vidID}/sddefault.jpg`;
        formData.image = 'https://media.zim.vn/62d13e991b5d34001f08d06e/toeic-la-gi.jpg'
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    
    
        // res.send( req.body)
    
    }

        
    
}

module.exports = new Coursecontroller();