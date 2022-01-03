import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const Login = () => {
	const cookies = new Cookies();
	const history = useHistory();
	const [userLogin, setUserLogin] = useState({
		email: "",
		password: "",
	});

	const handleInputs = (e) => {
		const { name, value } = e.target;
		setUserLogin({ ...userLogin, [name]: value });
	};

	const submitLoginForm = async (e) => {
		e.preventDefault();

		try {
			const { email, password } = userLogin;
			if (!email || !password) {
				return toast.error("All fields are mandatory!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}

			const res = await axios.post("/login", userLogin);
			const data = res.data;

			if (data) {
				let expirestimeCookie = new Date();
				expirestimeCookie.setTime(expirestimeCookie.getTime() + 30 * 60 * 1000);

				cookies.set("isLogin", "true", { expires: expirestimeCookie });

				history.push("/");
				return toast.success("Login Successful!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}
		} catch (error) {
			return toast.error(error.response.data.message, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};
	return (
		<>
			<section class="vh-100">
				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-6 text-black mt-5">
							<div class="px-5 ms-xl-4">
								<i
									class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
									style={{ color: "#709085" }}
								></i>
							</div>

							<div class="d-flex align-items-center h-custom-2 px-5  ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
								<form
									style={{ width: "23rem" }}
									method="POST"
									autoComplete="off"
									onSubmit={submitLoginForm}
								>
									<h2 className="text-center">Login</h2>

									<hr />

									<div className="form-group">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fa fa-paper-plane"></i>
												</span>
											</div>
											<input
												type="email"
												className="form-control"
												name="email"
												placeholder="Email Address"
												required="required"
												value={userLogin.email}
												onChange={handleInputs}
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fa fa-lock"></i>
												</span>
											</div>
											<input
												type="password"
												className="form-control"
												name="password"
												placeholder="Password"
												required="required"
												value={userLogin.password}
												onChange={handleInputs}
											/>
										</div>
									</div>

									<p className="font-small blue-text d-flex justify-content-end">
										Forgot
										<Link to="/forgotpassword" className="blue-text ml-1">
											Password?
										</Link>
									</p>

									<div className="text-center mb-3">
										<button
											type="submit"
											className="btn btn-primary btn-block btn-rounded"
										>
											Sign in
										</button>
									</div>

									<p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
										or Sign in with:
									</p>
									<div className="row my-3 d-flex justify-content-center">
										<ul
											className="nav flex-wrap justify-content-center
										align-items-center list-unstyled d-flex"
										>
											<li className="ms-3">
												<Link
													to="https://www.facebook.com/"
													className="btn btn-primary btn-md"
													title="Facebook"
													target="_blank"
												>
													<i className="fab fa-facebook-square"></i>
												</Link>
											</li>
											<li className="ms-3">
												<Link
													to="/"
													className="btn btn-danger btn-md ml-3"
													title="Instagram"
												>
													<i className="fab fa-instagram"></i>
												</Link>
											</li>
											<li className="ms-3">
												<Link
													to="/"
													className="btn btn-danger btn-md ml-3 "
													title="Linkdin"
												>
													<i className="fab fa-google"></i>
												</Link>
											</li>
										</ul>
									</div>
									<div className="modal-footer mx-5 pt-3 mb-1">
										<p className="font-small grey-text d-flex justify-content-end">
											Not a member?
											<Link to="/signup" className="blue-text ml-1">
												Sign Up
											</Link>
										</p>
									</div>
								</form>
							</div>
						</div>
						<div class="col-sm-6 px-0 d-none d-sm-block">
							<img
								src="/images/sweet.jpg"
								alt="Loginimage"
								class="w-100 vh-100"
								style={{ objectFit: "cover", objectPosition: "left" }}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
