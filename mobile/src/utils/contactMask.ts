function contactMask(contato: string) {
  contato = contato.replace(/\D/g,"");
  contato = contato.replace(/^(\d{2})(\d)/g, "($1) $2");;
  contato = contato.replace(/(\d)(\d{4})$/, "$1 $2");
  
  return contato;
}

export default contactMask;