import React from "react";
import "./MainProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Action/MenuItemAction";

const MainProducts = () => {
	let product = useSelector((state) => state.allItems?.List);
	const dispatch = useDispatch();
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
													<button className="btn btn-primary">Order Now</button>
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
