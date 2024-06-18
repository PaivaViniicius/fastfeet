import React, { useState } from 'react';
import './FormAdmin.css'

const Form = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        senha: '',
        confirmacaoSenha: ''
    });
    
    const [errors, setErrors] = useState({
        senha: '',
        confirmacaoSenha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { senha, confirmacaoSenha } = formData;
        if (senha !== confirmacaoSenha) {
            setErrors({
                ...errors,
                confirmacaoSenha: 'Senhas não coincidem'
            });
            return;
        }
        setErrors({
            senha: '',
            confirmacaoSenha: ''
        });
        console.log('Dados do formulário:', formData);
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
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
                <label htmlFor="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="senha">Senha:</label>
                <input
                    type="password"
                    id="senha"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="confirmacaoSenha">Confirmação de Senha:</label>
                <input
                    type="password"
                    id="confirmacaoSenha"
                    name="confirmacaoSenha"
                    value={formData.confirmacaoSenha}
                    onChange={handleChange}
                />
                {errors.confirmacaoSenha && <span style={{ color: 'red' }}>{errors.confirmacaoSenha}</span>}
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
