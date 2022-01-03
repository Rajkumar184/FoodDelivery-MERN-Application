import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ContactPage = () => {
	const [userData, setUserData] = useState("");
	const history = useHistory();

	const [msg, setMsg] = useState({
		message: "",
	});

	const userContactPage = async () => {
		try {
			const res = await axios.get("/getdata");

			const data = await res.data.userProfile;
			console.log(data);
			setUserData(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		userContactPage();
	}, []);

	// storing data in states
	const handleInputs = (e) => {
		const { name, value } = e.target;

		setMsg({
			...msg,
			[name]: value,
		});
	};

	// send data to backend
	const submitConatctForm = async (e) => {
		e.preventDefault();

		const { message } = msg;

		if (!message) {
			return toast.warning("All fields are mandatory!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
		try {
			const res = await axios.post("/contact", msg);

			const data = await res.data;

			if (!data) {
				return toast.warning("message not send", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				history.push("/");

				return toast.success("Message Send Succesfully!", {
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
		<div>
			<section class="ftco-section py-2">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-6 text-center mb-5">
							<h2 class="heading-section">Contact Form #01</h2>
						</div>
					</div>
					<div class="row justify-content-center shadow-lg p-4 my-5 bg-white ">
						<div class="col-lg-10 col-md-12">
							<div class="wrapper">
								<div class="row no-gutters">
									<div class="col-md-7 d-flex align-items-stretch">
										<div class="contact-wrap w-100 p-md-5 p-4">
											<h3 class="mb-4">Get in touch</h3>
											<div id="form-message-warning" class="mb-4"></div>
											<div id="form-message-success" class="mb-4">
												Your message was sent, thank you!
											</div>
											<form
												onSubmit={submitConatctForm}
												id="contactForm"
												name="contactForm"
												className="contactForm"
												novalidate="novalidate"
											>
												<div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<input
																type="text"
																class="form-control"
																name="name"
																id="name"
																placeholder="Name"
																onChange={handleInputs}
																value={userData?.name}
															/>
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<input
																type="email"
																class="form-control"
																name="email"
																id="email"
																placeholder="Email"
																onChange={handleInputs}
																value={userData?.email}
															/>
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<input
																type="tel"
																minLength="10"
																maxLength="10"
																className="form-control"
																name="phone"
																placeholder="Phone"
																onChange={handleInputs}
																value={userData?.phone}
															/>
														</div>
													</div>
													{/* <div class="col-md-12">
														<div class="form-group">
															<input
																type="text"
																class="form-control"
																name="subject"
																id="subject"
																placeholder="Subject"
															/>
														</div>
													</div> */}
													<div class="col-md-12">
														<div class="form-group">
															<textarea
																name="message"
																className="form-control"
																id="message"
																cols="30"
																rows="4"
																placeholder="Message"
																onChange={handleInputs}
															></textarea>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input
																type="submit"
																value="Send Message"
																class="btn btn-primary"
															/>
															<div class="submitting"></div>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="col-md-5 d-flex align-items-stretch">
										<div
											class="info-wrap  w-100 p-lg-5 p-4"
											style={{ backgroundColor: "#273c75" }}
										>
											<h3 class="mb-4 mt-md-4 text-white">Contact us</h3>
											<div class="dbox w-100 d-flex align-items-start">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-map-marker"></span>
												</div>
												<div class="text pl-3 pt-3 text-white">
													<p>
														<span>Address:</span> 198 West 21th Street, Suite
														721 New York NY 10016
													</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-phone"></span>
												</div>
												<div class=" text pl-3 pt-3 text-white">
													<p>
														<span>Phone:</span>
														<Link to="tel://1234567920">+ 1235 2355 98</Link>
													</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-paper-plane"></span>
												</div>
												<div class=" text pl-3 pt-3 text-white">
													<p>
														<span>Email:</span>
														<Link
															to="mailto:info@yoursite.com"
															className="text-none"
														>
															info@yoursite.com
														</Link>
													</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-globe"></span>
												</div>
												<div class="text pl-3 pt-3 text-white text-decoration-none">
													<p>
														<span>Website</span>{" "}
														<Link to="#">yoursite.com</Link>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
