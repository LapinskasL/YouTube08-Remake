/*
	Project: YouTube 2008 website remake.

	The functions here create blocks of html code into which randomly
	generated data is inserted.
	
	Author: Lukas Lapinskas
	Date: 05/12/2019

*/

// Creates a channel block for the "Channels" tab
function createChannels() {
	
   for (var i = 1; i < 21; i++) {
	   var channel = [
           '<div class="channel">',
			   '<a href="#" class="uploader"></a>',
			   '<div class="chImage">',
					'<img class="channelImg" src="">',
			   '</div>',
			   '<div class="chData type"><span>Type: </span></div>',
			   '<div class="chData vidNumber"><span>Videos: </span></div>',
			   '<div class="chData views"><span>Views: </span></div>',
		   '</div>'
          ].join('\n');
		  
		document.getElementById('channelBlock').innerHTML += channel;
   }
}

// creates a video block for the "Home" tab
function createHomeVideos() {
	for (var i = 1; i < 13; i++) {
		var video = [
				'<div class="featuredVid">',
				'<a href="#"><img class="fvideoThumb" src=""></a>',
				'<img class="quickListAddGreen featVid' + i,
				'" src="misc_images/quick_list_button_green.png">',
				'<a href="#.html" class="quickListAddGray featVid' + i,
				'" onclick="addQuickList(',
				"'featVid" + i + "'",
				')"><img src="misc_images/quick_list_button_gray.png"></a>',
				'<div class="inQuickList featVid' + i,
				'"><a href="#">in QuickList</a></div>',
				'<div class="featuredVidDescr">',
					'<h3><a class="videoTitle" href="#"></a></h3>',
					'<p class="videoDescription">',
					'</p>',
				'</div>',
				'<div class="featuredVidMisc featVid' + i,
				'">',
					'<div class="from">From: <a class = "uploader" href="#"></a></div>',
					'<div class="views"></div>',
					
					'<div class="stars" style="">',
					'</div>',
					
					'<div class="length"></div>',
					'<div class="category">More in: <a class="categoryType" href="#"></a></div>',
				'</div>',
			'</div>',
			'<div class="clearLeft"></div>'
				  ].join('\n');
			  
		document.getElementById('featuredVidList').innerHTML += video;
	}
		
		document.getElementById('featuredVidList').innerHTML += '<a href="#" id="moreFeatured" onclick="genMore()">See More Featured Videos</a>'
}

// Creates a video block for the "Video" tab
function createVideosVideos() {	
	for (var i = 1; i < 21; i++) {
	   var aVideo = [
        '<div class="video">',
			'<a href="#"><img class="videoThumb topVidThumb" src=""></a>',
			'<img class="quickListAddGreen vid' + i,
			'" src="misc_images/quick_list_button_green.png">',
			'<a href="#.html" class="quickListAddGray vid' + i,
			'" onclick="addQuickList' + "('vid" + i + "'" + ')"' + '"><img src="misc_images/quick_list_button_gray.png"></a>',
			'<div class="inQuickList vid' + i + '"><a href="#">in QuickList</a></div>',
			'<div class="vidTitle vid' + i + '">',
				'<h3><a href="#" class="videoTitle"></a></h3>',
			'</div>',
			'<div class="vidMisc">',
				'<div class="from"><font color="#606060">From: </font><a class = "uploader" href="#">Username1</a></div>',
				'<div class="views"><font color="#606060">Views: </font>42,381</div>',
				'<div class="length">01:43</div>',
				'<div class="stars">',
				'</div>',
				'<div class="clearLeft"></div>',
			'</div>',
		'</div>',
          ].join('\n');
		  
		document.getElementsByClassName('videoListBlock')[0].innerHTML += aVideo;
   }
   
   document.getElementsByClassName('videoListBlock')[0].innerHTML += '<div class="clearLeft"></div>'
}
