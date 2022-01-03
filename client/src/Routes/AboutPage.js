import React, { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AboutPage = () => {
	const [userData, setUserData] = useState();
	const history = useHistory();

	const openAboutPage = async () => {
		try {
			const res = await axios.get("/about");

			const data = await res.data;
			console.log(data);
			setUserData(data);

			if (!data) {
				return toast.error("there is no data availble plzz login", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}
		} catch (err) {
			history.push("/login");
			return toast.warning("Login to access profile page!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	useEffect(() => {
		openAboutPage();
	}, []);

	return (
		<>
			<section className="overall-about py-5 ">
				<div className="container emp-profile shadow-lg p-4 mb-4 bg-white">
					<form method="GET">
						<div className="row ">
							<div className="col-md-4">
								<div
									className="profile-img"
									style={{ height: "12rem", width: "16rem" }}
								>
									<img
										className="rounded"
										src="images/Personal_data.png"
										alt="personal_img"
									/>
									<div className="file btn btn-lg btn-primary">
										Change Photo
										<input type="file" name="file" />
									</div>
								</div>
							</div>
							<div className="col-md-6 pt-2">
								<div className="profile-head">
									<h5>{userData?.userProfile.name}</h5>
									<h6>{userData?.userProfile.work}</h6>
									<p className="proile-rating">
										RANKINGS : <span>8/10</span>
									</p>
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<Link
												className="nav-link active"
												id="home-tab"
												data-toggle="tab"
												to="#home"
												role="tab"
												aria-controls="home"
												aria-selected="true"
											>
												About
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link"
												id="profile-tab"
												data-toggle="tab"
												to="#profile"
												role="tab"
												aria-controls="profile"
												aria-selected="true"
											>
												Timeline
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-2">
								<input
									type="submit"
									className="profile-edit-btn"
									name="btnAddMore"
									value="Edit Profile"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="profile-work">
									<p>Profile LINK</p>
									<Link to="">Website Link</Link>
									<br />
									<Link to="">Website Profile</Link>
									<br />
									<Link to="">Website Work</Link>

									<br />
								</div>
							</div>
							<div className="col-md-8">
								<div className="tab-content profile-tab" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab"
									>
										<div className="row">
											<div className="col-md-6">
												<label>User Id</label>
											</div>
											<div className="col-md-6">
												<p>{userData?.userProfile.email}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Name</label>
											</div>
											<div className="col-md-6">
												<p>{userData?.userProfile.name}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Email</label>
											</div>
											<div className="col-md-6">
												<p>{userData?.userProfile.email}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Phone</label>
											</div>
											<div className="col-md-6">
												<p> {userData?.userProfile.phone}</p>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab"
									>
										<div className="row">
											<div className="col-md-6">
												<label>Experience</label>
											</div>
											<div className="col-md-6">
												<p>Expert</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Hourly Rate</label>
											</div>
											<div className="col-md-6">
												<p>10$/hr</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Total Projects</label>
											</div>
											<div className="col-md-6">
												<p>230</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>English Level</label>
											</div>
											<div className="col-md-6">
												<p>Expert</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Availability</label>
											</div>
											<div className="col-md-6">
												<p>6 months</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<label>Your Bio</label>
												<br />
												<p>Your detail description</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
