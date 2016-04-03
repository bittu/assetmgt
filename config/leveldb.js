var level = require('level');

module.exports = {
    db: level(__dirname + '/db')
}