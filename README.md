# moviesearch
A simple, no thrills movie search web app

A very minimal web app that uses HTML and JavaScript to meet the below requirements.  

To run the app, open the MovieView.html file (I recommend using Google Chrome's browser as that's what I've tested with).
Try searching for a movie title :)


Summary:
The OMDB API (http://www.omdbapi.com/) provides restful services to query movies based on title, year and several other parameters. Create a web app that provides users ability to search movies based on title and year of release. Your app should meet the following requirements:
There should be a way for users to enter full or partial movie name.
There should be a way for users to select the year of release.
The results should be displayed in tabular format.

Technical Requirements:
You are free to use any programming language, libraries and platform as long as the app runs in a browser.
The user interface code should NOT directly call OMDB API. It should talk to a business logic layer that you write (again, any programming language. Functional programming language fetches you bonus points.) that in-turn fetches the result from OMDB API and sends the results according to the user interface needs.
Your code must be checked in to github (http://github.com).
Finally, the api restricts it to 10 results. So do not worry about getting all results.
