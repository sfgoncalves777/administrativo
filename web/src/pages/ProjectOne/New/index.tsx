import React, { useState, ChangeEvent, FormEvent } from 'react';
import Template from '../../../components/Template';
import api from '../../../services/api';
import contactMask from '../../../utils/contactMask';
import { Link, useHistory } from 'react-router-dom';
import { FiSave, FiArrowLeft } from 'react-icons/fi';
import './style.css';

const ProjectOne_New: React.FC = () => {
  const history = useHistory();

  const [ formData, setFormData ] = useState({
    nome: '',
    contato: '',
    email: '',
    senha: ''
  });

  const [ errors, setErrors ] = useState({
    nome: '',
    contato: '',
    email: '',
    senha: ''
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleMasckContact(event: ChangeEvent<HTMLInputElement>) {
    const contato = contactMask(event.target.value);
    setFormData({ ...formData, contato })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    api
      .post('/projectone/companies/new', formData)
      .then(response => {
        if(response.data.error) {
          setErrors(response.data.error);
        } else {
          history.push('/cadastro/usuário/projectone');
        }
      });
    }

  return (
    <div className='content-projectone_new'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Cadastrar nova empresa</p>
        </div>

        <form onSubmit={ handleSubmit }>
          <div className='info'>
            <label htmlFor="nome">Nome</label>
            <label htmlFor="nome" className='error'>{ errors.nome }</label>
          </div>
          <input
            type="text"
            name='nome'
            onChange={ handleInputChange }
            placeholder='Ex: Tag Sistemas'
          />

          <div className='info'>
            <label htmlFor="contato">Contato</label>
            <label htmlFor="contato" className='error'>{ errors.contato }</label>
          </div>
          <input
            type="text"
            name='contato'
            maxLength={15}
            value={ formData.contato }
            onChange={ handleMasckContact }
            placeholder='Ex: (00) 0000 0000'
          />

          <div className='info'>
            <label htmlFor="email">E-mail</label>
            <label htmlFor="email" className='error'>{ errors.email }</label>
          </div>
          <input
            type="text"
            name='email'
            onChange={ handleInputChange }
            placeholder='Ex: contato@tagsistemas.com'
          />

          <div className='info'>
            <label htmlFor="senha">Senha</label>
            <label htmlFor="senha" className='error'>{ errors.senha }</label>
          </div>
          <input
            type="text"
            name='senha'
            onChange={ handleInputChange }
          />

          <div className='foother'>
              <Link to='/cadastro/usuário/tagsistemas' className='back'>
                <FiArrowLeft size={20} color='#0D0D0D' className='icon'/>
                Voltar para home
              </Link>

              <button type='submit'>
                <FiSave size={24} color='#F2F2F2'/>
              </button>
            </div>
        </form>
      </Template>
    </div>
  )
}

export default ProjectOne_New;