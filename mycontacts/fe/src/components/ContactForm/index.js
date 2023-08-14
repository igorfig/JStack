import { useState } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const { setError, removeError, getErrorMessageByFieldName} = useErrors();

	const handleNameChange = (event) => { 
		setName(event.target.value); 

		if(!event.target.value) {
			setError({ field: 'name', message: 'Nome é obrigatório.' });
		} else {
			setErrors(prevState => prevState.filter(
				(error) => error.field !== 'name'
			));

			removeError('name');
		}
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);

		if(event.target.value && !isEmailValid(event.target.value)) {
			setError({ field: 'email', message: 'E-mail inválido.' })
		} else {
			removeError('email');
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// console.log({
		// 	name, email, phone, category
		// })
	}

	return (
		<Form onSubmit={handleSubmit} noValidate>
			<FormGroup 
				error={getErrorMessageByFieldName('name')}
			>
				<Input
					error={getErrorMessageByFieldName('name')}
					value={name}
					onChange={handleNameChange} 
					placeholder="Nome" 
				/>
			</FormGroup>

			<FormGroup
				error={getErrorMessageByFieldName('email')}
			>
				<Input
					type="email"
					error={getErrorMessageByFieldName('email')}
					placeholder="E-mail"
					value={email}
					onChange={handleEmailChange}
				/>
			</FormGroup>

			<FormGroup>
				<Input 
					placeholder="Telefone"
					value={phone}
					onChange={(event) => setPhone(event.target.value)}
				/>
			</FormGroup>

			<FormGroup>
				<Select
					value={category}
					onChange={(event) => setCategory(event.target.value)}
					>
					<option value="">Categoria</option>
					<option value="instagram">Instagram</option>
					<option value="discord">Discord</option>
				</Select>	
			</FormGroup>

			<ButtonContainer>
				<Button type="submit">
					{buttonLabel}
				</Button>
			</ButtonContainer>
		</Form>
	)
}

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired
}