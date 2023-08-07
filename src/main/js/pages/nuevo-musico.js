const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

const PageNuevoMusico = () =>{
    return(
        <>
            <h1>Nuevo Musico</h1>
            <form>
                <label>Nombres:</label>
                <input type="text" name="nombre"></input>
                <input type='submit' value="Nuevo Músico"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}
// npm i react-router-dom 
module.exports = PageNuevoMusico;