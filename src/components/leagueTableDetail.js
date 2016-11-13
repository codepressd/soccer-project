import React from 'react';
import TeamTable from './TeamTable';

class LeagueTable extends React.Component {

	render() {

		const {index} = this.props;
		
		
		return (
			<div className="table-layout">
			<h3>Group: {index}</h3>
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
			    {this.props.groupInfo.map((oneTeam, index) => <TeamTable {...this.props} key={index} oneTeamInfo={oneTeam} />)}
			  </tbody>
			</table>
			</div>
		)
	}
}

export default LeagueTable;