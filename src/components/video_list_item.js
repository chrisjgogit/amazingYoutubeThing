/*
*
* Shows a single video item
*
*/

import React from 'react';
// ES6
// using {video, onVideoSelect }, our callback, is the equalivant of 'const video=props.video const onVideoSelect = props.onVideoSelect'
const VideoListItem = ( {video, onVideoSelect} ) => { // the ({video}) is completely equlivant to const video = props.video;. ES6 syntax
	//Pulls off the video from the props object that gets passed in from VideoList > VideoItems...maybe S2L26
	// const video = props.video;
	// console.log(video);

	//Pulling the properties we need from the video object
	const imageUrl = video.snippet.thumbnails.default.url; // image from YouTube request

	// Using bootstrap classes. Look at the docs. className, not class
	// Whenever a user clicks on an li (onClick), pass it that particular video's li video 
	// CALLBACKS! KEEP READING ABOUT THESE
	return (
		<li onClick={ () => onVideoSelect(video) } className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;