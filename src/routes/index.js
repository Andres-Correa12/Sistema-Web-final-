const { application } = require('express');
const express = require ('express');
const { models } = require('mongoose');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/', async (req, res) => {
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs', {
        valores
    });
});

router.post('/add', async (req,res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
    //res.json(valor)
});

router.get('/del/:id', async(req, res)=> {
    const { id } = req.params;
    await Valor.findByIdAndRemove(id, req.body);
    res.redirect('/');

});

router.get('/edit/:id', async(req, res)=> {
    try {
        const valor = await Valor.findById(req.params.id).lean()
        res.render('editar.ejs', { valor });
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/edit/:id', async (req, res) => {

    const { id } = req.params;
    await Valor.findByIdAndUpdate(id, req.body);
    res.redirect('/');

});

module.exports = router;

