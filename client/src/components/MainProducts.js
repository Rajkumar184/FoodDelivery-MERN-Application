import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./MainProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Action/MenuItemAction";
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const MainProducts = () => {
	let product = useSelector((state) => state.allItems?.List);
	const dispatch = useDispatch();
	const history = useHistory();

	const [user, setuser] = useState();
	const getData = async () => {
		const res = await axios.get("/auth/profile");
		setuser(res.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<div id="cards_landscape_wrap-2">
				<div className="TitleWrapper">
					<h2 className="Heading">Eats What make you happy </h2>
				</div>

				<div className="container">
					<div className="row">
						{product.map((item) => {
							const { id, name, image, price, description } = item;
							return (
								<>
									<div className="col-xs-12 col-sm-6 col-md-4 " key={id}>
										<div className="card-flyer">
											<div className="text-box">
												<div className="image-box">
													<img src={image} alt={name} />
												</div>
												<div className="text-container">
													<h6>{name}</h6>
													<p style={{ color: "#4b4b4b", fontWeight: "550" }}>
														{description}
													</p>
												</div>
												<div className="menu-price-book">
													<div className="price-book-divide d-flex justify-content-center ">
														<h2>Price : {price}₹</h2>
													</div>
												</div>
												<div className="action-buttons">
													{user ? (
														<button className="btn btn-primary">
															<StripeCheckout
																name="Food Delivery"
																currency="INR"
																image="/images/logo-icon.png"
																amount={price * 100}
																stripeKey="pk_test_51KCQSRSJdBl3ShjMeSpPUFwu12wLIjHf4oSNef3Q3NvukYfpQYQe300s4dbbf2HR8b0pNundKAp4Fm0VLjFUKja900rTz7XYuv"
																token={async (token) => {
																	try {
																		await axios.post("/capture/payment", {
																			amount: price * 100,
																			token: token,
																		});

																		history.push("/");

																		return toast.success(
																			"Payment Successful!",
																			{
																				position: toast.POSITION.TOP_CENTER,
																				autoClose: 4000,
																			}
																		);
																	} catch (error) {
																		return toast.error(
																			"server issues try later!!",
																			{
																				position: toast.POSITION.TOP_CENTER,
																				autoClose: 3000,
																			}
																		);
																	}
																}}
															>
																Order Now
															</StripeCheckout>
														</button>
													) : (
														<button
															className="btn btn-primary"
															onClick={() =>
																toast.error("Login to make payment!", {
																	position: toast.POSITION.TOP_CENTER,
																	autoClose: 3000,
																})
															}
														>
															Order Now
														</button>
													)}
													<button
														className="btn btn-danger"
														onClick={() => dispatch(addToCart(item))}
													>
														Add To Cart
													</button>
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default MainProducts;
