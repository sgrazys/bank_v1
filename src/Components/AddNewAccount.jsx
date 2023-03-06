import { useState } from 'react';
import './AddNewAccount.css';

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

		setName('');
		setLastname('');
	};

	return (
		<div className='container'>
			<h2>Create account</h2>
			<form className='form' onSubmit={dataHandler}>
				<div className='form-field'>
					<label htmlFor='name'>Name:</label>
					<input
						className='name-input'
						placeholder='Enter your name'
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={nameHandler}
					/>
				</div>
				<div className='form-field'>
					<label htmlFor='lastName'>Surname:</label>
					<input
						className='last-name-input'
						type='text'
						id='lastName'
						placeholder='Enter your surname'
						value={lastName}
						onChange={lastNameHandler}
					/>
				</div>

				<div className='btn-container'>
					<button className='btn' type='submit'>
						Add Account
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddNewAccount;
