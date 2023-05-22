const newRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./courses')
const meRouter = require('./me')

function route(app) {
    

    app.use('/news', newRouter)
    // app.get('/news', (req, res) => {
    //     res.render('new')
    // })
    app.use('/me', meRouter)

    app.use('/courses',courseRouter)


    // app.use('/home', siteRouter)
    app.use('/', siteRouter)
    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })

    app.get('/signin', (req, res) => res.render('signin'))
    // app.get('/signup',(req,res) => res.render('signup'))
    

    
    // app.post('/search', (req, res) => {
    //     console.log(req.body)
    //     res.render('search')
    // })

}

module.exports = route