import { Button, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React, { useState } from "react";

export default function PaginaFinal({ aoEnviar }) {
  return (
    <form>
      <Typography>Obrigado pelo cadastro,{aoEnviar.nome}</Typography>
      <Button type="submit" variant="contained" color='primary' >Proximo</Button>
    </form>
  );
}
