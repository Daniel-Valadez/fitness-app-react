import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./carousel.css";

//The index will be what the active view of the carousel should be.
const Carousel = ({ index }) => {
	return (
		<div className="carousel">
			<div className="buttonRow">
				<button
					className="leftButton"
					type="button"
					title="Move left through the images"
				>
					<FontAwesomeIcon icon="fa-arrow-left" />
				</button>
				<button
					className="rightButton"
					type="button"
					title="Move right through the images"
				>
					<FontAwesomeIcon icon="fa-arrow-right" />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
