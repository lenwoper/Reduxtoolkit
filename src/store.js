import { configureStore } from '@reduxjs/toolkit';
import { reducer, formData } from './slice.js';

export default configureStore({
	reducer: {
		customers: reducer,
		getFormDate: formData






	},
});