const express = require('express')
const passport = require('passport')
const router = express.Router();

// router.get('/login', (req, res)=>{
//     // if (res.locals.user) res.redirect('/');
//     var loggedIn = (req.isAuthenticated()) ? true : false;

//     res.render('login', {
//         title: 'Log in',
//         loggedIn:loggedIn
//     });
// })

/*
 * POST login
 */
router.get('/login', passport.authenticate('facebook', {
        scope: 'email'
    }));

router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
}))

router.get('/failed', (req, res)=>{
    res.send('failed')
})

router.get('/success', (req, res)=>{
    console.log(req.user)
    res.send('success')
})

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;