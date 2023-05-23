const Course = require('../models/Course');
const {mutipleMongooesToObject} = require('../../util/sovlehbs')
// const a = require('../../util/sovlehbs')
const User = require('../models/User')
const {mongooesToObject} = require('../../util/sovlehbs')



// [GET] /
class Sitecontroller {
    // [GET] /(home)
    index(req, res , next) {
        Course.find({})
            .then(Course=>{
                // Course = Course.map(e => e.toObject())
                res.render('home',{Course : mutipleMongooesToObject(Course)});

            } )
            // .then(courses => res.json(courses))
            .catch(next);

        // res.render('home');
    }
    //[GET] /search
    showSearch(req,res){
        res.render('search');
    }
    //[GET] /signin
    showSignIn(req,res){
        res.render('signin');
    }
    
    //[POST] /create-user
    create_User(req,res,next){
        // const User = new User(req.body);
        // User.save()
        //     .then(()=>res.redirect('/'))
        //     .catch((err)=> res.send('error'))
        res.send('Success')

    }
    


    //[GET] /signup
    showSignUp(req,res,next){
        res.render('signup')
    }

    
}

module.exports = new Sitecontroller();