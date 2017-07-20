// Flatten the movieLists array into an array of video ids
// Using two nested forEach loops to collect 
// the id of every video in the two-dimensional movieLists array.
(function() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "Dramas",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];

	var allVideoIdsInMovieLists = [];

	movieLists.forEach(function(itemsList) { // movieLists items name, videos
		itemsList.videos.forEach(function(item) { // videos items id, title, boxart, uri, rating, bookmark 
			allVideoIdsInMovieLists.push(item.id);
		});
	});	

	return allVideoIdsInMovieLists;

})();

// Output 
// [70111470, 654356453, 65432445, 675465]