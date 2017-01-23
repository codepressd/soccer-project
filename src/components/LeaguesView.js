import React from 'react';
import LeagueList from './LeagueList';


class LeagueView extends React.Component {

	componentDidMount(){
		const apiUrl = 'https://api.football-data.org/v1/competitions/?season=2016';
		this.props.getLeagueData(apiUrl);
	}

	render() {
		
		return (
			<div className="divWrap">
			<h3>Soccerly is an easy way to stay on top of the standings and players European Soccer Leagues. Below is a list of leagues, pick one and explore the teams and players of that league!</h3>
			<h3>Have Fun!</h3>
			<h1>Choose A League</h1>
				<div className="the-grid">
				
				  	{this.props.listOfLeagues.map( (leagues, index) => <LeagueList {...this.props} key={index} index={index} leagueInfo={leagues} />)}

				</div>
			</div>
		)
	}
}
 
export default LeagueView;