var levelup = require('level')

module.exports = {
    db: levelup(__dirname + '/db')
}