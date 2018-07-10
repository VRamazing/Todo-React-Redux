import React from 'react';
import { render } from 'react-dom';
// import './stylesheets/ui.scss'
import FormContainer  from './js/components/container/FormContainer';

window.React = React;

render(
	<FormContainer />,
	document.getElementById('react-container')
)


// import FormContainer from "./js/components/container/FormContainer";