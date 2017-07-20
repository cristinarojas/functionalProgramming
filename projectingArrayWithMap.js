// To make projections easier, let's add a map() function to the Array type.
// Map accepts the projection function to be applied to each item in the source array, 
// and returns the projected array.

// .forEach() -> for each value V of array A do X
// .map() -> map (transform) each value V of array A to X

(function() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	];

	return newReleases.map(function(item) {
		return {
			id: item.id,
			title: item.title
		}
	});
})();

//  .map() returns a new Array of objects created by taking some action on the original item.

// Output 
/* {
		id: 70111470,
		title: Die Hard
	},
	{
		id: 654356453,
		title: Bad Boys
	},
	{
		id: 65432445,
		title: The Chamber
	},
	{
		id: 675465,
		title: Fracture
	}*/

