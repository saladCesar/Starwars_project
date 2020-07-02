import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ItemHolder } from "../component/itemHolder";
import { Single } from "./single";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<ItemHolder title={"Characters"} cardsData={store.people} />
			<ItemHolder title={"Planet's"} cardsData={store.planets} />
			<ItemHolder title={"Vehicle's"} cardsData={store.vehicles} />
		</div>
	);
};
