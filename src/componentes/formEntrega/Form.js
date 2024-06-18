import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        entregue: false,
        devolvida: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="endereco">Endereço:</label>
                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="entregue">
                    <input
                        type="checkbox"
                        id="entregue"
                        name="entregue"
                        checked={formData.entregue}
                        onChange={handleChange}
                    />
                    Entregue
                </label>
            </div>
            <div>
                <label htmlFor="devolvida">
                    <input
                        type="checkbox"
                        id="devolvida"
                        name="devolvida"
                        checked={formData.devolvida}
                        onChange={handleChange}
                    />
                    Devolvida
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;