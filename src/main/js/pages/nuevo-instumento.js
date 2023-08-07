const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevoInstru = () => {

    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/instrumentos',
            entity: { nombre: nombre ,categoria:categoria,descripcion:descripcion},
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Instrumento</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" onChange={(e)=>setCategoria(e.target.value)} />
                <label>Descripción</label>
                <input type="text" id="descripcion" name="descripcion" onChange={(e)=>setDescripcion(e.target.value)} />
                
                <input type="submit" value="Nuevo Instrumento" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoInstru;