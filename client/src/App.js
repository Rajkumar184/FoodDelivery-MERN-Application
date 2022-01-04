import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./Routes/HomePage";
import Products from "./Routes/Products";
import ContactPage from "./Routes/ContactPage";
import AboutPage from "./Routes/AboutPage";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import ForgotPassword from "./Auth/ForgotPassword";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/products" exact component={Products} />
					<Route path="/contact" exact component={ContactPage} />
					<Route path="/aboutus" exact component={AboutPage} />
					<Route path="/signup" exact component={SignUp} />
					<Route path="/login" exact component={Login} />
					<Route path="/logout" exact component={Logout} />
					<Route path="/forgotpassword" exact component={ForgotPassword} />
					<Route path="/cart" exact component={Cart} />
					<Route path="*" component={ErrorPage} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
