import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
	render() {
		const clients = [
			{
				id: 1,
				firstName: 'John',
				lastName: 'Doe',
				email: 'doe@gom.co',
				phone: '123-456-789',
				balance: '30'
			},
			{
				id: 2,
				firstName: 'John',
				lastName: 'Doe',
				email: 'doe@gom.co',
				phone: '123-456-789',
				balance: '30.78'
			}
		];

		if (clients) {
			return (
				<div>
					<div className="row">
						<div className="col-md-6">
							<h2>
								<i className="fas fa-users" /> Clients
							</h2>
						</div>
						<div className="col-md-6">
							<h6>Total</h6>
						</div>
					</div>
					<table className="table table-striped">
						<thead className="thead-inverse">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Balance</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{clients.map((client) => (
								<tr key={client.id}>
									<td>
										{client.firstName} {client.lastName}
									</td>
									<td>{client.email}</td>
									<td>${parseFloat(client.balance).toFixed(2)}</td>
									<td>
										<Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
											<i className="fas fa-arrow-circle-right" /> Details
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		} else {
			<h1>Loading . . . </h1>;
		}
	}
}

export default Clients;
