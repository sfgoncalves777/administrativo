import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Template from '../../../components/Template';
import api from '../../../services/api';
import contactMask from '../../../utils/contactMask';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiSave, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import './style.css';

const ProjectOne_Edit: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();

  const [ company, setCompany ] = useState({
    nome: '',
    contato: '',
    email: '',
    status: ''
  })

  const [ errors, setErrors ] = useState({
    nome: '',
    contato: '',
    email: ''
  })

  useEffect(() => {
    api
      .get(`/projectone/companies/show/${id}`)
      .then( response => setCompany(response.data));
  }, [id])

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCompany({ ...company, [name]:value });
  }

  function handleMasckContact(event: ChangeEvent<HTMLInputElement>) {
    const contato = contactMask(event.target.value);
    setCompany({ ...company, contato })
  }

  function handleSelectStatus(event: ChangeEvent<HTMLSelectElement>) {
    const status = event.target.value;
    setCompany({ ...company, status });
  }

  async function handleDeleteCompany(id: number) {
    await api.delete(`/projectone/companies/delete/${id}`);
    history.push('/cadastro/usuário/projectone');
  }

  async function handleUpdateCompany() {
    await api
      .put(`/projectone/companies/edit/${id}`, company)
      .then( response => {
        if(response.data.error) {
          setErrors(response.data.error);
        } else {
          history.push('/cadastro/usuário/projectone')
        }
      }
    );
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className='content-projectone_edit'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Atualizar dados</p>
        </div>

        <form onSubmit={ handleSubmit } >
          <div className='info'>
            <label htmlFor="nome">Nome</label>
            <label htmlFor="nome" className='error'>{ errors.nome }</label>
          </div>
          <input
            type="text"
            name='nome'
            value={ company.nome }
            onChange={ handleInputChange }
            placeholder='Tag Sistemas'  
          />

          <div className='info'>
            <label htmlFor="contato">Contato</label>
            <label htmlFor="contato" className='error'>{ errors.contato }</label>
          </div>
          <input
            type="text"
            name='contato'
            maxLength={15}
            value={ company.contato }
            onChange={ handleMasckContact }
            placeholder='(00) 0000 0000'
          />

          <div className='info'>
            <label htmlFor="email">E-mail</label>
            <label htmlFor="email" className='error'>{ errors.email }</label>
          </div>
          <input
            type="text"
            name='email'
            value={ company.email }
            onChange={ handleInputChange }
            placeholder='contato@tagsistemas.com'  
          />

          <div className='info'>
            <label htmlFor="status">Status</label>
          </div>
          <select 
            name="status"
            value={ company.status }
            onChange={ handleSelectStatus }
          >
            <option value="ativo">Ativo</option>
            <option value="bloqueado">Bloqueado</option>
          </select>

          <div className='foother'>
            <Link to='/cadastro/usuário/projectone' className='back'>
              <FiArrowLeft size={20} color='#0D0D0D' className='icon'/>
              Voltar para home
            </Link>
            <div className='buttons'>
              <button
                type='submit'
                className='delete'
                onClick={ () => handleDeleteCompany(id) }
              >
                <FiTrash2 size={24} color='#F2F2F2' />
              </button>

              <button 
                type='submit'
                className='save'
                onClick={ () => handleUpdateCompany() }
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

export default  ProjectOne_Edit;