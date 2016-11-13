import React from 'react';
import CompList from './CompList';
import { Link } from 'react-router';



class TeamsView extends React.Component {
	constructor(){
		super();
		this.getActiveLeague = this.getActiveLeague.bind(this);
	}

	getActiveLeague(){
		var index = this.props.listOfLeagues.findIndex((leagues) => leagues.league === this.props.params.compId);
	
		var activeLeague = this.props.listOfLeagues[index];
		return activeLeague;
	}

	componentDidMount(){
		const actLeague = this.getActiveLeague();
		
		const apiUrl = 'http://api.football-data.org/v1/competitions/'+actLeague.id+'/teams';
		this.props.getTeamData(apiUrl);

	}

	render() {
		const activeLeague = this.getActiveLeague();

		return (
			<div>
			<h1>{activeLeague.caption}</h1>
			<div className="detailWrap">
				<ul>
					<li><h1 className="league-details"># of games :{activeLeague.numberOfGames}</h1></li>
					<li><h1 className="league-details"># of  teams :{activeLeague.numberOfTeams}</h1></li>
				</ul>
			</div>
			<div className="detailWrap">
				<ul>
					<li>
						<h3><Link to={`/comps/${activeLeague.league}/teams`} activeClassName="active">Teams</Link></h3>
					</li>
					<li>
						<h3><Link to={`/comps/${activeLeague.league}/league-table`} activeClassName="active"> Standings</Link></h3>
					</li>
				</ul>

			</div>
			<hr />
			
			
			
			<div className="the-grid">
				
				{ Object.keys(this.props.team.teams).map( (team, index) => 
				<CompList {...this.props} key={index} index={index} teamInfo={this.props.team.teams[index]} />)

				}

			</div>
				
			</div>
		)
	}
}
 
export default TeamsView;


