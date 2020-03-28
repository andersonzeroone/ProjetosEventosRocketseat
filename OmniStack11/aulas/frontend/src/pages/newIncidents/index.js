import React , {useState}from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';
import './style.css';
import logoImg from   '../../assets/logo.svg'
import api from '../../services/api';

export default function NewIncidents(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncidents(e){
    e.preventDefault();

    const data = {
     title,
     description,
     value,
    };
    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
      
    }catch(err){
      alert('Erro ao cadatrar caso');
    }
  }

  return (
    <div className="new-incidents-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The hero"/>
          <h1>Cadastrar novo caso</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos na sua ONG</p>
          <Link className="back-link" to="/profile">
            <FiArrowDownLeft size={16} color="#E02041"/>
            Voltar para Home.
          </Link>
        </section>
        <form onSubmit={handleNewIncidents}>
          <input 
            placeholder="Nome do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea  
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais."
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}