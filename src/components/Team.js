import React from 'react';
import Player from './Player';


class Team extends React.Component {
	constructor(){

		super();
		this.getActiveTeam = this.getActiveTeam.bind(this);

	}
	getActiveTeam(){
		
		var index = this.props.team.teams.findIndex((oneTeam) => oneTeam.code === this.props.params.teamId);
	
		var activeTeam= this.props.team.teams[index];
		
		return activeTeam;
	}

	componentDidMount(){
		const actTeam = this.getActiveTeam();
		
		const apiUrl = actTeam._links.players.href;
		this.props.getTeamPlayersData(apiUrl);

	}

	render() {
		//Going to have to change this once we get active data
		const activeTeam = this.getActiveTeam();
		
		const {players} = this.props.players;
		

		return (
			<div>
			<img src={activeTeam.crestUrl} alt={activeTeam.name} className="grid-photo" />

			<h1>{activeTeam.name}</h1>
			<h3 className="center-it">Market Value: {activeTeam.squadMarketValue}</h3>
			<hr/>
				<div className="the-grid">
					{players.map((onePlayer, index) => <Player {...this.props} key={index} index={index} playerInfo={onePlayer}/>)}
				</div>
			</div>
		)
	}
}

export default Team;