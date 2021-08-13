// const passport = require('passport')
var facebookStratergy = require('passport-facebook').Strategy;
var User = require('../models/user');
// var bcrypt = require('bcryptjs');

module.exports = function (passport) {

    passport.use(new facebookStratergy({
        clientID : "1015106162608143",
        clientSecret: "b9e72f0fd4cb9c52340acc9067270b72",
        callbackURL: "http://localhost:3000/facebook/callback",
        profileFields: ['id', 'displayName', 'name', 'email']
    }, (token, refreshToken, profile, done)=>{
        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            User.findOne({ 'uid' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    console.log("user found")
                    // console.log(user)
                    // process.locals.user = user;
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser = new User();

                    // set all of the facebook information in our user model
                    newUser.uid  = profile.id; // set the users facebook id                   
                    newUser.token = token; // we will save the token that facebook provides to the user                    
                    newUser.username  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    newUser.name  = profile.name.givenName
                    newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                    // newUser.gender = profile.gender
                    // newUser.pic = profile.photos[0].value

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // process.locals.user = newUser;
                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });

        })
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

}


