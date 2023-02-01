import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function AccountTable({ headList, bodyList }) {
	return (
		<Table striped>
			<thead>
				<tr>
					{headList.map((item, index) => (
						<th key={index}>{item}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{bodyList.map((item, index) => (
					<tr key={index}>
						<td>{item.accountId}</td>
						<td>{item.balance}</td>
						<td>{item.customerFirstName}</td>
						<td>{item.customerLastName}</td>
						<td>{item.customerEmail}</td>
						<td>
							<Button variant="primary">
								<Link
									style={{ textDecoration: "none", color: "white" }}
									to={`/accounts/${item.accountId}`}
								>
									details
								</Link>
							</Button>
							<Button variant="warning">update</Button>
							<Button variant="danger">danger</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default AccountTable;
