module.exports = {
    ensureUnAuthenticated : function(req,res,next) {
        if(!req.isAuthenticated()) {
            return next();
            }
        req.flash('error_msg' , 'ALready logged in');
        res.redirect('/dashboard')
        }

    }