import React from 'react';
import Currency from './Currency/Currency';
import BrowseButton from './BrowseButton/BrowseButton';
import './CryptoList.css';
import SearchBar from '../SearchBar/SearchBar';

class CryptoList extends React.Component {
	
	render() {
		const currencies = this.props.currencies.map(currency => {
			return <Currency currencies={currency} />;
		});
		const displayed = [];
		for(let i = this.props.current; i < (this.props.current+10); i++){
			displayed.push(currencies[i]);
		}
		return (
			<div className="currencyList">
				<div className="search">
					<SearchBar result={this.props.result} />
				</div>
				<table>
					<tr>
						<th className="crypto-data" id="currencyLogo">Logo</th>
						<th className="crypto-data" id="currencyId">Id</th>
						<th className="crypto-data" id="currencyPrice">Price</th>
						<th className="crypto-data" id="marketCap">Market Cap</th>
						<th className="crypto-data" id="circulating">circulating supply</th>
						<th className="crypto-data" id="supply">Max supply</th>
					</tr>
					{displayed}
				</table>
				<div>
					<BrowseButton id="Back" browseCrypto={this.props.browseCrypto} />
					<BrowseButton id="Next" browseCrypto={this.props.browseCrypto} />
				</div>
			</div>
		);
	}
}

export default CryptoList;