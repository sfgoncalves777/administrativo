import * as yup from 'yup';

const schema = {
  nome: yup.object().shape({ 
    nome: yup.string()
    .required('Nome requerido')
    .min(5, 'Nome inválido')
  }),
  contato: yup.object().shape({ 
    contato: yup.string()
    .required('Contato requerido')
    .min(14, 'Contato inválido')
    .max(15, 'Contato inválido')
  }),
  email: yup.object().shape({ 
    email: yup.string()
    .required('E-mail requerido')
    .email('E-mail inválido')
  }),
  senha: yup.object().shape({ 
    senha: yup.string()
    .required('Senha requerida')
    .min(4, "Senha muito curta")
    .max(14, 'Senha muito longa')
  })
}

export default schema;