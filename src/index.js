import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import FormContainer from './js/components/container/form_container';
import rootReducer from './js/reducers';

const store = createStore(rootReducer);

window.React = React;

render(<Provider store={store}>
	     <FormContainer />
	   </Provider>,
       document.getElementById('react-container'));
