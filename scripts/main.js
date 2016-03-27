// Goals: save images added to tiny pizza server; get images/captions from server and post using append, etc
// validate upon submit that the url is actually a url and that the caption field is not empty
// ADD IMAGE button posts to the array on the server then closes the input form
// Set up an error function that prints something to the website screen and not just a console.log

// Initial variable settings
var collectionUrl = 'http://small-tiyfe.herokuapp.com/collections/danstagram/';
var inputUrl = $('.inputUrl');
var inputCaption = $('.inputCaption');
var noUrl = $('.urlErr');
var noCaption = $('.captionErr');

// Change text color to black once start typing in an input box
$('.inputUrl').keydown(function() {
	$('.inputUrl').css('color', '#000');
});

$('.inputCaption').keydown(function() {
	$('.inputCaption').css('color', '#000');
});

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
	url: collectionUrl,
	type: 'get',
	dataType: 'json',
	success: dataGet,
	error: function(err) {
		console.log('Error! Error!');
	}
};

// This runs the GET request
$.ajax(getResults);

// This is what happens when someone tries to submit something on the input form
$('form').submit(function(e) {
	e.preventDefault();
	var entry;
	if (inputUrl.val().toLowerCase().startsWith('http://') || inputUrl.val().toLowerCase().startsWith('https://')) {
		noUrl.html('');
		if (inputCaption.val() === '') {
			noCaption.html('Please enter a caption to proceed.');
			return;
		} else {
			entry = {
				image: inputUrl.val,
				caption: inputCaption.val
			};
    		$.ajax({
    			url: collectionUrl,
    			type: 'post',
    			data: entry,
    			dataType: 'json'
    		});
    		$('.inputForm').slideUp();
			$('.inputUrl').val('');
    		$('.inputCaption').val('');
    		$('.urlErr').val('');
    		$('.captionErr').val('');
    		$('#get-results').html('');
    		$.ajax(getResults);
		}		
	} else {
		noUrl.html('Please enter a valid URL.');
		return;
	}
});