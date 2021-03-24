import { TextField,Button } from "@material-ui/core";
import React, { useState } from "react";

export default function DadosDeEntrega({ aoEnviar }) {
  const [cep,setCep] = useState('');
  const [Num,setNum] = useState('');
  const [endereco,setEndereco] = useState('');
  const [estado,setStado] = useState('');
  const [cidade,setCidade] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      aoEnviar({cep,Num,endereco,estado,cidade});
    }} >
      <TextField
        value={cep}
        onChange={(e) => {
          setCep(e.target.value)
        }}
        id="Cep"
        variant="outlined"
        margin="normal"
        label="CEP"
        required
        type="number"
      />
      <TextField
        value={Num}
        onChange={(e) => {
          setNum(e.target.value)
        }}
        required
        id="numero"
        variant="outlined"
        margin="normal" 
        label="Numero"
        type="number"
      />
        <TextField
          value={endereco}
          onChange={(e) => {
            setEndereco(e.target.value)
          }}
          required
          id="endereco"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Endereço"
          type="text"
        />
      <TextField
        value={estado}
        onChange={(e) => {
          setStado(e.target.value)
        }}
        id="Estado"
        variant="outlined"
        margin="normal"
        fullWidth
        label="Estado"
        type="text"
        required
      />
      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value)
        }}
        required
        id="Cidade"
        variant="outlined"
        margin="normal"
        fullWidth
        label="Cidade"
        type="text"
      />
       <Button type="submit" variant="contained" color='primary' fullWidth >Finalizar Cadastro</Button>
    </form>
  );
}