import React from 'react';
import LeagueTable from './leagueTableDetail';
import { Link } from 'react-router';
import TeamTable from './TeamTable';


class LeagueTableView extends React.Component {
	constructor(){
		super();
		this.getActiveLeagueTable = this.getActiveLeagueTable.bind(this);
	}

	getActiveLeagueTable(){
		var index = this.props.listOfLeagues.findIndex((leagues) => leagues.league === this.props.params.compId);
	
		var activeLeague = this.props.listOfLeagues[index];
		return activeLeague;
	}

	componentDidMount(){
		const actLeagueTable = this.getActiveLeagueTable();
		
		const apiUrl = 'http://api.football-data.org/v1/competitions/'+actLeagueTable.id+'/leagueTable';
		this.props.getLeagueTableData(apiUrl);

	}

	render() {
		const activeLeague = this.getActiveLeagueTable();
		const standings = this.props.leagueTable.standing || this.props.leagueTable.standings;
		let leagueTableStandings;

		
		if (this.props.leagueTable.standing){
			leagueTableStandings =  (
					<div className="table-layout">
					<h3>Standings</h3>
					<table className="table table-hover">
					  <thead>
					    <tr>
					      <th>Rank</th>
					      <th>Team</th>
					      <th>Points</th>
					      <th>Goals Scored</th>
					      <th>Goals Allowed</th>
					    </tr>
					  </thead>
					  <tbody>
					    {standings.map((oneTeam, index) => <TeamTable {...this.props} key={index} oneTeamInfo={oneTeam} />)}
					  </tbody>
					</table>
					</div>

				)
			
		}else{
			leagueTableStandings = Object.keys(standings).map((group, index) => <LeagueTable {...this.props} key={index} index={group} groupInfo={standings[group]} /> )

		}
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
					
					{ leagueTableStandings}

				</div>
				
			</div>
		)
	}
}

export default LeagueTableView;