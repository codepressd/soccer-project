import React from 'react';
import { Link } from 'react-router';
import soccerBall from '../css/images/soccerBall.jpg';

class CompList extends React.Component {

	render() {

		const {teamInfo} = this.props;
		let teamImage = soccerBall;
		if(teamInfo.crestUrl !== null){
			teamImage = teamInfo.crestUrl;
		}
		
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/Team/${teamInfo.name}`}>
						
						<img src={teamImage} alt={teamInfo.name} className="grid-photo" />

					</Link>

				</div>
				<figcaption>
					<h4>{teamInfo.name}</h4>
				</figcaption>
				
			</figure>
		)
	}
}

export default CompList ;