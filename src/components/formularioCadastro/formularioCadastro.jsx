import { Stepper,Step, Typography, StepLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosDeEntrega from "./dadosDeEntrega";
import DadosPessoais from "./dadosPessoais";
import DadodsUsuario from "./dadosUsuario";
import PaginalFinal from './paginaFinal';

function FormularioCadastro({aoEnviar,ValidarCPF}) {
  const [etapaAtual,setEtapa] = useState(0)
  const [dadosColetados,setDadosColetados] = useState({})
  useEffect(() => {
    aoEnviar(dadosColetados)
  })
  const formulario = [
    <DadodsUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} ValidarCPF={ValidarCPF} />,
    <DadosDeEntrega aoEnviar={coletarDados} />,
    <PaginalFinal aoEnviar={dadosColetados} />
  ]

  function coletarDados(dados){
    setDadosColetados({...dadosColetados , ...dados});
    proximoEtapa();
  }

  function proximoEtapa(){
    setEtapa(etapaAtual + 1);
  }
  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}

/* <DadosPessoais  />
<DadodsUsuario/>
<DadosDeEntrega/> */

export default FormularioCadastro;