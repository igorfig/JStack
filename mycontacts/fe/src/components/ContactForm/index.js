import { useState } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
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
	const { 
		errors, 
		setError, 
		removeError, 
		getErrorMessageByFieldName
	} = useErrors();

	const isFormValid = (name && errors.length === 0);

	const handleNameChange = (event) => { 
		setName(event.target.value); 

		if(!event.target.value) {
			setError({ field: 'name', message: 'Nome é obrigatório.' });
		} else {
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

	const handlePhoneChange = (event) => {
		setPhone(formatPhone(event.target.value));
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
					autoComplete="no"
					placeholder="Nome *" 
				/>
			</FormGroup>

			<FormGroup
				error={getErrorMessageByFieldName('email')}
			>
				<Input
					type="email"
					error={getErrorMessageByFieldName('email')}
					placeholder="E-mail"
					autoComplete="no"
					value={email}
					onChange={handleEmailChange}
				/>
			</FormGroup>

			<FormGroup>
				<Input 
					placeholder="Telefone"
					value={phone}
					autoComplete="no"
					onChange={handlePhoneChange}
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
				<Button type="submit" disabled={!isFormValid}>
					{buttonLabel}
				</Button>
			</ButtonContainer>
		</Form>
	)
}

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired
}