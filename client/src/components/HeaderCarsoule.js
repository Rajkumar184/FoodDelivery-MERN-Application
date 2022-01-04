import React from "react";
import "./HeaderCarsoule.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Link} from "react-router-dom"

const HeaderCarsoule = () => {
	return (
		<>
			<div className="App-carsule">
				<AliceCarousel
					autoPlay
					mouseTracking
					infinite
					autoPlayInterval={1000}
					animationDuration={1500}
				>
					<div className="">
						<img src="/images/featured2.jpg" className="sliderimg" alt="" />
						<div className="carousel-caption  d-md-block ">
							<h1>Best food waiting for your belly</h1>
							<Link
								to="/products"
								type="button"
								className="btn btn-outline-danger text-white px-5 py-2"
							>
								view
							</Link>
						</div>
					</div>
					<div className="">
						<img src="/images/sweet3.jpg" className="sliderimg" alt="" />
						<div className="carousel-caption  d-md-block">
							<h1>Best food waiting for your belly</h1>
							<Link
								to="/products"
								type="button"
								className="btn btn-outline-danger text-white px-5 py-2"
							>
								view
							</Link>
						</div>
					</div>
					<div className="">
						<img src="/images/burger.png" className="sliderimg" alt="" />
						<div className="carousel-caption  d-md-block">
							<h1>Best food waiting for your belly</h1>
							<Link
								to="/products"
								type="button"
								className="btn btn-outline-danger text-white px-5 py-2"
							>
								view
							</Link>
						</div>
					</div>
				</AliceCarousel>
			</div>
		</>
	);
};

export default HeaderCarsoule;
