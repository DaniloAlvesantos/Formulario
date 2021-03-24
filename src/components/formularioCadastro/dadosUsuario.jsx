import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function DadodsUsuario({ aoEnviar }) {
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      aoEnviar({email,senha});
    }} >
      <TextField
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        id="email"
        variant="outlined"
        margin="normal"
        fullWidth
        label="Email"
        type="email"
        required
      />
      <TextField 
      value={senha}
      onChange={(e) => {setSenha(e.target.value)}}
      id="senha" 
      label="Senha" 
      type="password" 
      variant="outlined"
      margin="normal"
      fullWidth
      required
      />
      
      <Button type="submit" variant="contained" color='primary' >Proximo</Button>
    </form>
  );
}
