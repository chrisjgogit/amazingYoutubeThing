// Always need to import the React libary
import React from 'react';

// define functional component
// We love our ES6 props object! it's were we get all our data from! But we pull it from {video}!
const VideoDetail = ( {video} ) => {

	// Check to make sure a video is provided before render
	if ( !video ) {
		return <div>Loading...</div>;
	}

	// YouTube embed URL. FYI the only thing that changes in the url is the video ID
	const videoId = video.id.videoId;
	// ES6 Sexyness. Equalvant to const url = "https://www.youtube.com/embed/" + videoId; S2L27. Ignore that it looks like comments
	const url = `https://www.youtube.com/embed/${videoId}`;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responcive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

// Always need an export statement
export default VideoDetail;