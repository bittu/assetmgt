import React, {Component} from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';

import { Card, Row, Col, Input, Button, Icon } from 'react-materialize';

export default AuthenticatedComponent(class UserDashboard extends Component {
	render() {
		let itemHTML = <li>Hello {this.props.employee.FirstName}</li>;
		let locationFormHtml = (<form role="form" >
              <Row>
                <Input type="password" label="Password" s={12} />
                <Button type="submit" waves='light'>Submit<Icon right>send</Icon></Button>
              </Row>
            </form>);
		return <div>
						<ul>
							{ itemHTML }
						</ul>
						<Row>
							<Col l={4} m={6} s={12}>
								<Card title="Location" className="medium"
							    reveal={locationFormHtml}>
								</Card>
							</Col>
						</Row>
					</div>;
	}
});
