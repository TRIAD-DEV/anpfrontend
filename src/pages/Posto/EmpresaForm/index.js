import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import React from "react";

export const bandeiras = [
    {value: '1', label: 'ALE'},
    {value: '2', label: 'BR'},
    {value: '3', label: 'IPIRANGA'},
    {value: '4', label: 'RODOIL'},
    {value: '5', label: 'SHELL'},
    {value: '6', label: 'TOTAL'},
    {value: '7', label: 'BRANCA'}
]

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
            <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>    
                    <InputLabel id="bandeira">Bandeira</InputLabel>
                    <Select
                        required
                        labelId="bandeira"
                        id="bandeira"
                        value={posto.bandeiraId}
                        onChange={(event) => handleChange(event.target.value, 'bandeiraId')}
                        label="Bandeira"
                    >
                        <MenuItem disabled value={0}>
                            <em>Selecione...</em>
                        </MenuItem>
                        { bandeiras.map(bandeira => <MenuItem key={bandeira.value} value={bandeira.value}>{bandeira.label}</MenuItem>) }
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default EmpresaForm;