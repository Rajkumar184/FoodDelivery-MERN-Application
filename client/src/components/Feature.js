import React from "react";
import "./Feature.css";

const Feature = () => {
	return (
		<>
			<div id="cards_landscape_wrap-2">
				<div className="TitleWrapper">
					<h2 className="Heading">Why you choose us</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-4 ">
							<a href="">
								<div className="card-flyer">
									<div className="text-box">
										<div className="image-box">
											<img src="/images/feature.png" alt="" />
										</div>
										<div className="text-container">
											<h6>A Good Auto Responder</h6>
											<p style={{ color: "#4b4b4b", fontWeight: "550" }}>
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the
												industry's standard dummy text ever since the 1500s.
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<a href="">
								<div className="card-flyer">
									<div className="text-box">
										<div className="image-box">
											<img src="/images/feature2.png" alt="" />
										</div>
										<div className="text-container">
											<h6>Fast Delivery</h6>
											<p style={{ color: "#4b4b4b", fontWeight: "550" }}>
												TP-Food delivery is the fastest form of shipping. The
												customer pays an extra shipping cost for this type of
												delivery, as the shipment will get transported to him
												anywhere between 24 to 72 hours. TP-Food is the fastest
												delivery method.
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<a href="">
								<div className="card-flyer">
									<div className="text-box">
										<div className="image-box">
											<img src="/images/feature3.png" alt="" />
										</div>

										<div className="text-container">
											<h6>Home Delivery</h6>
											<p style={{ color: "#4b4b4b", fontWeight: "550" }}>
												Home delivery is the bringing of items to the customer's
												home rather than the customer taking or collecting them
												from the store. ... For customers who want to avoid
												paying for home delivery, click and collect is becoming
												a popular option.
											</p>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feature;
