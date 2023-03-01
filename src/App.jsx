import React, { useEffect, useState } from 'react';
import AddNewAccount from './Components/AddNewAccount';
import './App.css';
import AccountList from './Components/AccountList';
import AccountSummary from './Components/AccountSummary';

function App() {
	const [account, setAccount] = useState(
		JSON.parse(localStorage.getItem('accounts')) || []
	);

	const accountHandler = (name, lastName) => {
		setAccount((prevState) => [
			...prevState,
			{ name, lastName, id: Math.random(), sum: 0, enteredAmount: '' },
		]);
	};

	useEffect(() => {
		localStorage.setItem('accounts', JSON.stringify(account));
	}, [account]);

	return (
		<div className='App'>
			<header className='App-header'>
				<AddNewAccount addAccount={accountHandler} />
				<AccountList accounts={account} setAccount={setAccount} />
				<AccountSummary accounts={account} />
			</header>
		</div>
	);
}

export default App;
