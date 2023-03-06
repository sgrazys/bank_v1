import './AccountSummary.css';

function AccountSummary({ accounts }) {
	const totalMoney = accounts.reduce((t, c) => t + c.sum, 0);

	return (
		<div className='summary-container'>
			<p>
				Total Accounts: <strong>{accounts.length}</strong>
			</p>
			<p>
				Total Money: <strong>{totalMoney}</strong>
			</p>
		</div>
	);
}

export default AccountSummary;
