import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from './hooks/useTheme'

export default function Button(props) {
	const { theme } = useTheme();
	return (
		<button 
			onClick={props.onClick}
			style={{
				color: theme === 'dark' ? '#fff' : '#000',
				background: theme === 'dark' ?'#000' : '#fff',
			}}
			>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}