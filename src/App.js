import React from 'react';
import './App.css';
import CryptoList from './CryptoList/CryptoList.js';

const url = "https://api.nomics.com/v1/currencies/ticker?key=";
const api = "12b1d54f4d9972e15eae47c62d76be7c";

let crypto = null;

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight,
			currencies: [],
			current: 0,
		};
		this.handleGetCrypto();
	}
	
	handleBrowseCrypto(e) {
		if(e.target.id === 'Back'&& this.state.current > 0) {
			this.setState({
				current: this.state.current-10
			});
		} else if(e.target.id === "Next" && this.state.current < this.state.currencies.length){
			this.setState({
				current: this.state.current+10
			});	
		}
	}
	
	showResults(){
		const searchInput = document.getElementById("searchBar").value;
		const fetch = [];
		crypto.forEach(data => {
			if(data.id.includes(searchInput)){
				fetch.push(data);   
			}
		})
		this.setState({
			currencies: fetch
		})
	}
	
	async handleGetCrypto(){
		try {
			const response = await fetch(url+api, {method: "GET"});
			if(response.ok){
				const jsonResponse = await response.json();
				this.setState({
					currencies: jsonResponse
				});
				crypto = jsonResponse;
			}
		} catch(error) {
			console.log(error);
		}
	}
	
	render(){
		return (
			<div className="container" style={{width: this.state.width+'px',height: this.state.height+'px'}} >
				<CryptoList result={this.showResults.bind(this)} browseCrypto={this.handleBrowseCrypto.bind(this)} current={this.state.current} currencies={this.state.currencies} />
			</div>
		);
	}
}

export default App;
