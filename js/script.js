var pokemon = angular.module("pokemon",[])

pokemon.controller("pokedex", function($scope,$rootScope,$http) {
	$http ({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/24"
	}).then(function success(pokebola){
		console.log(pokebola);
	})
})