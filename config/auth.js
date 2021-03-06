exports.isUser = function(req, res, next) {
    // next();
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('danger', 'Please log in.');
        res.redirect('/login');
    }
}

exports.isAdmin = function(req, res, next) {
    // next();
    if (req.isAuthenticated() && req.user.admin == 1) {
        next();
    } else {
        req.flash('danger', 'Please log in as admin.');
        res.redirect('/users/login');
    }
}
