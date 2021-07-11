const user = require('./user_routes');
const contact_us = require('./somya-contact');

module.exports = function(app){
    app.use('/api/user', user)
    app.use('/api/contact_us/', contact_us)
}
