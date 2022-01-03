const express = require("express");
const router = new express.Router();

const clients = require("../model/userSchema");

// user register page
router.post("/register", async (req, res, next) => {
	try {
		const { name, email, phone, password, cpassword } = req.body;

		if (!name || !email || !phone || !password || !cpassword) {
			return next(new Error("All fields are mandatory"));
		}

		if (password !== cpassword) {
			return next(new Error("Password and Confirm Password not matching"));
		}

		const userExists = await clients.findOne({ email: email });

		if (userExists) {
			return next(new Error("Already registered please Login"));
		}

		// const userPhone = await Users.findOne({ phone: phone });
		// if (!userPhone) {
		// 	return next(new Error(": Please provide another contact No "));
		// }

		await clients.create({
			name,
			email,
			phone,
			password,
			cpassword,
		});

		res.status(201).json({
			success: true,
			message: "Register successfully",
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
