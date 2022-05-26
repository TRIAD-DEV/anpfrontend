import React, { useEffect, useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import { Estados } from "../../../repositories/Estado";

function EnderecoForm({ posto, setPosto }) {
    const [estados, setEstados] = useState([]);

    const handleChange = (value, key) => {
        setPosto({
            ...posto,
            [key]: value
        });
    }

    async function BuscarEstados() {
        try {
            const result = await Estados();
            const modelo = result.map(uf => ({ value: uf.codigo, label: uf.sigla }));
            setEstados(modelo);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        BuscarEstados();
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <TextField
                    required
                    id="endereco"
                    name="endereco"
                    label="Endereço"
                    fullWidth
                    variant="standard"
                    onChange={(event) => handleChange(event.target.value, 'endereco')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="complemento"
                    name="complemento"
                    label="Complemento"
                    fullWidth
                    variant="standard"
                    onChange={(event) => handleChange(event.target.value, 'complemento')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="bairro"
                    name="bairro"
                    label="Bairro"
                    fullWidth
                    variant="standard"
                    onChange={(event) => handleChange(event.target.value, 'bairro')}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="cidade"
                    name="cidade"
                    label="Cidade"
                    fullWidth
                    variant="standard"
                    onChange={(event) => handleChange(event.target.value, 'cidade')}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl variant="standard" fullWidth>    
                    <InputLabel id="estado">Estado</InputLabel>
                    <Select
                        required
                        labelId="estado"
                        id="select-estado"
                        value={posto.estadoId}
                        onChange={(event) => handleChange(event.target.value, 'estadoId')}
                        label="Estado"
                    >
                        <MenuItem disabled value={0}>
                            <em>Selecione...</em>
                        </MenuItem>
                        { estados.map(estado => <MenuItem key={estado.value} value={estado.value}>{estado.label}</MenuItem>) }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="latitude"
                    name="latitude"
                    label="Latitude"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(event) => handleChange(parseFloat(event.target.value), 'latitude')}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="longitude"
                    name="longitude"
                    label="Longitude"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(event) => handleChange(parseFloat(event.target.value), 'longitude')}
                />
            </Grid>
        </Grid>
    );
}

export default EnderecoForm;