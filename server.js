const express = require("express");
const app = express();

const dotenv = require("dotenv");

require("./db/database");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Clients = require("./model/userSchema");
app.use(require("./routers/auth"));

dotenv.config({ path: "./.env" });

const cors = require("cors");
app.use(cors());

app.use(Clients);

// require("dotenv").config();

// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const database = require("./db/database");
// database.call();

// const client = require("./model/userSchema");
// app.use(client);

// const cors = require("cors");
// app.use(cors());

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

// app.use(require("./routers/auth"));

// app.use(require("./routers/register"));

// const register = require("./routers/register");
// app.use("/", register);

// const login = require("./routers/login");
// app.use("/", login);

// const logout = require("./routers/logout");
// app.use("/", logout);

// const about = require("./routers/about");
// app.use("/", about);

// const getdata = require("./routers/getdata");
// app.use("/", getdata);

// const contact = require("./routers/contact");
// app.use("/", contact);

app.listen(process.env.PORT, () => {
	console.log("server started...");
});
