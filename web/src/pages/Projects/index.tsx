import React from 'react';
import Template from '../../components/Template';
import { Link } from 'react-router-dom';
import './style.css';

const Software: React.FC = () => {
  return (
    <div className='content-software'>
      <Template menu='Cadastro' funcionalidades={['Usuário']}>
        <div className='header'>
          <p className='title'>Projects</p>
        </div>
        
        <div className='table'>
          <Link to='/cadastro/usuário/tagsistemas'>
            <div className='link'>
              Tag Sistemas
            </div>            
          </Link>

          <Link to='/cadastro/usuário/projectone'>
            <div className='link'>
              Project One
            </div>            
          </Link>
        </div>
      </Template>
    </div>    
  )
}

export default Software;