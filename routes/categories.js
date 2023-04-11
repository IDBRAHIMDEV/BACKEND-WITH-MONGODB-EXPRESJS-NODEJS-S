const express = require('express');
const router = express.Router();

const { store, getAll, getOneById, getOne, deleteById, update, patch } = require("./../controllers/categories")


/* POST category */
router.post('/', store);

/* GET all categories */
router.get('/', getAll);

/* GET one category by field */
router.get('/:field/one', getOne);

/* GET one category by id */
router.get('/:id', getOneById);

/* GET delete category by id */
router.delete('/:id', deleteById);

/* PUT category by id */
router.put('/:id', update);

/* PATCH category by id */
router.patch('/:id', patch);


module.exports = router;
