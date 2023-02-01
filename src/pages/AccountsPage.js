import React from "react";
import { Container } from "react-bootstrap";
import AccountTable from "../components/AccountTable";
import Header from "../components/Header";
import { accountData } from "../data/DummyData";

const headList = [
	"Reference de compte",
	"Solde",
	"Nom",
	"Prenom",
	"Email",
	"Actions",
];

function AccountsPage() {
	return (
		<div>
			<Header />
			<Container style={{ marginTop: 40 }}>
				<AccountTable headList={headList} bodyList={accountData} />
			</Container>
		</div>
	);
}

export default AccountsPage;
