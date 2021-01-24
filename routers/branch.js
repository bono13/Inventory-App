const express = require('express');
const branchController = require('../controllers/branch');

const router = new express.Router();

router.get('/branches', branchController.getBranches);

router.get('/branches/:bname', branchController.getBranchCategories);

router.get('/branches/:bname/:lang', branchController.getBooksFromCategory);

module.exports = router;
