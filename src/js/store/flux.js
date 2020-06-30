const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			single: {},
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPerson: index => {
				console.log("Hello Darth Vader");
				fetch(`https://swapi.dev/api/people/${index}/`)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							single: resjson
						});
					});
			},
			getPeople: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							people: resjson.results
						});
					});
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							planets: resjson.results
						});
					});
			},
			getVehicles: () => {
				fetch("https://swapi.dev/api/starships/", {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(resjson => {
						setStore({
							starships: resjson.results
						});
					});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
