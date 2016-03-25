// Goals: save images added to tiny pizza server; get images/captions from server and post using append, etc
// validate upon submit that the url is actually a url and that the caption field is not empty
// make input form menu slide up/down on click
// cancel button closes form as well
// ADD IMAGE button posts to the array on the server then closes the input form
// Set up an error function that prints something to the website screen and not just a console.log

// This is my function that runs upon GET success and creates all the contents of the photos & captions
var dataGet = function(data) {
	var container = $('#get-results');
	data.forEach(function(val, i, arr) {
		var postBox = $('<div class="postBox"></div>');
		var imgBox = $('<div class="imgBox"></div>');
		var img = $('<img>', {src: val.image});
		var captionBox = $('<div class="captionBox"></div>');
		var caption = $('<p></p>').html(val.caption);

		imgBox.append(img);
		captionBox.append(caption);
		postBox.append(imgBox);
		postBox.append(captionBox);
		container.append(postBox);
	});
}

// This is the GET ajax request which will pull all my saved photo/caption data from the server
var getResults = {
	url: 'http://small-tiyfe.herokuapp.com/collections/danstagram',
	type: 'get',
	dataType: 'json',
	success: dataGet,
	error: function(err) {
		console.log('Error! Error!')
	}
};
// This is the POST ajax request which will add a new photo/caption 
// var postResults = {
// 	url: 'http://small-tiyfe.herokuapp.com/collections/danstagram',
// 	type: 'post',
// 	dataType: 'json',
// 	success: dataPost,
// 	error: console.log('Error! Error!')
// };

// This is the actual running of the GET request
// This should happen after each post is complete to refresh the page, as well as when the page is initially loaded
$.ajax(getResults);


// This is the actual running of the POST request
// This should happen once submit button is clicked and the validation for URL & caption is passed as true
// $.ajax.(postResults);