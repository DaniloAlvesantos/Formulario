import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function DadodsUsuario({ aoEnviar }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      aoEnviar();
    }} >
      <TextField
        id="email"
        variant="outlined"
        margin="normal"
        fullWidth
        label="Email"
        type="email"
        required
      />
      <TextField 
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
