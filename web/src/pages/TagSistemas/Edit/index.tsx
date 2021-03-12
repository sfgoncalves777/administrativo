import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Template from '../../../components/Template';
import api from '../../../services/api';
import contactMask from '../../../utils/contactMask';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiSave, FiTrash2 } from 'react-icons/fi';
import { useAuth } from '../../../components/Contexts/auth';
import './style.css'

const TagSistemas_Edit: React.FC = () => {
  const history = useHistory();
  const { userAuth } = useAuth();
  const { id } = useParams();
  const [ user, setUser ] = useState({
    nome: '',
    contato: '',
    email: ''
  });

  const [ errors, setErrors ] = useState({
    nome: '',
    contato: '',
    email: ''
  });
  
  useEffect(() => {
    api
      .get(`/tagsistemas/users/show/${id}`)
      .then(response => setUser(response.data));
  }, [ id ])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  function handleMasckContact(event: ChangeEvent<HTMLInputElement>) {
    const contato = contactMask(event.target.value);
    setUser({ ...user, contato })
  }

  async function handleDeleteUser(id: number) {
    if(user.email === userAuth?.email) {
      alert('Você não pode alterar seu próprio usuário aqui');
      history.push('/cadastro/usuário/tagsistemas');
    } else {
      await api.delete(`/tagsistemas/users/delete/${id}`);
      history.push('/cadastro/usuário/tagsistemas');
    }
  }

  async function handleUpdateUser() {
    if(user.email === userAuth?.email) {
      alert('Você não pode alterar seu próprio usuário aqui');
      history.push('/cadastro/usuário/tagsistemas');
    } else {
      await api
        .put(`/tagsistemas/users/edit/${id}`, user)
        .then(response => {
          if(response.data.error){
            setErrors(response.data.error)
          } else{
            history.push('/cadastro/usuário/tagsistemas');
          }    
        }
      );
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className='content-tagsistemas_edit'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Atualizar dados</p>
        </div>

        <form onSubmit={ handleSubmit }>
          <div className='info'>
              <label htmlFor="nome">Nome</label>
              <label htmlFor="nome" className='error'>{ errors.nome }</label>
            </div>          
            <input
              type="text"
              name='nome'
              value={ user.nome }
              onChange={ handleInputChange }
              placeholder='Ex: João da Silva'
            />

            <div className='info'>
              <label htmlFor="contato">Contato</label>
              <label htmlFor="contato" className='error'>{ errors.contato }</label>
            </div>          
            <input
              type="text"
              name='contato'
              maxLength={15}
              value={ user.contato }
              onChange={ handleMasckContact }
              placeholder='Ex: (00) 0000 0000'
            />

            <div className='info'>
              <label htmlFor="emal">E-mail</label>
              <label htmlFor="email" className='error'>{ errors.email }</label>
            </div>          
            <input
              type="text"
              name='email'
              value={ user.email }
              onChange={ handleInputChange }
              placeholder='Ex: contato@joao.com'
            />

            <div className='foother'>
              <Link to='/cadastro/usuário/tagsistemas' className='back'>
                <FiArrowLeft size={20} color='#0D0D0D' className='icon'/>
                Voltar para home
              </Link>
              <div className='buttons'>
                <button
                  type='submit'
                  className='delete'
                  onClick={ () => handleDeleteUser(id) }
                >
                  <FiTrash2 size={24} color='#F2F2F2' />
                </button>

                <button 
                  type='submit'
                  className='save'
                  onClick={ () => handleUpdateUser() }
                >
                  <FiSave size={24} color='#F2F2F2'/>
                </button>
              </div>
            </div>
        </form>
      </Template>
    </div>
  )
}

export default TagSistemas_Edit;