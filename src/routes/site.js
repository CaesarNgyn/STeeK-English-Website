const express = require('express');
const router = express.Router();

const sitecontroller = require('../app/controller/Sitecontroller');

router.get('/search', sitecontroller.showSearch);
router.get('/signin',sitecontroller.showSignIn);
router.get('/signup',sitecontroller.showSignUp)
router.post('/create-user',sitecontroller.create_User);
router.get('/',sitecontroller.index);

module.exports = router;



