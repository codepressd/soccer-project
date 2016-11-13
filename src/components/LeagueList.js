import React from 'react';
import { Link } from 'react-router';

class LegueList extends React.Component {

	render() {

		const {leagueInfo} = this.props;
		
		return (
			<figure className="grid-figure">
				<Link to={`/comps/${leagueInfo.league}/teams`}>
					<h3>{leagueInfo.caption}</h3>
				</Link>
				<h4>Number of Games: {leagueInfo.numberOfGames}</h4>
				<h4>Number of Teams: {leagueInfo.numberOfTeams}</h4>
				
			</figure>
		)
	}
}

export default LegueList ;