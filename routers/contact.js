const express = require("express");
const router = new express.Router();

const clients = require("../model/userSchema");
const Authenticate = require("../middleware/authenticate");

// user contact page
router.post("/contact", Authenticate, async (req, res, next) => {
	try {
		// const newData = {
		// 	name: req.body.name,
		// 	email: req.body.email,
		// 	phone: req.body.phone,
		// };

		// await Users.findByIdAndUpdate(req.user.id, newData);

		const { message } = req.body;

		const addMsg = await clients.findByIdAndUpdate(req.user.id, {
			$push: {
				message: message,
			},
		});

		if (addMsg) {
			res.status(201).json({
				success: true,
				message: "User Contact saved Successfully",
			});
		} else {
			return res.status(401).json({
				success: true,
				message: "User not Contact saved Successfully",
			});
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
