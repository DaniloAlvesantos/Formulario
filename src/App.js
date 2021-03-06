import React, { Component } from 'react';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';
import { Container, Typography } from '@material-ui/core'
class App extends Component {
  render(){
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForms} ValidarCPF={ValidarCPF} />
    </Container>    
  );
  }
}

function aoEnviarForms(dados){
  console.log(dados)
}

function ValidarCPF(cpf){
  if(cpf.length != 11){
    return {valido:false,texto:"CPF deve ter 11 digitos!"}
  }else{
    return {valido:true,texto:""}
  }
}

export default App;
