// Goals: save images added to tiny pizza server; get images/captions from server and post using append, etc
// validate upon submit that the url is actually a url and that the caption field is not empty
// ADD IMAGE button posts to the array on the server then closes the input form
// Set up an error function that prints something to the website screen and not just a console.log

// Initial variable settings
var inputUrl = $('.inputUrl');
var inputCaption = $('.inputCaption');
var noUrl = $('.urlErr');
var noCaption = $('.captionErr');

// Open/close the input form with the + button
$('.headerButton').click(function(){
    $('.inputForm').slideToggle();
});

// Close the input form and clear the contents of the input boxes
$('.cancel').click(function() {
	$('.inputForm').slideUp();
	$('.inputUrl').val('');
    $('.inputCaption').val('');
    $('.urlErr').val('');
    $('noCaption').val('');
});

// Function that runs on a successful GET request
var dataGet = function(data) {
	var container = $('#get-results');
	data.forEach(function(val, i, arr) {
		var postBox = $('<div class="postBox"></div>');
		var imgBox = $('<div class="imgBox"></div>');
		var img = $('<img>', {src: val.image});
		var captionBox = $('<div class="captionBox"></div>');
		var caption = $('<p class="caption"></p>').html(val.caption);
		imgBox.append(img);
		captionBox.append(caption);
		postBox.append(imgBox);
		postBox.append(captionBox);
		container.append(postBox);
	});
}

// GET request setup
var getResults = {
	url: 'http://small-tiyfe.herokuapp.com/collections/danstagram',
	type: 'get',
	dataType: 'json',
	success: dataGet,
	error: function(err) {
		console.log('Error! Error!');
	}
};

// This runs the GET request
$.ajax(getResults);

// movies.forEach(function(movie) {
// 	$.ajax({
//     url : 'http://small-tiyfe.herokuapp.com/collections/dan_movies',
//     type: "POST",
//     data: movie,
//     dataType: 'html',
//     success: function(data) {
//     	console.log('Success!');
//     },
//     error: function () {
//  		console.log('Error!');
//     },
//     complete: function() {
//     	console.log('Finished Running.');
//     }
// });
// });

// This is what happens when someone tries to submit something on the input form
$('form').submit(function(e) {
	e.preventDefault();
	var entry;
	if (inputUrl.val().toLowerCase().startsWith('http://') || inputUrl.val().toLowerCase().startsWith('https://')) {
		if (inputCaption.val() === '') {
			// This is what happens on a failed caption validation
			noCaption.html('Please enter a caption to proceed.');
			console.log('validation of caption failed');
			return;
		} else {
			// This is where everything runs on a successful validation
			console.log('validation successful');
		}		
	} else {
		// This is what happens on a failed URL validation
		noUrl.html('Please enter a valid URL.');
		console.log('validation of URL failed');
		return;
	}
});

// if ((pic.val().indexOf('http://') === -1) && (pic.val().indexOf('https://') === -1)) {
//         noUrl.html('URL must begin with "http://" or "https://"');
//         return;
//     } else if ((pic.val().indexOf('jpg') === -1) && (pic.val().indexOf('png') === -1) && (pic.val().indexOf('gif') === -1)) {
//         noUrl.html('URL must end with ".png", ".jpg", or ".gif"');
//         return;
//     } else {
//         noUrl.html('');
//     }
//     if (caption.val() === '') {
//         noCap.html('You must enter a caption.');
//         return;
//     } else {
//         noCap.html('');
//     }
//     entry = {
//         image: pic.val(),
//         description: caption.val()
//     }
//     $('#imgUrl').val('');
//     $('#imgCaption').val('');
//     console.log(entry);
//     //post settings
//     $.ajax({
//     	url: collectionUrl,
//     	type: 'post',
//         data: entry,
//     	dataType: 'json',
//     	success: onPostSuccess,
//     	error: onPostError,
//         complete: onPostComplete
//     });
//     $('form').slideUp();
//     //Clear out old array~~~~~~~~~~~~~~~
//     $('#container').html('');
//     //Display new array~~~~~~~~~~~~~~~~~
//     $.ajax(getSettings);
// });
















// 	var inputUrl = $('.inputUrl');
// 	var inputCaption = $('.inputCaption');
// 	if (val.inputUrl.startsWith('http://') === true || val.inputUrl.startsWith('https://').toLowerCase() === true) {
// 		if (inputCaption !== '') {
// 			$.ajax(postResults);
// 			$.ajax(getResults);
// 		} else {
// 			// here's where the error needs to go for failing the caption validation
// 			console.log('Caption Validation Failed');
// 		}
// 	} else {
// 		// here's where the error needs to go for failing the url validation
// 		console.log('URL Validation Failed');
// 	}
// });







	// this is the function that runs on success of the ajax request
	// var dataPost = function(data) {
	// var newData = data.append({inputUrl, inputCaption});
	// }

	// // this is the var for the ajax request
	// var postResults = {
	// url: 'http://small-tiyfe.herokuapp.com/collections/danstagram',
	// type: 'post',
	// data: newData,
	// dataType: 'html',
	// success: dataPost,
	// error: function(err) {
	// 	console.log('Error! Error!');
	// 	}	
	// };
	
	// if the url validates the http:// check then check the caption
	// if url doesn't validate give error message
	// if the caption validates after the url validates run POST
	// if the caption doesn't validate make an error message
	

//close the drop down menu if validate successful
//on success after a failed initial validation, make sure to remove any error messages for when inputForm appears again



