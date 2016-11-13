import React from 'react';
//import CompList from './CompList';
import { Link } from 'react-router';


class CompView extends React.Component {

	render() {
		
		const i = this.props.listOfLeagues.findIndex((leagues) => leagues.league === this.props.params.compId);
	
		const activeLeague = this.props.listOfLeagues[i];
		
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
						<h3><Link to={`/comps/${activeLeague.league}/teams`}>Teams</Link></h3>
					</li>
					<li>
						<h3><Link to="/teams" activeClassName="active"> Standings</Link></h3>
					</li>
				</ul>

			</div>
			<hr />
			
			</div>

		)
	}
}
 
export default CompView;