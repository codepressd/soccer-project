import React from 'react';


class Player extends React.Component {

	render() {
		const {playerInfo} = this.props;
		return (
			<figure className="grid-figure">
				<h1 className="playerName">{playerInfo.name}</h1>
				<figcaption>
					<h4>Birthday: {playerInfo.dateOfBirth}</h4>
					<h4>Postion: {playerInfo.position}</h4>
					<h4>Jersey #: {playerInfo.jerseyNumber}</h4>
					<h4>Salary: {playerInfo.marketValue}</h4>
					<h4>Nationality: {playerInfo.nationality}</h4>
				</figcaption>
				
			</figure>
		)
	}
}

export default Player;