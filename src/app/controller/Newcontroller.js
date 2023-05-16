class Newcontroller{

    //[GET] /news
    index(req ,res) {
        res.render('new')

    }

    //[GET] /news/CNTT
    showCNTT(req ,res){
        res.send('CNTT')
    }
}

module.exports = new Newcontroller