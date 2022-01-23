import {useState} from 'react';
import {useUpdateEffect} from "@app/hooks/useUpdateEffect/useUpdateEffect";

const SEARCH_SETTINGS = {
	defaultDelay: 500,
	timeout: null,
};

export const useSearchDebounce = ({initialValue = '', value, callback, delay = SEARCH_SETTINGS.defaultDelay} = {}) => {
	const [searchValue, setSearchValue] = useState(initialValue);

	useUpdateEffect(() => {
		setSearchValue(value);
	}, [value]);

	useUpdateEffect(() => {
		searchValue !== value && handleDebounce(searchValue);
	}, [searchValue]);

	const handleDebounce = (search = '') => {
		clearTimeout(SEARCH_SETTINGS.timeout);

		SEARCH_SETTINGS.timeout = setTimeout(() => callback(search), !search ? 0 : delay);
	};
	const handleSearchChange = (value) => setSearchValue(value);

	return {
		searchValue,
		handleSearchChange,
	};
};
