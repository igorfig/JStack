import React, { useState, useEffect, createContext, useContext } from 'react';

const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		const storagedTheme = JSON.parse(localStorage.getItem('@theme' || 'dark'));

		return storagedTheme || 'dark';
	});

	function handleToggleTheme() {
		setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
	}


	useEffect(() => localStorage.setItem('@theme', JSON.stringify(theme), [theme]))

	return (
		<ThemeContext.Provider value={{theme, handleToggleTheme}}>
			{children}
		</ThemeContext.Provider>
	) 
}

export function useTheme() {
	const context = useContext(ThemeContext);

	return context;
}