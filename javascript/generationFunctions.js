/*
	Project: YouTube 2008 website remake.

	This functions in this file generate randomized data and puts it
	on each of the three pages. Many of these functions are used on
	for all of the three tabs.
	
	Author: Lukas Lapinskas
	Date: 05/12/2019

*/

// shuffles an array (parameter "a" is the array)
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// adds randomized thumbnails to videos
function addVideoThumbnails() {
	var thumbnails = [
    "video_thumbnails/thmb1.jpg",
    "video_thumbnails/thmb2.jpg",
    "video_thumbnails/thmb3.jpg",
    "video_thumbnails/thmb4.jpg",
    "video_thumbnails/thmb5.jpg",
    "video_thumbnails/thmb6.jpg",
    "video_thumbnails/thmb7.jpg",
    "video_thumbnails/thmb8.jpg",
    "video_thumbnails/thmb9.jpg",
    "video_thumbnails/thmb10.jpg",
    "video_thumbnails/thmb11.jpg",
    "video_thumbnails/thmb12.jpg",
    "video_thumbnails/thmb13.jpg",
    "video_thumbnails/thmb14.jpg",
    "video_thumbnails/thmb15.jpg",
    "video_thumbnails/thmb16.jpg",
    "video_thumbnails/thmb17.jpg",
    "video_thumbnails/thmb18.jpg",
    "video_thumbnails/thmb19.jpg",
    "video_thumbnails/thmb20.jpg",
    "video_thumbnails/thmb21.jpg",      
    "video_thumbnails/thmb22.jpg",      
    "video_thumbnails/thmb23.jpg",      
    "video_thumbnails/thmb24.jpg",      
    "video_thumbnails/thmb25.jpg",      
    "video_thumbnails/thmb26.jpg",      
    "video_thumbnails/thmb27.jpg",      
    "video_thumbnails/thmb28.jpg",      
    "video_thumbnails/thmb29.jpg",      
    "video_thumbnails/thmb30.jpg",      
    "video_thumbnails/thmb31.jpg",      
    "video_thumbnails/thmb32.jpg",      
    "video_thumbnails/thmb33.jpg",      
    "video_thumbnails/thmb34.jpg",      
    "video_thumbnails/thmb35.jpg",      
    "video_thumbnails/thmb36.jpg",      
    "video_thumbnails/thmb37.jpg",      
    "video_thumbnails/thmb38.jpg",      
    "video_thumbnails/thmb39.jpg",      
    "video_thumbnails/thmb40.jpg",      
	];
  
  shuffle(thumbnails);
	
	var fVideoThumbs = document.getElementsByClassName("fvideoThumb");
	var topVidThumbs = document.getElementsByClassName("topVidThumb");
	
	var img = 0
	for (var i = 0; i < topVidThumbs.length; i++) {
		topVidThumbs[i].src = thumbnails[img];
		img++;
	}
	for (var i = 0; i < fVideoThumbs.length; i++) {
		fVideoThumbs[i].src = thumbnails[img];
		img++;
	}

}


// generates a random sentence from 2 to highInt words long. highInt is the parameter.
function randomSentence(highInt) {
	
	var iterations = Math.floor(Math.random() * highInt) + 2; // returns a random integer from 2 to highInt
	
	var sentence = "";
	
	for (var i = 0; i < highInt; i++) {
		// array of random words
		var words = ['This', 'is', 'a', 'Random', 'Array', 'of',
				  'Words', "That's", 'Used', 'for', 'Generating', 'Video',
				  'Titles', 'One', 'Two', 'Three', 'House', 'Big',
				  'Small', 'Place', 'Hello', 'I', 'Good', 'Bad',
				  'Truck', 'Funny', 'Dog', 'Cat', 'Weird', 'Company', 'More',
				  'Jules', 'Last', 'First', 'Lunch', 'Have', 'Take', 'Give',
				  'Realistic', 'Impossible', 'Expectations', 'on', 'The'];
		var word = words[Math.floor(Math.random()*words.length)];
		sentence += word + " ";
	}
	sentence = 	sentence.slice(0, -1); //remove last character (a space)

	return sentence;
}

