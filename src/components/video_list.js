// Always need to import
import React from 'react';
import VideoListItem from './video_list_item';
//Fat Arrow function!
// props arrives as an arguement, IN A FUNCTIONAL COMPONENT, and is being populated by the prop being passed to it from 'VideoList' in index.js
const VideoList = ( props ) => { //Remember, this Evals to const VideoList = fucntion()
	// Not HTML, JSX
		// Class names are Bootstrap. See index.html
		// use 'className' as class declaration instead of 'class'. avoids Naming Conflicts when we use an actual class names for apps or components
		// Bootstrap class names. I dunno. Look it up.
		// map() is a property of an array
		// if you pass map() a function, it will apply to each element in the array



	// Start putting the list of videos together
	// for each element of videos, video
	// Comback to this L2S24
	// etag is the Console > Network > 'search?' > Preview > etag
	// etag provides a key for each element in our list
	//props now has another property beign passed to it from 'App'. 'onVideoSelect'
	const videoItems = props.videos.map((video) => {
		return ( 
				<VideoListItem 
					onVideoSelect={props.onVideoSelect}
					key={video.etag} 
					video={video} />
			);
	});
	return(	
		<ul className="col-md-4 list-group"> 
			{videoItems}
		</ul>
	);
};
// Always need to have access to the function!
export default VideoList;