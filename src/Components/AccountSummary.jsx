function AccountSummary({ accounts }) {
	const totalMoney = accounts.reduce((t, c) => t + c.sum, 0);

	return (
		<div>
			<p>Total accounts: {accounts.length}</p>
			<p>Total sum: {totalMoney}</p>
		</div>
	);
}

export default AccountSummary;
