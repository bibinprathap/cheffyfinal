import React from 'react';
import ChefFooter from './ChefFooter';
import ChefHeader from './ChefHeader';

const ChefLayout = ({ children }) => {
	return (
		<>
			<ChefHeader />
			<div>{children}</div>
			<ChefFooter />
		</>
	);
};

export default ChefLayout;
