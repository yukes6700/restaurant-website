// var express = require('express');
// var router = express.Router();
// var mkdirp = require('mkdirp');
// var fs = require('fs-extra');
// var resizeImg = require('resize-img');

// // Get product model
// var Product = require('../models/product')

// // Get category model
// var Category = require('../models/category')

// // get product index
// router.get('/', function(req, res){
//     // res.send('admin area');
//     var count;
//     Product.count(function(err, c){
//         count=c;
//     });
//     Product.find(function (err, products){
//         res.render('admin/products',{
//             products : products,
//             count : count
//         });
//     });
// });

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