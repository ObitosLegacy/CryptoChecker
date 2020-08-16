import React from 'react';
import './BrowseButton.css';

class BrowseButton extends React.Component {
	render() {
		return <button id={this.props.id} className="browseButton" onClick={this.props.browseCrypto} >{this.props.id}</button>
	}
}

export default BrowseButton;