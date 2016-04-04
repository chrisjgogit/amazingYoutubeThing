// REACT is a JS Libary that is used to produce HTML that is shown to a user in a web browser
// We write 'components' or 'views'. Terms are interchangible. They are a collection of JS functions.
// 'Components' or 'views' are snippets of code that ultimately produce HTML
// We write mulitple differnt components and nest these components inside one another to make an complex apps, simple

// Go find the installed depandancy libary ( 'react' in node_modules) and assign it to 'React'. Transpiler reads this.
import React, { Component } from 'react'; // Core React. Knows how to render components. DOESN'T KNOW HOW TO RENDER/INSERT THEM TO THE DOM. This is a SEPRATE LIBARY
import ReactDOM from 'react-dom'; // To actually render a component to the DOM. See lines 21-23.

// YouTube import
import YTSearch from 'youtube-api-search';

// Component imports
// Whenever we import developer created code, not npm packages, we have to have an actual file refrence. Write the realitive path. Doesn't need extention.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// youtube API key. use 'const' on variables that don't change
const YOUTUBE_API_KEY = 'AIzaSyCnewus1_hJUnw_qc7tf2PudY2LeRUXqVk';
//***Downwards data flow: the most parent componet for an application should be responcible for fetching data
//*** So, index.js is the most parent

//Example Object with the API key, search term, a callback function for response data
YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards'}, function(data){
	console.log(data);

} );


// Writing this in ES6
// Create new component. Produces HTML.
// Rule: Always write one component per file. This isolates code.

	// const App = () => { // Const is ES6/2016 syntax. Similar to declaring a variable with 'var App'. Never gonna change. Can't reassign
	// 	// When we create a component, we're creating a CLASS of a component, not an instance. 'App' is a class.
	// 	// ES6 syntax: 'const App = () =>' is equlivant to 'const App = function()' FAT ARROW! =>. Identical to using the function() keyword
 // 		return (
 // 		<div> 
 // 			<SearchBar />
 // 		</div> // This is actually just JSX (wut JSX?), a subset of JS. Webpack and Babel transpile this as JSX can't be interpeted by the browser
	// 						// JSX produces the actual HTML when we RENDER the component on the DOM. Use JSX to make things legible/clean to see what's going on for large components
	// 	); //Use parenthisis for multiline. Dont have to, but should. If you dont, make sure 'div ' is on the same line with return
	// 		//dont ; inside if using parenthsis
	// }

// Re-writing the above App as a Class based component	

class App extends Component { // Start new App
	// Setup constructor (always gets called with props)
	constructor(props) {
		super(props);

		//Default State an array of 'videos' is empty
		// selectedVideo to enable clicking on videos
		this.state = { 
			videos: [],
			selectedVideo: null
		 };
		this.videoSearch('cats');		
	} // End

	videoSearch(term) {
		//API call/Search in the constructor. This will immediately kick-off a search of 'surfboards'
		YTSearch({ key: YOUTUBE_API_KEY, term: term}, (videos) => { //fat arrow instead of 'function(data)'' here
			// Instead of a console.log, we can update our State
			//console.log(data);
			
			// Instead of having the same Key/Value, use ES6 to condense. Only works when Key/Value are the same name
			this.setState( { 
				videos: videos, 
				selectedVideo: videos[0]
			} ); //Resolves as this.setState( { videos: videos }). 
			// videos: [] now is updated with some videos in it
		} );
	}

	render() { // Render call for all our components! Sort of like a get_template_part()
		// Passing a value from a parent component to a child component. from 'App' to 'VideoList'
		// This is called 'passing props' in React. The 'prop' is videos
		// Anytime that 'App' is re-rendered, VideoList will get the new videos as well
		// Remember, {} is a JS variable
		// For VideoDetail, we need a video to pass to it, which would be video={this.state.videos[0]}
		// Callback for searchbar! onSearchbarChange
		return (
			 	<div>
			 		<SearchBar onSearchTermChange={term => this.videoSearch(term) }/>
			 		<VideoDetail video={this.state.selectedVideo} />			 		
			 		<VideoList
			 			onVideoSelect={selectedVideo => this.setState( { selectedVideo } ) } 
			 			videos={this.state.videos} />
			 	</div>
		);
	}
}

// Error examples
// React.render(App); // Error example w/out an import. Gives a 'React not defined error in the console'. caused because 'React' is siloed. Can't see anythign defined anywhere else because we dont have access to it.
// We have to explicitly say we want access to 'React' which is what line 7 does

// React.render(App); // Error example with an import. Gives 'Warning: React.render is deprecated. Please use ReactDOM.render from require('react-dom') instead.'
// and Uncaught Invariant Violation: ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
// This is due to React DOM being the seprate libary needed to actually render TO the DOM. See line 7&8

//We now use this to write/touch to the DOM, and not React.render(App). We use ReactDOM whenever we want to touch the DOM
// ReactDOM.render(App); BUT it will still throw this error:
//Uncaught Invariant Violation: ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
// This is due to trying to pass a CLASS of 'App', instead of a COMPONENT of 'App'. We should instantiate an element before writing it.

// React. is used to create and manage components. 
// ReactDOM. is used to write to the DOM.

// Protip: valid JSX tag closure is <App /> equlivant to <App></App> . Creates an INSTANCE of the component we want.

// Take the component's generated HTML and put it in the DOM of the page.
// ReactDOM.render(<App />); //This creates the instance of 'App' and passes it.
// but it still doesnt work!
// throws bundle.js:1138 Uncaught Invariant Violation: _registerComponent(...): Target container is not a DOM element.
// This is because we're telling react to MAKE the component, but not where to PUT it on the page/DOM

//Take the component's generated HTML and put it in the DOM of the page.
ReactDOM.render(<App />, document.querySelector( '.container' ) ); // 2nd argument in ReactDOM.render() is a refrence to an -existing- DOM node on the page. Find one in index.html. We're using 'container'
// document.querySelector() goes and finds the class arguement you define. In this case, it's .container. Dont forget the '.'

// Reminder: a React application is made of up many differnt 'components'
// Video app: 4 components and 1 containing component for a total of 5 components










