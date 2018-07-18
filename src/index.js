import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './js/components/container/app';
// import rootReducer from './js/reducers';

// const store = createStore(rootReducer);

window.React = React;

// render(<Provider store={store}>
// 	     <FormContainer />
// 	   </Provider>,
//        document.getElementById('react-container'));

render(<App />, document.getElementById('react-container'));