// adds a random description from 2 to 14 words long.
function addDescription() {
	var videoDescriptions = document.getElementsByClassName("videoDescription");
	

	for (var i = 0; i < videoDescriptions.length; i++) {
		videoDescriptions[i].innerHTML = randomSentence(Math.floor(Math.random() * 13) + 2);
	}
}

// adds a random title from 1 to 4 words long
function addTitles() {
	var videoTitles = document.getElementsByClassName("videoTitle");
	
	for (var i = 0; i < videoTitles.length; i++) {
		videoTitles[i].innerHTML = randomSentence(Math.floor(Math.random() * 4) + 1);
	}
}

// adds a random uploader name (1 word)
function addUploaders() {
	var uploaders = document.getElementsByClassName("uploader");
	
	for (var i = 0; i < uploaders.length; i++) {
		uploaders[i].innerHTML = randomSentence(1);
	}
}

// pads a string with n amount of zeros (used for video lengths)
function pad(n, width) {
  z = '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

// generates and extracts a random time (hours and minutes), converts it into 00:00 format, and returns it.
function randomVideoLength(start, end) {
	var newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	var hours = pad(newDate.getHours(), 2);
	var minutes = pad(newDate.getMinutes(), 2);
	var videoLength = hours + ":" + minutes;
	
	return videoLength;
}

// takes a number as a parameter and adds commas to it (example: 5452442242 becomes 5,452,442,242)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// adds a random number of views to a video or channel.
function addViews() {
	var viewElems = document.getElementsByClassName('views');
		
	for (var i = 0; i < viewElems.length; i++) {
		viewElems[i].innerHTML = "Views: " + numberWithCommas(Math.floor(Math.random() * 1000000));
	}
}

// adds a random length to a video.
function addLengths() {
	var lengthElems = document.getElementsByClassName('length');
	
	for (var i = 0; i < lengthElems.length; i++) {
		lengthElems[i].innerHTML = randomVideoLength(new Date(2012, 0, 1), new Date());
	}
}

// adds a random number of stars and a random category to a video.
function addStarsAndCategories() {
	var categories = ['Film', 'Music', 'Comedy', 'Education', 'Gaming', 'Sports'];
	
	var stars = [
/* 5 stars */	'<span class="star1">&#9733;</span><span class="star2">&#9733;</span><span class="star3">&#9733;</span><span class="star4">&#9733;</span><span class="star5">&#9733;</span>',
/* 4 stars */	'<span class="star1">&#9733;</span><span class="star2">&#9733;</span><span class="star3">&#9733;</span><span class="star4">&#9733;</span><span class="star5" style="color:gray">&#9733;</span>',
/* 3 stars */	'<span class="star1">&#9733;</span><span class="star2">&#9733;</span><span class="star3">&#9733;</span><span class="star4">&#9733;</span><span class="star5" style="color:gray">&#9733;</span>',
/* 2 stars */	'<span class="star1">&#9733;</span><span class="star2">&#9733;</span><span class="star3">&#9733;</span><span class="star4" style="color:gray">&#9733;</span><span class="star5" style="color:gray">&#9733;</span>',
/* 1 star  */	'<span class="star1">&#9733;</span><span class="star2" style="color:gray">&#9733;</span><span class="star3" style="color:gray">&#9733;</span><span class="star4" style="color:gray">&#9733;</span><span class="star5" style="color:gray">&#9733;</span>',
				];
	
	var starElems = document.getElementsByClassName("stars");
	var categoryElems = document.getElementsByClassName("categoryType");
	
	for (var i = 0; i < categoryElems.length; i++) {
		categoryElems[i].innerHTML = categories[Math.floor(Math.random() * (categories.length - 1))];
	}
	for (var i = 0; i < starElems.length; i++) {
		starElems[i].innerHTML = stars[Math.floor(Math.random() * 5)];
	}
}
