import React, {Component} from 'react';
import CardList from '../containers/CardList.js';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';



class  App extends Component {
	constructor() {
		super()
		this.state = {
			cats: [],
			searchfield: ''
		}
	}
	
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	componentDidMount(){
		console.log(this.props.store)
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({cats: users})
		)
	}

	render() {
		const filteredCats = this.state.cats.filter( cats =>{
		return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		}
		)

		if (this.state.cats.length === 0) {
			return <h1>Loading...</h1>
		} else {
		return (
				<div className='tc' >
					<h1 className='styles coloring '>Cat Friends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList cats= {filteredCats} />
					</Scroll>
				</div>
			);
		}
	}


}

export default App;