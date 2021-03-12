import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

interface User{
  id: number,
  nome: string
}

const TagSistemas_Index: React.FC = () => {

  const [ users, setUsers ] = useState<User[]>([]);

  useEffect(() => {
    api
      .get('tagsistemas/users').then(response => setUsers(response.data));
  }, [])  
  
  return (
    <div className='content-tagsistemas_index'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Tag Sistemas</p>
          <Link to='/cadastro/usuário/tagsistemas/new' className='button'>Add</Link>
        </div>

        <div className='table'>
          {
            users.map(user => (
              <Link key={user.id} to={`/cadastro/usuário/tagsistemas/edit/${user.id}`}>
                <div className='link'>
                  {user.nome}
                </div>            
              </Link>
            ))
          }
        </div>
      </Template>
    </div>
  )
}

export default TagSistemas_Index;