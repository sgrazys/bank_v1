import { useState } from 'react';
import './AccountList.css';
function AccountList({ accounts, setAccount }) {
	const [accountFilter, setAccountFilter] = useState('All');
	const [showModal, setShowModal] = useState({
		state: 'hidden',
		message: null,
	});

	const deleteHandler = (id) => {
		const accunt = accounts.filter((acc) => acc.id === id);

		if (accunt[0].sum > 0) {
			setShowModal({ state: 'visible', message: 'Account is not empty' });
			setTimeout(() => {
				setShowModal({
					state: 'hidden',
					message: '',
				});
			}, 3000);
		} else {
			setAccount((prevState) => prevState.filter((acc) => acc.id !== id));
			setShowModal({ state: 'visible', message: 'Account is deleted' });
			setTimeout(() => {
				setShowModal({
					state: 'hidden',
					message: '',
				});
			}, 3000);
		}
	};

	const sumHandler = (e) => {
		let enteredSum = e.target.value;

		if (+enteredSum >= 0 || !e.target.value) {
			let updatedMoney = accounts.map((acc) =>
				acc.id === +e.target.id
					? { ...acc, enteredAmount: +(+enteredSum).toFixed(2) }
					: acc
			);
			setAccount(updatedMoney);
		}
	};

	const depositHandler = (id) => {
		let updatedMoney = accounts.map((acc) =>
			acc.id === id
				? {
						...acc,
						sum: +(acc.sum + +acc.enteredAmount).toFixed(2),
						enteredAmount: '',
				  }
				: acc
		);
		setAccount(updatedMoney);
	};

	const withdrawHandler = (id) => {
		const account = accounts.filter((acc) => acc.id === id);

		if (+account[0].enteredAmount <= account[0].sum) {
			let updatedMoney = accounts.map((acc) =>
				acc.id === id
					? {
							...acc,
							sum: +(acc.sum - +acc.enteredAmount).toFixed(2),
							enteredAmount: '',
					  }
					: acc
			);
			setAccount(updatedMoney);
		} else {
			setShowModal({
				state: 'visible',
				message: 'Cannot withdraw more than in the account',
				color: 'crimson',
			});
			setTimeout(() => {
				setShowModal({
					state: 'hidden',
					message: '',
					color: '',
				});
			}, 3000);
		}
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
						<option value='noMoney'>Not Active</option>
					</select>
				</div>
			</div>

			{/*  MODAL */}
			<div className={showModal}>
				{/* cia dek stiliu */}
				<p>{showModal.message}</p>
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
							<ul className='list-items'>
								<li className='item name'>
									<strong>{acc.name} </strong>
								</li>
								<li className='item surname'>
									<strong> {acc.lastName}</strong>
								</li>
								<li className='item total'>
									Budget: {acc.sum.toFixed(2)} {'\u20AC'}
								</li>
							</ul>

							<div className='money-operations'>
								<input
									required
									className='money-input'
									type='number'
									id={acc.id}
									value={acc.enteredAmount}
									min={0}
									step={0.01}
									onChange={sumHandler}
								/>

								<button
									className='btn'
									onClick={() => depositHandler(acc.id)}
								>
									Deposite
								</button>
								<button
									className='btn withdraw'
									onClick={() => withdrawHandler(acc.id)}
								>
									Withdraw
								</button>
							</div>

							<div className='btn-container'>
								<button
									className='btn del'
									onClick={() => deleteHandler(acc.id)}
								>
									Delete Account
								</button>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default AccountList;
