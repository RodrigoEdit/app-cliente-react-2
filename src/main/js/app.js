const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom')

const PageHome = require('./pages/home');
const PageNuevoInstru = require('./pages/nuevo-instrumento');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageVerInstrumento = require("./pages/ver-instrumento")

const router = createBrowserRouter(
	[
		{path: '/', element: <PageHome />},
		{path: '/nuevo-musico', element: <PageNuevoMusico />},
		{path: '/nuevo-instrumento', element: <PageNuevoInstru />},
		{path: '/ver-instrumento/:id', element: <PageVerInstrumento />},
	]
)

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
	document.getElementById('react')
)