import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<h1 className="name">Crypto Checker</h1>
				<button className="searchButton" onClick={this.props.result}>Go</button>
				<input id="searchBar" className="SearchBar" type="text" />
			</div>
		)
	}
}

export default SearchBar;