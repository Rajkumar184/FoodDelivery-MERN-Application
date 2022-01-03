const express = require("express");
const router = new express.Router();

const client = require("../model/userSchema");
const Authenticate = require("../middleware/authenticate");

// create the about page

router.get("/about", Authenticate, async (req, res, next) => {
	try {
		const userProfile = await client.findById(req.user.id);

		userProfile.password = undefined;
		userProfile.cpassword = undefined;

		res.status(201).send({ userProfile });
	} catch (error) {
		return next(new Error(error.message));
	}
});

module.exports = router;
