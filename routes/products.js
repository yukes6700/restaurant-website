var express = require('express');
var router = express.Router();
var fs = require('fs-extra');
var auth = require('../config/auth');
var isUser = auth.isUser;

// Get Product model
var Product = require('../models/product');

// Get Category model
var Category = require('../models/category');

/*
 * GET all products
 */
router.get('/', function (req, res) {
//router.get('/', isUser, function (req, res) {
    // var loggedIn = (req.isAuthenticated()) ? true : false;
    // console.log(loggedIn)
    // console.log(req.user)

    Category.find({}, function (err, categories) {
        Product.find({}, function (err, products) {
            if (err)
                console.log(err);
    
            // console.log(products);
    
            res.render('all_products', {
                title: 'All products',
                products: products,
                user: req.user,
                categories: categories
            });
        });
    });

    

});


/*
 * GET products by category
 */
router.get('/:category', function (req, res) {

    var categorySlug = req.params.category;
    // var loggedIn = (req.isAuthenticated()) ? true : false;

    Category.find({}, function (err, categories) {
        Category.findOne({slug: categorySlug}, function (err, c) {
            Product.find({category: categorySlug}, function (err, products) {
                if (err)
                    console.log(err);
    
                res.render('cat_products', {
                    title: c.title,
                    products: products,
                    user: req.user,
                    categories: categories
                });
            });
        });
    })
    

});

/*
 * GET product details
 */
router.get('/:category/:product', function (req, res) {

    var galleryImages = null;
    // var loggedIn = (req.isAuthenticated()) ? true : false;

    Category.find({}, function (err, categories) {
        Product.findOne({slug: req.params.product}, function (err, product) {
            if (err) {
                console.log(err);
            } else {
                var galleryDir = 'public/product_images/' + product._id + '/gallery';
    
                fs.readdir(galleryDir, function (err, files) {
                    if (err) {
                        console.log(err);
                    } else {
                        galleryImages = files;
    
                        res.render('product', {
                            title: product.title,
                            p: product,
                            galleryImages: galleryImages,
                            user: req.user,
                            categories: categories
                        });
                    }
                });
            }
        });
    })
    

});

// Exports
module.exports = router;


