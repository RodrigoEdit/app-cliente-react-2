const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./pages/home');
const pagenuevo = require("./pages/nuevo-musico")

ReactDOM.render(
	<pagenuevo />,
	document.getElementById('react')
)