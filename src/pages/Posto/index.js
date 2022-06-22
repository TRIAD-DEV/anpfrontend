import React, { useEffect, useState } from "react";
import { 
    Box, 
    Button,  
    Container,  
    Paper,  
    Step, 
    StepLabel, 
    Stepper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TablePagination, 
    TableRow, 
    Typography 
} from '@mui/material';

import EmpresaForm from "./EmpresaForm";
import EnderecoForm from "./EnderecoForm";
import ANPForm from "./ANPForm";
import { AdicionarPosto } from "../../repositories/Posto";
import SnackAlert from "../../components/SnackAlert";
import PostoService from "../../services/PostoService";

import _uniqueId from 'lodash/uniqueId';



const steps = ['Empresa', 'Endereço', 'ANP'];

const columns = [
    { id: 'acoes', label: 'Ações' },
    { id: 'cnpj', label: 'CNPJ' },
    { id: 'razaoSocial', label: 'Razão Social' },
    { id: 'nomeFantasia', label: 'Nome Fantasia' },
    { id: 'bandeira', label: 'Bandeira' },
    { id: 'situacao', label: 'Situação ANP' },
    { id: 'endereco', label: 'Endereço' },
    { id: 'complemento', label: 'Complemento' },
    { id: 'bairro', label: 'Bairro' },
    { id: 'cidade', label: 'Cidade' },
    { id: 'uf', label: 'UF' },
    { id: 'regiao', label: 'Região' },
    { id: 'geolocalizacao', label: 'lat/lng' }
];

const classPosto = {
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    endereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estadoId: 0,
    latitude: 0,
    longitude: 0,
    situacaoId: 0
}

function Posto () {
    const [data, setData] = useState([]);
    const [criarPosto, setCriarPosto] = useState(classPosto);
    
    const [activeStep, setActiveStep] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    
    useEffect(()=>{RetornarPostos(); console.log("OK")},[])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    const handleAdd = () => {
        adicionarPosto(criarPosto);
    }

    function getStepContent(step) {
      switch (step) {
        case 0:
          return <EmpresaForm posto={criarPosto} setPosto={setCriarPosto} />;
        case 1:
          return <EnderecoForm posto={criarPosto} setPosto={setCriarPosto} />;
        case 2:
            return <ANPForm posto={criarPosto} setPosto={setCriarPosto} />;
        default:
          throw new Error('Unknown step');
      }
    }

    async function adicionarPosto(posto) {
        try {
            let result = await AdicionarPosto(posto);
            console.log(result);
            setOpenSuccess(true);
        } catch (error) {
            console.log(error);
            setOpenError(true);
        }
    }

    async function RetornarPostos() {
        try {
            let postoService = new PostoService()
            let result = await postoService.findAll();
            console.log(result);
            //setOpenSuccess(true);
            setData(result);
        } catch (error) {
            console.log(error);
            setOpenError(true);
        }
    }

    return (
        <Container>
            <SnackAlert open={openSuccess} setOpen={setOpenSuccess} severity="success" anchorOrigin={{vertical: 'top', horizontal: 'center'}} message="Posto criado com sucesso!" />
            <SnackAlert open={openError} setOpen={setOpenError} severity="error" anchorOrigin={{vertical: 'top', horizontal: 'center'}} message="Error ao criar o posto!" />
            
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Adicionar Posto
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            VOLTAR
                            </Button>
                        )}

                        {activeStep === (steps.length-1) ? (
                            <Button
                            variant="contained"
                            onClick={handleAdd}
                            sx={{ mt: 3, ml: 1 }}
                            >
                            ADICIONAR
                            </Button>
                        ) : (
                            <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 3, ml: 1 }}
                            >
                            PRÓXIMO
                            </Button>
                        )}
                        
                        </Box>
                    </>
                </Paper>
            </Container>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                //key={column.id}
                                //align={column.align}
                                align="center"
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo}>
                                {columns.map((column) =>                                                                    
                                    <TableCell key={_uniqueId('prefix-')} 
                                    align="center">    
                                    {row[column.id]}
                                    </TableCell>                                                                                                           
                                )}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container>
    );
}

export default Posto;