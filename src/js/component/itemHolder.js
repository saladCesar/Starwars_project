import React from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";

export const ItemHolder = props => {
	return (
		<>
			<div>{props.title}</div>
			<div className="d-flex justify-content-between overflow-auto">
				{props.cardsData.map((cardData, index) => {
					return <Card data={cardData} key={index} />;
				})}
			</div>
		</>
	);
};
ItemHolder.propTypes = {
	title: PropTypes.string,
	cardsData: PropTypes.array
};
