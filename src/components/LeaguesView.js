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
			<h1>Choose A League</h1>
				<div className="the-grid">
				
				  	{this.props.listOfLeagues.map( (leagues, index) => <LeagueList {...this.props} key={index} index={index} leagueInfo={leagues} />)}

				</div>
			</div>
		)
	}
}
 
export default LeagueView;