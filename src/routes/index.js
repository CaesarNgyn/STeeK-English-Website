const newRouter = require('./news')

function route(app) {
    app.use('/news',newRouter)
    
    
    app.get('/', (req, res) => {
        res.render('home');
    })
    // app.get('/news', (req, res) => {
    //     res.render('new')
    // })

    app.get('/search', (req, res) => {

        res.render('search')
    })
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.render('search')
    })

}

module.exports = route