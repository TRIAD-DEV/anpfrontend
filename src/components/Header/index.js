import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

function Header() {
    return (
        <AppBar position="relative">
            <Toolbar>
            <LocalGasStationIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
                CRUD Posto ANP
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;