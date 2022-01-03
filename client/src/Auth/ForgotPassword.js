import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
	return (
		<>
			<section className="sendemail-section py-2">
				<div className="container d-flex justify-content-center align-items-center vh-100">
					<div className="bg-white text-center p-5 mt-3 center">
						<h3 className="header">Forgot Password </h3>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
						<form className="pb-3" action="#">
							<div className="form-group">
								<input
									type="text"
									className="form-control email-inpt"
									placeholder="Your Username*"
									required=""
								/>
							</div>
						</form>
						<button type="submit" className="emailbtn">
							Reset Password
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ForgotPassword;
