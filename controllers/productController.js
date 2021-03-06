const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Browse' })
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' })
});

router.post('/create', (req, res) => {

    productService.create( req.body)
   
   
        

    res.redirect('/products')
});

router.get('/details/:productId', (req, res) => {
    res.render('details', { title: 'Details' })
});

module.exports = router;