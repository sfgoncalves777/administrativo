import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../components/Contexts/auth';
import './style.css';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const history = useHistory();

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    const email = event.target.value;

    setEmail(email);
  }

  function handleChangepassword(event: ChangeEvent<HTMLInputElement>) {
    const senha = event.target.value;

    setSenha(senha);
  }

  async function handleSubmit(event: FormEvent ){
    event.preventDefault();
    const erro = await signIn(email, senha);
    console.log(erro);

    if(erro) {
      alert(erro);
    } else {
      history.push('/home');
    }    
  }

  return (
    <div className='content-login'>
      <div className='content-form'>
        <p className='logo'>Tag Sistemas</p>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            name='email'
            placeholder='E-mail'
            onChange={handleChangeEmail}
          />

          <input
            type="password"
            name='senha'
            placeholder='Senha'
            onChange={handleChangepassword}
          />

          <div className='foother'>
            <Link to=''>Esqueci a senha</Link>
          </div>

          <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;