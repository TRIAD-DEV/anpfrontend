import { Alert, Snackbar } from "@mui/material";
import React from "react";

function SnackAlert({ open, setOpen, severity, anchorOrigin, message }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={anchorOrigin}>
            <Alert onClose={handleClose} variant="filled" severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackAlert;