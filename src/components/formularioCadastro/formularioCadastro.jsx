import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosDeEntrega from "./dadosDeEntrega";
import DadosPessoais from "./dadosPessoais";
import DadodsUsuario from "./dadosUsuario";

function FormularioCadastro({aoEnviar,ValidarCPF}) {
  const [etapaAtual,setEtapa] = useState(0)
  const [dadosColetados,setDadosColetados] = useState({})
  useEffect(() => {
    console.log(dadosColetados)
  })
  const formulario = [
    <DadodsUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} ValidarCPF={ValidarCPF} />,
    <DadosDeEntrega aoEnviar={coletarDados} />
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
      {formulario[etapaAtual]}
    </>
  );
}

/* <DadosPessoais  />
<DadodsUsuario/>
<DadosDeEntrega/> */

export default FormularioCadastro;