import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AboutPage.css";
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
			<section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h3 class="dark-color">About Me</h3>
                            <h6 class="theme-color lead">MERN DEVELOPER</h6>
                            <p>I am <mark>frontend and backend developer</mark>develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to develop digital user experiences through the bold interface and meaningful interactions.</p>
                            <div class="row about-list">
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>Name</label>
                                        <p>Rajkumar Kailash Mali</p>
                                    </div>
                                    <div class="media">
                                        <label>Email</label>
                                        <p>rajkumarmali184@gmail.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Phone</label>
                                        <p>7506212472</p>
                                    </div>
                                    <div class="media">
                                        <label>Address</label>
                                        <p>Mumbai,Maharashtra,India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img src="/images/personal-photo.jpg" title="personal-photo" alt="" />
                        </div>
                    </div>
                </div>
                <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                               <Link
													to="/"
													className="btn btn-primary btn-md "
													title="linkdin"
												>
													<i class="fab fa-linkedin"></i>
												</Link>
                                <p class="m-0px font-w-600">Linkdin</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <Link
											to="https://www.facebook.com/"
													className="btn btn-primary btn-md"
													title="Facebook"
													target="_blank"
												>
													<i className="fab fa-facebook-square"></i>
												</Link>
                                <p class="m-0px font-w-600">Facebook</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                               <Link
													to="/"
													className="btn btn-danger btn-md "
													title="Instagram"
												>
													<i className="fab fa-instagram"></i>
												</Link>
                                <p class="m-0px font-w-600">Instagram</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                               <Link
													to="/"
													className="btn btn-primary btn-md "
													title="twitter"
												>
													<i className="fab fa-twitter"></i>
												</Link>
                                <p class="m-0px font-w-600">Twitter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>		
		</>
	);
};

export default AboutPage;
