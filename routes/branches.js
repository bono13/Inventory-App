const express = require('express');
const branchControllers = require('../controllers/branches');

const router = new express.Router();


router.get('/branches', branchControllers.getBranches);

router.get('/branches/:bname', branchControllers.getBranchCategories);

router.get('/branches/:bname/:lang', branchControllers.getBooksFromCategory);

module.exports = router;