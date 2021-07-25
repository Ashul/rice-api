const user = require('./user_routes');
const contact_us = require('./somya-contact');
const enquiry_long = require('./enquiry-long');
const ricelandenq = require('./rice-lan-enq');
module.exports = function(app){
    app.use('/api/user', user)
    app.use('/api/somya/contact_us/', contact_us)
    app.use('/api/somya/lenquiry/', enquiry_long)
    app.use('/api/riceLanding/lquiry/', ricelandenq)
}
