import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosDeEntrega from "./dadosDeEntrega";
import DadosPessoais from "./dadosPessoais";
import DadodsUsuario from "./dadosUsuario";

function FormularioCadastro({aoEnviar,ValidarCPF}) {
  const [etapaAtual,setEtapa] = useState(0)

  function proximoEtapa(){
    setEtapa(etapaAtual + 1);
  }
  
  function formularioAtual(etapa){
  switch(etapa){
    case 0 :
      return <DadodsUsuario aoEnviar={proximoEtapa} />
    case 1:
      return <DadosPessoais aoEnviar={proximoEtapa} ValidarCPF={ValidarCPF} />
    case 2: 
      return <DadosDeEntrega aoEnviar={aoEnviar} />
    default:
      return <Typography>Erro ao Selecionar Formulario</Typography>  
  }
}

  return (
    <>
      {formularioAtual(etapaAtual)}
    </>
  );
}

/* <DadosPessoais  />
<DadodsUsuario/>
<DadosDeEntrega/> */

export default FormularioCadastro;