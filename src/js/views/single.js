import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getPerson(props.match.params.theid);
		},
		[props.match.params.theid]
	);

	return (
		<>
			{"name" in store.single &&
				props.match.params.theid == store.single.url.match(/[/][0-9]+[/]/)[0].replace(/[/]/g, "") && (
					<div className="jumbotron">
						<div className="d-flex">
							<img className="card-img-top" src="..." alt="Card image cap" />
						</div>
						<div className="d-flex">
							<h1 className="display-4">{store.single.name}</h1>
							<p className="lead">{props.match.params.thetype}</p>
						</div>
						<hr className="my-4" />
						<p>{"This is the card info"}</p>
					</div>
				)}
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
