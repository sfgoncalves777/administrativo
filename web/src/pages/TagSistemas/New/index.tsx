import React, { useState, ChangeEvent, FormEvent } from 'react';
import Template from '../../../components/Template';
import api from '../../../services/api';
import contactMask from '../../../utils/contactMask';
import { Link, useHistory } from 'react-router-dom';
import { FiSave, FiArrowLeft } from 'react-icons/fi';
import './style.css';

const TagSistemas_New: React.FC = () => {
  const history = useHistory();

  const [ errors, setErros ] = useState({
    nome: '',
    contato: '',
    email: '',
    senha: '',
  });

  const [ formData, setFormData ] = useState({
    nome: '',
    contato: '',
    email: '',
    senha: ''
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleMasckContact(event: ChangeEvent<HTMLInputElement>) {
    const contato = contactMask(event.target.value);
    setFormData({ ...formData, contato })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api
      .post('/tagsistemas/users/new', formData)
      .then(response => {
        if(response.data.error) {
          setErros(response.data.error) 
        } else {
          history.push('/cadastro/usuário/tagsistemas');
        }    
      });
    }

  return(
    <div className='content-tagsistemas_new'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Cadastrar novo usuário</p>
        </div>

        <form onSubmit={ handleSubmit }>
          <div className='form'>
            <div className='info'>
              <label htmlFor="nome">Nome</label>
              <label htmlFor="nome" className='error'>{ errors.nome }</label>
            </div>          
            <input
              type="text"
              name='nome'
              placeholder='Ex: João da Silva'
              onChange={ handleInputChange }
            />

            <div className='info'>
              <label htmlFor="contato">Contato</label>
              <label htmlFor="contato" className='error'>{ errors.contato }</label>
            </div>
            <input
              type="text"
              name='contato'
              placeholder='Ex: (00) 0000 0000'
              maxLength={15}
              value={ formData.contato }
              onChange={ handleMasckContact }
            />

            <div className='info'>
              <label htmlFor="emal">E-mail</label>
              <label htmlFor="email" className='error'>{ errors.email }</label>
            </div>          
            <input
              type="text"
              name='email'
              placeholder='Ex: contato@joao.com'
              onChange={ handleInputChange }
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
          </div>          
        </form>
      </Template>
    </div>
  )
}

export default TagSistemas_New;