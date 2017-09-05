let songName = document.getElementById("now")

function submit(){
	var input = document.getElementById("search").value
	fetch(
		"https://itunes.apple.com/search?term=" + `${input}`
	)
	.then(function(response) {
		if (response.status !== 200) {
			console.log(response.status);
			return;
		}
		response.json().then(function(data) {
			console.log("test", response.url);
			console.log(data)
			displayData(data)
		});
	})
	.catch(function(err) {
		console.log("Fetch Error :-S", err);
	});

	function displayData(data){
		let htmlStr = ""
		data.results.map(function(item){
			htmlStr += `
			<div id="xcom" >
				<img data-previewUrl=${item.previewUrl} src='${item.artworkUrl100}'/>
			<h6 id="song"> ${item.trackName} </h6>
			<h6 id="Artist"> ${item.artistName} </h6>
			</div>

			`

			document.getElementById("results").innerHTML +=htmlStr;
		})
	}


}


var resultsEli = document.getElementById("results")

resultsEli.addEventListener("click", function(event){
	queen.setAttribute("src", event.target.dataset.previewurl)

	console.log("you clicked", event)
	console.log("data url", event.target.dataset.previewurl)

})

var queen = document.getElementById("music-player")


/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play