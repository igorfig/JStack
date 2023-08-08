import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('');
	const handleChangeName = (event) => setName(event.target.value);

	const emailInput = useRef(null);

	const handleClick = () => {
		console.log(emailInput.current.value);
	}

	return (
		<Form>
			<button type="button" onClick={handleClick}>
				Loga emailInput
			</button>
			<FormGroup>
				<Input
					value={name}
					onChange={handleChangeName} 
					placeholder="Nome" />
			</FormGroup>

			<FormGroup
				
			>
				<Input
					defaultValue="igorfigueirdors@gmail.com" 
					placeholder="E-mail" 
					ref={emailInput}/>
			</FormGroup>

			<FormGroup>
				<Input placeholder="Telefone" />
			</FormGroup>

			<FormGroup>
				<Select>
					<option value="instagram">Instagram</option>
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