var express = require('express');
const { isAdmin } = require('../config/auth');
var router = express.Router();

// Get page model
var Page = require('../models/pages')

// get pages index
router.get('/', isAdmin, function(req, res){
    // res.send('admin area');
    Page.find({}).sort({sorting: 1}).exec(function (err, pages){
        res.render('admin/pages',{
            pages: pages
        });
    });
});

// // get add page
// router.get('/add-page', function(req, res){
//     var title = "";
//     var slug = "";
//     var content = "";

//     res.render('admin/add_page',{
//         title: title,
//         slug: slug,
//         content: content
//     });
// });

// // post add page
// router.post('/add-page', function(req, res){
    
//     req.checkBody('title', 'Title must have a value.').notEmpty();
//     req.checkBody('content', 'Content must have a value.').notEmpty();

//     var title = req.body.title;
//     var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
//     if (slug == "") slug = title.replace()(/\s+/g, '-').toLowerCase();
//     var content = req.body.content;

//     var errors = req.ValidationErrors();
//     if(errors){
//         console.log('errors');
//     res.render('admin/add_page',{
//         title: title,
//         slug: slug,
//         content: content
//     });
//     }
//     else {
//         console.log('sucess');
//     }
// });


// Exports
module.exports = router;