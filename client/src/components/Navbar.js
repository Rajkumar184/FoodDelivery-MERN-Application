import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

const Navbar = () => {
	const cartArr = useSelector((state) => state.Item?.cart);
	const cookies = new Cookies();

	return (
		<>
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top shadow-lg p-2  bg-white">
					<Link
						className="navbar-brand"
						to="/"
						style={{ color: "#40407a", fontWeight: "800" }}
					>
						<img
							src="/images/logo-icon.png"
							alt=""
							height="40px"
							style={{ borderRadius: "50%" }}
						/>
						TP-FoodDelivery
					</Link>
					<button
						className="navbar-toggler bg-primary"
						type="button"
						data-toggle="collapse"
						data-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav ml-auto ">
							<li className="nav-item active">
								<Link className="nav-link text-dark" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item active">
								<Link className="nav-link text-dark" to="/products">
									Product
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/aboutus">
									AboutUs
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-dark" to="/contact">
									ContactUs
								</Link>
							</li>
						</ul>
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item active">
								<IconButton
									component={Link}
									to="/cart"
									style={{ color: "black", textDecoration: "none" }}
									aria-label="Show cart items"
									color="default"
								>
									<Badge badgeContent={cartArr?.length} color="secondary">
										<ShoppingCartIcon />
									</Badge>
								</IconButton>
							</li>
							<div>
								{cookies.get("isLogin") ? (
									""
								) : (
									<li className="nav-item">
										<Link className="nav-link text-success" to="/signup">
											<span className="fas fa-user "></span> Sign Up
										</Link>
									</li>
								)}
							</div>

							{/* login logout toggle */}
							{cookies.get("isLogin") ? (
								<li className="nav-item">
									<Link
										type="button"
										className="btn btn-square btn-danger"
										to="/logout"
									>
										<span className="fas fa-sign-in-alt "></span> Logout
									</Link>
								</li>
							) : (
								<li className="nav-item">
									<Link
										className=" text-dark btn btn-warning"
										data-toggle="modal"
										data-target="#elegantModalForm"
										to="/login"
									>
										<span className="fas fa-sign-in-alt "></span> Login
									</Link>
								</li>
							)}
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
