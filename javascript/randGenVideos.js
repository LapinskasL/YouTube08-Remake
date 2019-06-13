/*
	Project: YouTube 2008 website remake.

	The function addVidViews is specifically catered to generate and add
	the view count for videos on the "Videos" tab.
	
	Author: Lukas Lapinskas
	Date: 05/12/2019

*/

// calls the functions necessary to generate random data for videos
window.onload = function() {
	createVideosVideos();
	
	addVideoThumbnails();
	addUploaders();
	addTitles();
	addDescription();
	addStarsAndCategories();
	addLengths();
	addVidViews();
};

// generates random number of views for each video
function addVidViews() {
	var viewElems = document.getElementsByClassName('views');
		
	for (var i = 0; i < viewElems.length; i++) {
		viewElems[i].innerHTML = "<font color='#606060'>Views: </font>" + numberWithCommas(Math.floor(Math.random() * 1000000));
	}
}

