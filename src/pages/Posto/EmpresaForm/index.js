import { Grid, TextField } from "@mui/material";
import React from "react";

function EmpresaForm({ posto, setPosto }) {
    const handleChange = (value, key) => {
        setPosto({
            ...posto,
            [key]: value
        });
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    required
                    id="cnpj"
                    name="cnpj"
                    label="CNPJ"
                    fullWidth
                    autoComplete="00.000.000/0000-00"
                    variant="standard"
                    value={posto.cnpj}
                    onChange={(event) => handleChange(event.target.value, 'cnpj')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="razaoSocial"
                    name="razaoSocial"
                    label="Razão Social"
                    fullWidth
                    variant="standard"
                    value={posto.razaoSocial}
                    onChange={(event) => handleChange(event.target.value, 'razaoSocial')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="nomeFantasia"
                    name="nomeFantasia"
                    label="Nome Fantasia"
                    fullWidth
                    variant="standard"
                    value={posto.nomeFantasia}
                    onChange={(event) => handleChange(event.target.value, 'nomeFantasia')}
                />
            </Grid>
        </Grid>
    );
}

export default EmpresaForm;