import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const { data } = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			});
			setResults(data.businesses);
		} catch (error) {
			setErrorMessage('Something went wrong');
		}
	};

	//* call searchApi when component is first rendered
	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [ searchApi, results, errorMessage ];
};
