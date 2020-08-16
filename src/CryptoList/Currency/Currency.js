import React from 'react';
import './Currency.css';

class Currency extends React.Component {
	render(){
		return (
			<tr>
				<td className="currencyLogo">
					<img className="logo" src={this.props.currencies.logo_url}/>
				</td>
				<td className="currencyId">{this.props.currencies.symbol}</td>
				<td className="currencyPrice">{this.props.currencies.price}</td>
				<td className="marketCap">{this.props.currencies.market_cap}</td>
				<td className="circulating">{this.props.currencies.circulating_supply}</td>
				<td className="maxSupply">{this.props.currencies.max_supply}</td>
			</tr>
		)
	}
}

export default Currency;