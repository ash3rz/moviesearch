$(document).ready(function(){

	var checkMovie = function(){
		
		// Clear out my section if the query was run before
		$('#movieresults').empty();
		
		// Check for a title, cannot search without title
		var titleInputVal = $('#titleInput').val();
		if (titleInputVal == ''){
			$('#movieresults').append("<h3>Looks like you forgot to enter a movie title!</h3>");
			return false;
		}
	
		// Check for a valid year.  Will kindly trim out accidental spaces before or after the year
		var yearInputVal = $('#yearInput').val();
		if (yearInputVal != ''){
			yearInputVal = yearInputVal.trim();
			var match = yearInputVal.search(/^\d\d\d\d$/);
			if (match < 0){
				$('#movieresults').append("<h3>Did you enter a valid year? e.g. 1998, 2003, etc.</h3>");
				return false;
			}
		}
		
		//if I've gotten to this point, I have a movie title and possibly a year (not required)
		$.getJSON('http://www.omdbapi.com/?s=' + titleInputVal + '&y=' + yearInputVal + '&type=movie&r=json', function(data){

			if (data.hasOwnProperty('Search')){
				var i = 0;
				// Setup the table
				var outputString = "<style>table, th, td { border : 1px dotted black;}</style>";
				outputString += "<table><tr><th>Movie Title</th><th>Year</th></tr>";

				//Pull out Search's array of objs
				// Sort them by Year for a nicer output
				var searchArr = data.Search;
				searchArr.sort(function(a,b){
					return parseInt(b.Year) - parseInt(a.Year);
				});

				// Add my sorted items to the table
				$.each (searchArr, function(j, result){
					outputString += "<tr><td>" + result.Title + "</td><td>" + result.Year + "</td></tr>";
				});

				outputString += "</table>";
				$('#movieresults').append(outputString); //outputString;
			}
			else if (data.hasOwnProperty('Error')){
				$('#movieresults').append("Sorry no movie titles matched your search.");
			}
			else{
				$('#movieresults').append("This is embarrassing... something strange has occurred. Please try again.");
			}
		});
		
	}
	//Handle interface events
	
	//Button click
	$('#moviesearch').click(checkMovie);
	
	//Return was hit inside either of the text boxes
	$('#titleInput').keyup(function(event){
		if (event.keyCode == 13){
			checkMovie();
		}
	});
	$('#yearInput').keyup(function(event){
		if (event.keyCode == 13){
			checkMovie();
		}
	});
});