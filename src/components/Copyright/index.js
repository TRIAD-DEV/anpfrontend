import { Link, Typography } from "@mui/material";
import React from "react";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="http://triadpesquisa.com.br/">
                TRIAD RESEARCH
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;