import React, { useState } from 'react';
import AddNewAccount from './Components/AddNewAccount';
import './App.css';
import AccountList from './Components/AccountList';

function App() {
	const [account, setAccount] = useState([]);

	const accountHandler = (name, lastName) => {
		setAccount((prevState) => [
			...prevState,
			{ name, lastName, id: Math.random(), sum: 0 },
		]);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<AddNewAccount addAccount={accountHandler} />

				<AccountList accounts={account} setAccount={setAccount} />
			</header>
		</div>
	);
}

export default App;
