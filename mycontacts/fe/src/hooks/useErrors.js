import { useState } from 'react';

export default function useErrors() {
	const [errors, setErrors] = useState([]);

	const setError = ({ field, message }) => {
		const errorAlreadyExists = errors.find(error => error.field === field);

		if(errorAlreadyExists) {
			return;
		}

		setErrors(prevState => [
			...prevState,
			{ field, message }
		]);
	}

	const removeError = (fieldName) => {
		setErrors(prevState => prevState.filter(
			(error) => error.field !== fieldName,
		))
	}

	const getErrorMessageByFieldName = (fieldName) => {
		return errors.find(error => error.field === fieldName)?.message;
	}


	return {
		setError, 
		removeError, 
		getErrorMessageByFieldName, 
		errors
	};
}