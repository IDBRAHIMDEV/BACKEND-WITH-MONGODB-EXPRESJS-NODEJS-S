const express = require('express');
const router = express.Router();

const { store, getAll, getOneById, getOne, deleteById, update, patch } = require("./../controllers/products")


/* POST product */
router.post('/', store);

/* GET all products */
router.get('/', getAll);

/* GET one product by field */
router.get('/:field/one', getOne);

/* GET one product by id */
router.get('/:id', getOneById);

/* GET delete product by id */
router.delete('/:id', deleteById);

/* PUT product by id */
router.put('/:id', update);

/* PATCH product by id */
router.patch('/:id', patch);


module.exports = router;
