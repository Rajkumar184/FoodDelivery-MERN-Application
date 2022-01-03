import React, { useState } from "react";
import "./SignUp.css";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
	const history = useHistory();
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		cpassword: "",
	});

	let name, value;

	const handleInputs = (e) => {
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, phone, password, cpassword } = user;

		if (!name || !email || !phone || !password || !cpassword) {
			return toast.warning("All fields are mandatory!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}

		if (password !== cpassword) {
			return toast.warning("Password and Confirm Password are not matching!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}

		try {
			const res = await fetch("/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					password,
					cpassword,
				}),
			});

			const data = res.json();

			console.log(data);

			if (data) {
				history.push("/login");
				return toast.success("Registration Successful!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				return toast.error("something went wrong server error", {
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
						<div class="col-sm-6 text-black mt-4">
							<div class="px-5 ms-xl-4">
								<i
									class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
									style={{ color: "#709085" }}
								></i>
							</div>

							<div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
								<form
									style={{ width: "23rem" }}
									className="register-form"
									id="register-form"
									method="POST"
									autoComplete="off"
									onSubmit={PostData}
								>
									<h2 className="text-center">Sign Up</h2>
									<p className="text-center">
										Please fill in this form to create an account!
									</p>

									<hr />
									<div className="form-group">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<span className="fa fa-user"></span>
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												name="name"
												placeholder="Username"
												onChange={handleInputs}
												value={user?.name}
											/>
										</div>
									</div>
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
												onChange={handleInputs}
												value={user?.email}
											/>
										</div>
									</div>

									<div className="form-group">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i class="fas fa-phone"></i>
												</span>
											</div>
											<input
												type="tel"
												minLength="10"
												maxLength="10"
												className="form-control"
												name="phone"
												placeholder="Phone"
												pattern="[7-9]{1}[0-9]{9}"
												title="Phone number with 7-9 and remaing 9 digit with 0-9"
												onChange={handleInputs}
												value={user?.phone}
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
												onChange={handleInputs}
												value={user?.password}
											/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="fa fa-check"></i>
												</span>
											</div>
											<input
												type="password"
												className="form-control"
												name="cpassword"
												placeholder="Confirm Password"
												onChange={handleInputs}
												value={user?.cpassword}
											/>
										</div>
									</div>
									<div className="form-group">
										<label className="form-check-label">
											<input type="checkbox" required="required" /> I accept the
											<a href="#*">Terms of Use</a> &amp;
											<a href="#*">Privacy Policy</a>
										</label>
									</div>

									<div className="pt-1 mb-4">
										<button
											type="submit"
											className="btn btn-info btn-lg btn-block"
											value="register"
										>
											SignUp
										</button>
									</div>

									<div className="text-center pb-2">
										Already have an account?
										<Link className="text-success" to="/login">
											Login here
										</Link>
									</div>
								</form>
							</div>
						</div>
						<div class="col-sm-6 px-0 d-none d-sm-block">
							<img
								src="/images/product-3.jpg"
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

export default SignUp;
