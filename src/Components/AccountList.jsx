import { useState } from 'react';
import './AccountList.css';
function AccountList({ accounts, setAccount }) {
	const [accountFilter, setAccountFilter] = useState('All');

	const deleteHandler = (id) => {
		setAccount((prevState) => prevState.filter((acc) => acc.id !== id));
	};

	const sumHandler = (e) => {
		let updatedMoney = accounts.map((acc) =>
			acc.id === +e.target.id
				? { ...acc, enteredAmount: e.target.value }
				: acc
		);
		setAccount(updatedMoney);
	};

	const depositHandler = (id) => {
		let updatedMoney = accounts.map((acc) =>
			acc.id === id
				? {
						...acc,
						sum: acc.sum + +acc.enteredAmount,
						enteredAmount: '',
				  }
				: acc
		);
		setAccount(updatedMoney);
	};

	const withdrawHandler = (id) => {
		let updatedMoney = accounts.map((acc) =>
			acc.id === id
				? {
						...acc,
						sum: acc.sum - +acc.enteredAmount,
						enteredAmount: '',
				  }
				: acc
		);
		setAccount(updatedMoney);
	};

	const filterHandler = (e) => {
		setAccountFilter(e.target.value);
	};

	return (
		<>
			<div className='filter-container'>
				<div className='filter'>
					<label htmlFor='account'>Accounts filter:</label>
					<select
						name='account'
						id='account'
						onChange={filterHandler}
					>
						<option value='All'>All</option>
						<option value='withMoney'>Active</option>
						<option value='noMoney'>No Money</option>
					</select>
				</div>
			</div>

			<div className='account-list-container'>
				{[...accounts]
					.sort((a, b) => a.lastName.localeCompare(b.lastName))
					.filter((acc) =>
						accountFilter === 'withMoney'
							? acc.sum > 0
							: accountFilter === 'noMoney'
							? acc.sum === 0
							: true
					)
					.map((acc) => (
						<div className='list-container' key={acc.id}>
							<ul>
								<li>Name: {acc.name}</li>
								<li>Surname: {acc.lastName}</li>
								<li>Total: {acc.sum}</li>

								<input
									type='number'
									id={acc.id}
									value={acc.enteredAmount}
									onChange={sumHandler}
								/>
								<div className='btn-container'>
									<button
										onClick={() => deleteHandler(acc.id)}
									>
										Delete ACC
									</button>
									<button
										onClick={() => depositHandler(acc.id)}
									>
										Deposite
									</button>
									<button
										onClick={() => withdrawHandler(acc.id)}
									>
										Withdraw
									</button>
								</div>
							</ul>
						</div>
					))}
			</div>
		</>
	);
}

export default AccountList;
