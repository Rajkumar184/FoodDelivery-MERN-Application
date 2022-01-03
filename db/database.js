const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE;

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => console.log("> Database Connected Sucessfully...".bgCyan))
	.catch((err) =>
		console.log(
			`> Error while connecting to mongoDB : ${err.message}`.underline.red
		)
	);
