import React from 'react';


class TeamTable extends React.Component {

	render() {

		const {oneTeamInfo} = this.props;
		
		
		return (
			
			    <tr>
			      <th scope="row">{oneTeamInfo.position || oneTeamInfo.rank}</th>
			      <td>{oneTeamInfo.teamName || oneTeamInfo.team}</td>
			      <td>{oneTeamInfo.points}</td>
			      <td>{oneTeamInfo.goals}</td>
			      <td>{oneTeamInfo.goalsAgainst}</td>
			    </tr>
			  
		)
	}
}

export default TeamTable;