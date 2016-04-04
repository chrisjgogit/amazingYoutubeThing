// Still need to do this in all components that have JSX
import React, { Component } from 'react'; //The { Component } is for the 'extends' in the SearchBar. it is the equlivant to ' const Component = React.Component '


// Generates an HTML input that a user can type text into
// This is called a 'Functional Component'
// const funct SearchBar = () => { 
// 	return <input />; // Remember that this formatting is ES6/JSX. Equlivant to 'return <input></input>'

// }

// A 'Class Based Component' is used whenever we want a component to have internal record keeping, or, what's happend to it (the component)
// since it's been rendered.
// class SearchBar extends React.Component { // Define a new class, 'SearchBar' and give it all the functionality that 'React.Component' class has. See line 2
// 	//All JS classes have a special function, constructor(). Its the first, and only function called AUTOMATICLLY whenever a new instance of the class is created
// 	// It's reserved for doing setup, like initalizing variables; state.
// 	contructor(props) {
// 		 // super(props); // Maybe it's updated?
// 		// Super is just like hard Java. Remember what it does. Calling the parent method with super()
		
// 		// Creates a new object on initialzation and assigning it to 'this.state' with the properties we want to 'record' on the state ('term:' )
// 		this.state({ 
// 			term: 'term' 
// 		}) 
// 	}
// 	
// 	render() {
// 	return (
// 		<div>
// 			<input onChange={ event => this.setState({ term: event.target.value }) } />
// 			Value of the Input: {this.state.term}
// 		</div>
// 	);
// 	}	
// } //Close SearchBar
class SearchBar extends Component {
    constructor(props) {
        super(props);
		// Creates a new object on initialzation and assigning it to 'this.state' with the properties we want to 'record' on the state ('term:' )
        this.state = {
            term: 'Starting Value'
        }
        // On init, This is the only point we will see this kind of code to MANIPULATE state.
		// Example: this.state.term = event.target.value | is BAD. Won't happen. Always manipulate State with 'this.setState({})' see line 26
    }
    // Class based components MUST have a defined render function. MUST return JSX. Will error.
    render() {
        return (
            <div className="search-bar">
            	<input 
            	value={this.state.term} // When we define value like, this, we now make the input a 'controlled component'. It's value
            	// is set by state. The value only changes when the state changes.
            	// onChange={ event => this.setState({ term: event.target.value }) } />
            	// ^New implementation. See onInputChange (below)
            	onChange={ event => this.onInputChange(event.target.value)} />

            	
            </div>
        );
    }

    onInputChange(term){
    	this.setState({term});
    	this.props.onSearchTermChange(term);

    }
}

/*
* Controlled Field or Input or Form Element: The State is Controlled by the Input
*/

// Value of the Input: {this.state.term}

// render() {
// 		return (
// 			<div>
// 				<input onChange={ (event) => this.setState( { term: event.target.value } ) } />; // Updating state. passes an object with the updated state
// 				Value of the input: {this.state.term} // Remember: when refrencing a JS variable inside JSX, use {}. It's ok to use 'this.state.term' as a REFRENCE, not an assignment
// 			</div>
// 		);//Remember to ; these!
// 	} // Close render() 
//#16 video => arrow fucntions in REACT
// return <input onChange={ (event) => console.log(event.target.value)  } />; // The input HTML element emits a 'change' event. ?Research? onChange is a REACT defined property.REACT docs

	// Event Handler: Whenever the input changes, run this
	// onInputChange(event) {
	// 	console.log(event.target.value); // MDN plz
	// }
/*
*
******* State
*/

// State: A plain JS object that is used to record and react (HA!) to user events.
// Each Class based component that we define has it's own State object. Functional Components do not have State
// Whenever the component's state is changed, it immediately re-renders.
// It also forces all its children to re-render.
// Before State is used inside a component, it needs to be initialized inside the component ( line 17 )

/*
*
******* Event handling
*/

// Handeling Events in React
// 1) Event Handeler: function that runs whenever the event occurs 
// 2) Passing Event Handeler to the element that we want to monitor for events

// const foo = () => {
	
// }

// We only want to export 'SearchBar()' from the file. Any file that imports 'SearchBar' will only get
// 'SearchBar' component and not the 'foo' component
// Rendering is the same for Functional and Class components
export default SearchBar;

