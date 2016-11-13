import React from 'react';
import { Link } from 'react-router';

class CompList extends React.Component {

	render() {

		const {teamInfo} = this.props;
		
		
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/Team/${teamInfo.code}`}>
						
						<img src={teamInfo.crestUrl} alt={teamInfo.name} className="grid-photo" />

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