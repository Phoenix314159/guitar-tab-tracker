'use strict'
module.exports = {
    auth: (req, res, next) => {
        if (!req.isAuthenticated()) return res.status(401).send('not authenticated');
        return next();
    }
}
