import { TextField,Button } from "@material-ui/core";
import React from "react";

export default function DadosDeEntrega() {
  return (
    <form>
      <TextField
        id="Cep"
        variant="outlined"
        margin="normal"
        label="CEP"
        required
        type="number"
      />
      <TextField
        required
        id="numero"
        variant="outlined"
        margin="normal" 
        label="Numero"
        type="number"
      />
        <TextField
          required
          id="endereço"
          variant="outlined"
          margin="normal"
          fullWidth
          label="Endereço"
          type="text"
        />
      <TextField
        id="Estado"
        variant="outlined"
        margin="normal"
        fullWidth
        label="Estado"
        type="text"
        required
      />
      <TextField
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
