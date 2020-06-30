import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<>
			{props.data.url && (
				<div className="card" style={{ minWidth: "18rem" }}>
					<img className="card-img-top" src="..." alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{props.data.name}</h5>
						<p className="card-text" />
						{"gender" in props.data && <p>{`Gender: ${props.data.gender}`}</p>}
						{"hair_color" in props.data && <p>{`Hair Color: ${props.data.hair_color}`}</p>}
						{"eye_color" in props.data && <p>{`Eye-Color: ${props.data.eye_color}`}</p>}
						{"population" in props.data && <p>{`Population: ${props.data.population}`}</p>}
						{"climate" in props.data && <p>{`Climate: ${props.data.climate}`}</p>}
						{"terrain" in props.data && <p>{`Terrain: ${props.data.terrain}`}</p>}
						{"model" in props.data && <p>{`Model: ${props.data.model}`}</p>}
						{"manufacturer" in props.data && <p>{`Manufacturer: ${props.data.manufacturer}`}</p>}
						{"passengers" in props.data && <p>{`Passengers: ${props.data.passengers}`}</p>}
						<div className="d-flex justify-content-between">
							<Link to={`/single/${props.data.url.replace("http://swapi.dev/api/", "")}`}>
								{"Learn More"}
							</Link>
							<button type="button" className="btn btn-outline-warning">
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
Card.propTypes = {
	data: PropTypes.object
};
