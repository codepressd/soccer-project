import React from 'react';
import Player from './Player';
import soccerBall from '../css/images/soccerBall.jpg';


class Team extends React.Component {
	constructor(){

		super();
		this.getActiveTeam = this.getActiveTeam.bind(this);

	}
	getActiveTeam(){
		
		var index = this.props.team.teams.findIndex((oneTeam) => oneTeam.name === this.props.params.teamId);
	
		var activeTeam= this.props.team.teams[index];
		
		return activeTeam;
	}

	componentDidMount(){
		const actTeam = this.getActiveTeam();
		const apiUrl = actTeam._links.players.href;
		this.props.getTeamPlayersData(apiUrl);

	}

	render() {
		
		const activeTeam = this.getActiveTeam();
		
		const {players} = this.props.players;
		//no image
		let teamImage = soccerBall;
		if(activeTeam.crestUrl !== null){
			teamImage = activeTeam.crestUrl;
		}
		//no data
		let playersOutput = players.map((onePlayer, index) => <Player {...this.props} key={index} index={index} playerInfo={onePlayer}/>);

		if(players.length == 0){
			playersOutput =<h1 className="noData">There is no data for this Team!</h1>
		}

		return (
			<div className="divWrap">
				<div className="imgWrap">
					<img src={teamImage} alt={activeTeam.name} className="grid-photo" />
				</div>
				<h1>{activeTeam.name}</h1>
				<h3 className="center-it">Market Value: {activeTeam.squadMarketValue}</h3>
				<hr/>
				<div className="the-grid">
					{playersOutput}
				</div>
			</div>
		)
	}
}

export default Team;