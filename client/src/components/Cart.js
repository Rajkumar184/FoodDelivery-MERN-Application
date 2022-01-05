import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../Redux/Action/MenuItemAction";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

const Cart = () => {
	let curElem = useSelector((state) => state.Item?.cart);

	const dispatch = useDispatch();

	// const [amount, setAmount] = useState("");
	const history = useHistory();

	const [user, setuser] = useState();
	const getData = async () => {
		const res = await axios.get("/auth/profile");
		setuser(res.data);
	};

	useEffect(() => {
		getData();
	}, []);
	if (curElem?.length === 0) {
		return (
			<div class="container-fluid mt-100 cart-header">
				<div class="row">
					<div class="col-md-12">
						<div class="card">
							<div class="card-header">
								<h5>Cart</h5>
							</div>
							<div class="card-body cart">
								<div class="col-sm-12 empty-cart-cls text-center">
									<img
										src="/images/shop-bag2.png"
										alt="shop-bag"
										width="200"
										height="200"
										class="img-fluid mb-4 mr-3"
									/>
									<h3>
										<strong>Your Cart is Empty</strong>
									</h3>
									<h4>Add something to make me happy :)</h4>{" "}
									<Link
										to="/"
										class="btn btn-primary cart-btn-transform m-3"
										data-abc="true"
									>
										continue shopping
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<section className="pt-5 pb-5">
				<div className="container">
					<div className="row w-100">
						<div className="col-lg-12 col-md-12 col-12 mt-5">
							<h3 className="display-5 mb-2 text-center"> Cart</h3>
							<p className="mb-5 text-center">
								<i
									className="text-info font-weight-bold"
									style={{ fontSize: "30px" }}
								>
									{curElem?.length}
								</i>
								items in your cart
							</p>
							<table
								id="shoppingCart"
								className="table table-condensed table-responsive"
							>
								<thead>
									<tr>
										<th style={{ width: "60%" }}>Product</th>
										<th style={{ width: "12%" }}>Price</th>
										<th style={{ width: "10%" }}>Quantity</th>
										<th style={{ width: "16%" }}></th>
									</tr>
								</thead>
								<tbody>
									{curElem.map((val) => {
										const { id, image, name, price, description } = val;

										return (
											<tr key={id}>
												<td data-th="Product">
													<div className="row">
														<div className="col-md-4 text-left">
															<img
																src={image}
																alt=""
																width="160rem"
																className="img-fluidrounded mb-2 shadow "
															/>
														</div>
														<div className="col-md-12 col-sm-12 col-lg-12 text-left ">
															<h4>{name}</h4>
															<p className="font-weight-light">{description}</p>
														</div>
													</div>
												</td>
												<td data-th="Price" style={{ fontSize: "30px" }}>
													₹{price}
												</td>
												<td data-th="Quantity">
													<input
														type="number"
														className="form-control form-control-lg text-center"
														value="1"
													/>
												</td>
												<td className="actions" data-th="">
													<div className="text-right">
														<button
															className="btn btn-white border-secondary bg-white btn-md mb-2"
															onClick={() => dispatch(removeItem(id))}
														>
															<i className="fas fa-trash"></i>
														</button>
													</div>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
							<div className="float-right text-right">
								<h4>Subtotal({curElem?.length}):</h4>
								<h1>
									₹{curElem?.reduce((amount, items) => items.price + amount, 0)}
								</h1>
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-end">
						<div className=" p-2 ">
							<button
								className="btn btn-danger mb-4 btn-lg pl-5 pr-5"
								onClick={() => dispatch(clearCart())}
							>
								Empty
							</button>
						</div>

						{user ? (
							<div className="p-2">
								<button className="btn btn-primary mb-4 btn-lg pl-5 pr-5">
									<StripeCheckout
										name="Food Delivery"
										currency="INR"
										image="/images/logo-icon.png"
										amount={
											curElem.reduce(
												(amount, items) => items.price + amount,
												0
											) * 100
										}
										stripeKey="pk_test_51KCQSRSJdBl3ShjMeSpPUFwu12wLIjHf4oSNef3Q3NvukYfpQYQe300s4dbbf2HR8b0pNundKAp4Fm0VLjFUKja900rTz7XYuv"
										token={async (token) => {
											try {
												await axios.post("/capture/payment", {
													amount: curElem.reduce(
														(amount, items) => items.price + amount,
														0
													),
													token: token,
												});

												history.push("/");

												return toast.success("Payment Successful!", {
													position: toast.POSITION.TOP_CENTER,
													autoClose: 4000,
												});
											} catch (error) {
												return toast.error("server issues try later!!", {
													position: toast.POSITION.TOP_CENTER,
													autoClose: 3000,
												});
											}
										}}
									>
										Checkout
									</StripeCheckout>
								</button>
							</div>
						) : (
							<div className="p-2">
								<button
									className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
									onClick={() =>
										toast.error("Login to make payment!", {
											position: toast.POSITION.TOP_CENTER,
											autoClose: 3000,
										})
									}
								>
									Checkout
								</button>
							</div>
						)}
					</div>

					<div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
						<Link to="/">
							<i className="fas fa-arrow-left mr-2"></i> Continue Ordering
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Cart;
