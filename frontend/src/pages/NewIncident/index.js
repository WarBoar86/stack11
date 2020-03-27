import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle]= useState('');
    const [description , setDescription]= useState('');
    const [value, setValue]= useState('');
    

    async function handleNewINcident(e){
        e.preventDefault();

        const data = { title, description, value };

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
        } catch (err) {
            alert('Erro ao cadastrar caso, tente novamente.');
            console.log(err);
        }
        
        history.push('/profile');

    }



    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src= {logoImg} alt="Be The Hero"/>

                    <h1>
                        Cadastrar novo caso
                    </h1>

                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolve-lo.
                    </p>

                    
                    <Link className="back-link" to="/profile" >
                        <FiArrowLeft size={16} color ="#e02041" />
                    Voltar para Home
                    </Link>

                </section>

                <form>
                    <input placeholder="Título do caso" 
                        value={ title }
                        onChange={ e => setTitle(e.target.value) }
                    />
                    <textarea placeholder="Descrição" 
                        value={ description }
                        onChange={ e => setDescription(e.target.value) }
                    />
                    <input placeholder="Valor em R$" 
                        value={ value }
                        onChange={ e => setValue(e.target.value) }
                    />

                    
                        <button onClick={handleNewINcident} className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}