import { useState } from 'react';

function AccountList({ accounts, setAccount }) {
	const deleteHandler = (id) => {
		setAccount((prevState) => prevState.filter((acc) => acc.id !== id));
	};

	const [money, setMoney] = useState(0);

	const sumHandler = (event) => {
		setMoney(event.target.value);
	};

	return (
		<>
			{[...accounts]
				.sort((a, b) => a.lastName.localeCompare(b.lastName))
				.map((acc) => (
					<div key={acc.id}>
						<p>{acc.name}</p>
						<p>{acc.lastName}</p>
						<p>{acc.sum}</p>
						<button onClick={() => deleteHandler(acc.id)}>
							Delete ACC
						</button>
						<input type='number' onChange={sumHandler} />
						<button>Deposite</button>
						<button>Witdraw</button>
					</div>
				))}
		</>
	);
}

export default AccountList;
