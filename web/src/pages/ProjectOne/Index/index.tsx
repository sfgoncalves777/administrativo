import React, { useState, useEffect } from 'react';
import Template from '../../../components/Template';
import api from '../../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

interface Company {
  id: number,
  nome: string
}

const ProjectOne_Index: React.FC = () => {
  const [ companies, setCompanies ] = useState<Company[]>([]);

  useEffect(() => {
    api.get('projectone/companies').then(response => setCompanies(response.data));
  }, [])

  return (
    <div className='content-projectone_index'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Projeto One</p>
          <Link to='/cadastro/usuário/projectone/new' className='button'>Add</Link>
        </div>

        <div className='table'>
          {
            companies.map(company => (
              <Link key={company.id} to={`/cadastro/usuário/projectone/edit/${company.id}`}>
                <div className='link'>
                  {company.nome}
                </div>
              </Link>
            ))
          }
        </div>
      </Template>
    </div>
  )
}

export default ProjectOne_Index;