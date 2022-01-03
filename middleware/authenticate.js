const jwt = require("jsonwebtoken");
const Clients = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		// req.cookies.token || req.header("Authorization").replace("Bearer", "");

		if (!token) {
			return next(new Error("Login first to access this page"));
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.user = await Clients.findById(decoded.id);

		next();
	} catch (err) {
		return next(new Error("Token not found plzz Login", err.message));
	}
};

module.exports = Authenticate;
