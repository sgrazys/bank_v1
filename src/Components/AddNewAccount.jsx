import { useState } from 'react';

function AddNewAccount({ addAccount }) {
	const [name, setName] = useState('');
	const [lastName, setLastname] = useState('');

	const nameHandler = (event) => {
		setName(event.target.value);
	};

	const lastNameHandler = (event) => {
		setLastname(event.target.value);
	};

	const dataHandler = (event) => {
		event.preventDefault();
		addAccount(name, lastName);
	};

	return (
		<form onSubmit={dataHandler}>
			<label htmlFor='name'>Name</label>
			<input type='text' name='name' id='name' onChange={nameHandler} />

			<label htmlFor='lastName'>Last name</label>
			<input type='text' id='lastName' onChange={lastNameHandler} />

			<button type='submit'>Add Account</button>
		</form>
	);
}

export default AddNewAccount;
