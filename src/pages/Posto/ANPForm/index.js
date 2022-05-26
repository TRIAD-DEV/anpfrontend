import React, { useEffect, useState } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

import { Situacoes } from "../../../repositories/Situacao";

function ANPForm({ posto, setPosto }) {
    const [situacoes, setSituacoes] = useState([]);

    const handleChange = (value, key) => {
        setPosto({
            ...posto,
            [key]: value
        });
    }

    async function BuscarSituacoes () {
        try {
            const result = await Situacoes();
            let modelo = result.map(situacao => ({ value: situacao.codigo, label: situacao.nome }));

            setSituacoes(modelo);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        BuscarSituacoes();
    }, []);

    return (
        <div>
            <FormControl>
                <FormLabel id="situacao">Situação</FormLabel>
                <RadioGroup
                    aria-labelledby="situacao"
                    name="radio-buttons-group"
                    onChange={(event) => handleChange(parseInt(event.target.value), 'situacaoId')}
                >
                    {situacoes.map(s => <FormControlLabel key={s.value} value={s.value} control={<Radio />} label={s.label} />)}
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default ANPForm;