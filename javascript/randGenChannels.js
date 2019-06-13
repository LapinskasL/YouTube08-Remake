/*
	Project: YouTube 2008 website remake.

	The functions here are specifically catered to generate random
	data for the channel information in the "Channels" tab.
	
	Author: Lukas Lapinskas
	Date: 05/12/2019

*/

window.onload = function() {
	
	createChannels();

	addUploaders();
	addViews();
	addChannelImages();
	addVidNumbers();
	addType();
	addVidViews();
};

// randomly assigns images to each channel
function addChannelImages() {
	var images = [
    "channel_thumbnails/ch1.jpg",
    "channel_thumbnails/ch2.jpg",
	"channel_thumbnails/ch3.jpg",
	"channel_thumbnails/ch4.jpg",
	"channel_thumbnails/ch5.jpg",
	"channel_thumbnails/ch6.jpg",
	"channel_thumbnails/ch7.jpg",
	"channel_thumbnails/ch8.jpg",
	"channel_thumbnails/ch9.jpg",
	"channel_thumbnails/ch10.jpg",
	"channel_thumbnails/ch11.jpg",
	"channel_thumbnails/ch12.jpg",
	"channel_thumbnails/ch13.jpg",
	"channel_thumbnails/ch14.jpg",
	"channel_thumbnails/ch15.jpg",
	"channel_thumbnails/ch16.jpg",
	"channel_thumbnails/ch17.jpg",
	"channel_thumbnails/ch18.jpg",
	"channel_thumbnails/ch19.jpg",
	"channel_thumbnails/ch20.jpg",
	"channel_thumbnails/ch22.jpg",
    "channel_thumbnails/ch23.jpg",
    "channel_thumbnails/ch24.jpg",
    "channel_thumbnails/ch25.jpg",
    "channel_thumbnails/ch26.jpg",
    "channel_thumbnails/ch27.jpg",
    "channel_thumbnails/ch28.jpg",
    "channel_thumbnails/ch29.jpg",
    "channel_thumbnails/ch30.jpg",
    "channel_thumbnails/ch31.jpg",
    "channel_thumbnails/ch32.jpg",
    "channel_thumbnails/ch33.jpg",
    "channel_thumbnails/ch34.jpg",
    "channel_thumbnails/ch35.jpg",
    "channel_thumbnails/ch36.jpg",
    "channel_thumbnails/ch37.jpg",
    "channel_thumbnails/ch38.jpg",
    "channel_thumbnails/ch39.jpg",
    "channel_thumbnails/ch40.jpg",
  ];
  
  shuffle(images);
	
	var chImages = document.getElementsByClassName("channelImg");
	
	var img = 0
	for (var i = 0; i < chImages.length; i++) {
		chImages[i].src = images[img];
		img++;
	}
}

// assigns a random number of videos 
function addVidNumbers() {
	var vidNumberElems = document.getElementsByClassName("vidNumber")
	
	for (var i = 0; i < vidNumberElems.length; i++) {
		vidNumberElems[i].innerHTML = "<span>Videos: </span>" + Math.floor(Math.random() * 1000);
	}
}

// assigns a random number to video views
function addVidViews() {
	var viewElems = document.getElementsByClassName('views');
		
	for (var i = 0; i < viewElems.length; i++) {
		viewElems[i].innerHTML = "<span>Views: </span >" + numberWithCommas(Math.floor(Math.random() * 1000000));
	}
}

// assigns a random channel type
function addType() {
	channelTypes = ['Comedian', 'Director', 'Guru', 'Musician', 'Non-Profit', 'Partner', 'Sponsor'];
	chTypes = document.getElementsByClassName("type");
	for(var i = 0; i < chTypes.length ;i++) {
		chTypes[i].innerHTML = "<span>Type: </span>" + channelTypes[Math.floor(Math.random() * (channelTypes.length - 1))];
	}
}