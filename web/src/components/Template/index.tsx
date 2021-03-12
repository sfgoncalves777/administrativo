import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu, FiSave, FiPower } from 'react-icons/fi'
import Sidebar from 'react-sidebar';
import { useAuth } from '../Contexts/auth';
import './style.css';

 interface PropsType {
  menu ?: string,
  funcionalidades ?: string[],
}

const Template: React.FC<PropsType> = ( { menu, funcionalidades, children } ) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { signOut } = useAuth();
  const history = useHistory();

  function logout() {
    signOut();
    history.push('/');
  }

  function openSetSidebarOpen( open: boolean ) {
    setSidebarOpen(open);
  }

  return (
    <Sidebar
      sidebar = {
        <div className ='content-menu'>
          <FiMenu
            className='icn-menu h'
            size={35}
            color='#F2F2F2'
            onClick = { () => openSetSidebarOpen(false) }
          />

          <h1 className='logo'>Tag Sistemas</h1>

          <Link to ='/cadastro' className='menu op_menu' onClick={() => openSetSidebarOpen(false)}>
            <p>Cadastro</p>
            <FiSave size={35} color='#F2F2F2'/>
          </Link>
          
          <button className='sair op_menu' onClick={logout}>
            Sair
            <FiPower size={35} color='#F2F2F2'/>
          </button>
        </div>
      }
      open = { sidebarOpen }
    >

      <div className='content'>
        <FiMenu 
          className='icn-menu'
          size={35}
          color='#F2F2F2'
          onClick={ () => openSetSidebarOpen(true) }
        />

        <p className='menu_selected'>{menu}</p>

        {
          funcionalidades?.map( funcionlidade => (
            <div key='funcionalidade' className='submenus'>
              <Link
                to={`/${menu?.toLocaleLowerCase()}/${funcionlidade.toLocaleLowerCase()}`}
                className={`op_submenu ${funcionlidade.toLocaleLowerCase()}`}
              >
                { funcionlidade }
              </Link>
            </div>
          ))
        }

      </div>

      <div>
        { children }
      </div>

    </Sidebar>
  )

}

export default Template;