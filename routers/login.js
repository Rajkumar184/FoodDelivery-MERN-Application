const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");

const client = require("../model/userSchema");

// create the user login
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: "Plz Filled the data" });
		}

		//checking email
		const checkUser = await client.findOne({ email: email });
		if (!checkUser) {
			return res
				.status(401)
				.json({ message: "Invalid Credentials please register!" });
		}

		//checking password
		const checkPassword = await bcrypt.compare(password, checkUser.password);
		if (!checkPassword) {
			return res.status(401).json({ message: "Invalid Credentials!" });
		}

		const token = await checkUser.generateAuthToken();
		console.log(`the token part ${token}`);

		res.status(201).cookie("jwt", token, {
			expires: new Date(Date.now() + 1800000),
			httpOnly: true,
			// secure:true
		});

		res.status(201).send("User Login successFully!");
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
