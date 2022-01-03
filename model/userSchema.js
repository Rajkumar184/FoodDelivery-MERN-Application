const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
	},

	email: {
		type: String,
		required: true,
		unique: [true, "Email is already present"],
		validator(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Invalid Email");
			}
		},
	},

	phone: {
		type: Number,
		min: 10,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	cpassword: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	message: [
		{
			type: String,
		},
	],
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

// converting password into hash
userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		console.log(`the current password is ${this.password}`);
		this.password = await bcrypt.hash(this.password, 12);
		console.log(`the current hash password is ${this.password}`);

		this.cpassword = await bcrypt.hash(this.password, 12);
	}
	next();
});

// generating tokens
userSchema.methods.generateAuthToken = async function () {
	try {
		return jwt.sign({ id: this._id.toString() }, process.env.SECRET_KEY);
	} catch (error) {
		console.log(`the error part ${error}`);
	}
};

// storing messages
userSchema.methods.addMessage = async function (name, email, phone, message) {
	try {
		this.message = this.message.concat({ name, email, phone, message });
		await this.save();
		return this.message;
	} catch (error) {
		console.log(error);
	}
};

const Clients = mongoose.model("Clients", userSchema);
module.exports = Clients;
