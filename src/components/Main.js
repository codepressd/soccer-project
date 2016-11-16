import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';




class Main extends React.Component {

	render() {
		

		return (
			<div>
				<h1>
					<Link to="/">Soccerly</Link>
				</h1>
				<hr/>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}
export default Main;