const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getPresent111 = (req, res) => {
    //res.send('<h1>Present111</h1>')
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getABC,
    getPresent111
}