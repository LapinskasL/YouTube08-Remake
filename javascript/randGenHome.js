/*
	Project: YouTube 2008 website remake.

	This file, upon loading "home.html", runs functions needed to generate 
	the random data for videos in the "Home" tab. 
	
	Author: Lukas Lapinskas
	Date: 05/12/2019

*/

// calls all the functions necessary to generate random data for videos
window.onload = function() {
	
	createHomeVideos();
	
	addVideoThumbnails();
	addUploaders();
	addTitles();
	addDescription();
	addStarsAndCategories();
	addLengths();
	addViews();
};